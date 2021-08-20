// cd153abcdb5c15ee6bef3c96e0c8451f

// making api call 
var getCityWeather = function(city) {
    // format the github api url
    var apiUrl = "api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=cd153abcdb5c15ee6bef3c96e0c8451f";
     
  
    // make a get request to url
    fetch(apiUrl)
      .then(function(response) {
        // request was successful
        if (response.ok) {
          console.log(response);
          response.json().then(function(data) {
            console.log(data);
            displayWeather(data, city);
          });
        } else {
          alert("Error: " + response.statusText);
        }
      })
      .catch(function(error) {
        alert("Unable to show current weather");
      });
  };
getCityWeather("rahway");


//   var displayWeather = function(city, searchTerm) {
//     // check if api returned any repos
//     if (city.length === 0) {
//       repoContainerEl.textContent = "No such city found.";
//       return;
//     }
  
//     citySearchTerm.textContent = searchTerm;
  
//     // loop over cities
//     for (var i = 0; i < city.length; i++) {
//       // format repo name
//       var cityName = city[i].owner.login + "/" + city[i].name;
  
//       // create a link for each repo
//       var repoEl = document.createElement("a");
//       repoEl.classList = "list-item flex-row justify-space-between align-center";
//       repoEl.setAttribute("href", "./single-repo.html?repo=" + cityName);
  
//       // create a span element to hold city name
//       var titleEl = document.createElement("span");
//       titleEl.textContent = cityName;
  
//       // append to container
//       repoEl.appendChild(titleEl);
  
//       // create a status element
//       var statusEl = document.createElement("span");
//       statusEl.classList = "flex-row align-center";
  
//       // check if current repo has issues or not
//       if (repos[i].open_issues_count > 0) {
//         statusEl.innerHTML =
//           "<i class='fas fa-times status-icon icon-danger'></i>" + repos[i].open_issues_count + " issue(s)";
//       } else {
//         statusEl.innerHTML = "<i class='fas fa-check-square status-icon icon-success'></i>";
//       }
  
//       // append to container
//       repoEl.appendChild(statusEl);
  
//       // append container to the dom
//       repoContainerEl.appendChild(repoEl);
//     }
//   };