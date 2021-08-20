// Global Variable
var searchHistory = [];




// making api call 
var getCityWeather = function(city) {
    // format the github api url
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=cd153abcdb5c15ee6bef3c96e0c8451f";
     
  
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


  var displayWeather = function(city, searchTerm) {
    // check if api returned any cities
    if (city.length === 0) {
      repoContainerEl.textContent = "No such city found.";
      return;
    }
  
    citySearchTerm.textContent = searchTerm;
  