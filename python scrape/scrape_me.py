import logging
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import pandas as pd
from selenium.webdriver.common.by import By

logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger(__name__)

df: pd.DataFrame = pd.DataFrame(columns=['Data','Link']) # creates master dataframe 
url: str = "http://localhost:5500/"
# Open the browser and go to the local web server
driver: webdriver.Firefox = webdriver.Firefox()
driver.get(url)

# Find the data you are looking for
# scrape the text from the data attribute
data: list = driver.find_elements(By.CSS_SELECTOR,'.header')
# scrape the href links from the data attribute
links: list = driver.find_elements(By.CSS_SELECTOR,'.header')

datalist: list = []
for s in range(len(data)):
    datalist.append(data[s].text)

datalinks = []
for s in range(len(links)):
    datalinks.append(links[s].get_attribute('href'))

data_tuples: list = list(zip(datalist[1:],datalinks[1:])) # list of each players name and salary paired together
temp_df: pd.DataFrame = pd.DataFrame(data_tuples, columns=['Data','Link']) # creates dataframe of each tuple in list
df = df.append(temp_df) # appends to master dataframe
# Save the data to a JSON file
import json
# loop through df and save each row as a json object

savedata: str = df.to_json(orient='records')

with open('data.json', 'w') as f:
    json.dump(savedata, f)
print(df)
# Close the browser
driver.close()
