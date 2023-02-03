fetch('./data.json')
  .then(response => response.json())
  .then(data => {
    let searchTerm = document.getElementById('search-final').value;
    
    // get the search button
    let searchButton = document.getElementById('search-button');

    // add eventlistener on click
    searchButton.addEventListener('click', function() {
      
    // on the user input we need to search the data for the user input
      searchTerm = searchTerm.toLowerCase();
      // searchTerm add eventlistener on keyup
      
      
      
    
        // search the data for the user input
        let result = Array.from(data).find(item => item.name === searchTerm);
        if (!result) {
          console.log('No results found');
          return;
        }

    // display the results in the UI into a floating div
        let div = document.createElement('div');
        div.innerHTML = `
          <h2>${result.name}</h2>
          <p>${result.description}</p>
        `;
        document.body.appendChild(div);

      });


  });
