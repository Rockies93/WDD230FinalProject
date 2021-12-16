const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=40.233845&lon=-111.658531&exclude={part}&appid=e518782e81957a2dcf5d4fb87ea26f8d&units=imperial";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

//current weather conditions
let currentConditions = document.querySelector('div.current-weather');
let list = document.createElement('ul');
currentConditions.appendChild(list);

let temp = document.createElement('li');
temp.textContent = `Current Temperature: ${jsObject.current.temp} \u00B0F`;
list.appendChild(temp);

let conditions = document.createElement('li');
conditions.textContent = `Current Conditions: ${jsObject.current.weather[0].description} `;
list.appendChild(conditions);

let humidity = document.createElement('li');
humidity.textContent = `Humidity: ${jsObject.current.humidity}\u0025`;
list.appendChild(humidity);

//Three Day Forcast 
for (let i = 0; i < 3; i++) {
    let forecast = document.querySelector('div.forecast');
    let daily = document.createElement('div');
    daily.setAttribute('class','daily')
    forecast.appendChild(daily);

    epochDate = jsObject.daily[i].dt;
    let date = new Date(0);
    date.setUTCSeconds(epochDate);
    console.log(date);
    let dayHeader = document.createElement('h4');
    dayHeader.textContent = new Intl.DateTimeFormat('en-US', {dateStyle: 'full'}).format(date);
    daily.appendChild(dayHeader);

    let dayTemp = document.createElement('p');
    dayTemp.textContent = jsObject.daily[i].temp.day;
    daily.appendChild(dayTemp);
}

//Closable Alert 
if (jsObject.hasOwnProperty('alert')) {
    let alert = document.querySelector('span.alert');
    window.alert( `Weather Alert: ${jsObject.alert.description}`);

}

});