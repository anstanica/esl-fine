# In[ ]:


import requests
from bs4 import BeautifulSoup as bs
import json


# use pandas dataframe to store data
import pandas as pd


def scrape_data(url):
    url = requests.get(url)  # make a request to the url and save it in variable r, then parse the html content using beautiful soup library, then find all the tags with class "subnav-content" and save them to variable "soup", then loop through each tag found in soup variable and extract text from <a>tag ,then extract href links from <a>tag and save them to another variable "links". finally loop through both variables and append data into dictionary object named data.

    # parse html content of r object using beautiful soup library, then set it equal to a new variable called soup
    # soup = bs(r.text, "html.parser")

    # get all div tags with class "subnav-content" in the html page
    html_doc = '<html><div class="subnav-content">content 1</div><div class="subnav-content">content 2</div></html>'

    soup = bs(url.text, "html.parser")
    # df = pd.DataFrame(columns=['Data', 'Link'])  # creates master dataframe
    for subnav_content in soup.findAll("div", class_=['subnav-content', 'subnav-content-clothes', "subnav-content-transport"], ):

       
        print(subnav_content)
        # check if there is any value in subnav_contents or not if there is no value skip this step otherwise continue with next step by executing else statement below this line
        data = {}  # create a new dictionary object named data
        # create a new key named "Data" and set it equal to an empty list
        data_key = data["Data"] = []
        # create a new key named "Link" and set it equal to an empty list
        data_value= data["Link"] = []
        # loop through all <a> tags inside the subnav_content variable and set it equal to a new variable called a
        for a in subnav_content.findAll("a"):
            # extract text from <a> tag and append it to the list of "Data" key in data dictionary object
            data_key.append(a.text)
            # extract href link from <a> tag and append it to the list of "Link" key in data dictionary object
            data_value.append(a.get("href"))
            

    # convert data dictionary object to json object and save it to a file named data.json
    with open("data.json", "w") as f:
        json.dump(data, f)


scrape_data("http://localhost:5500/")
