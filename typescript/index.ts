// const world = 'world';

// export function hello(who: string = world): string {
//   return `Hello ${who}! `;
// }

// API urls
const APIurl = 'https://icanhazdadjoke.com/';
const myInit = {
  headers: { 'Accept': 'application/json' }
};


// Ejercicio 1 y 2

// get button to call next joke and add click event
const nextJokeButton = document.getElementById('nextJokeButton');
nextJokeButton?.addEventListener('click', nextJoke);

// function that fetches the API to get a joke
async function nextJoke() {
  let response = await fetch(APIurl, myInit);
  let joke = await response.json();
  let jokep = document.getElementById('joketext');
  jokep!.innerHTML = joke.joke;
}

// Ejercicio 3

class Joke {
  
  public joke: String;
  public score: Number;
  public date: String;

  //construct
  constructor(joke: String, score: Number, date: String){
      this.joke = joke;
      this.score = score;
      this.date = date;
  }
}

const reportJokes: Joke[] = [];

const ratingButtons = document.querySelectorAll('.rateButton');
for(let ratingButton of ratingButtons){
  ratingButton.addEventListener('click', vauleJoke);
}

function vauleJoke(event: any){
  let idButtonPressed = event.target.id;
  let score = 0;
  switch (idButtonPressed) {
      case 'badButton':
          score = 1;
          break;
      case 'normalButton':
          score = 2;
          break;
      case 'goodButton':
          score = 3;
          break;
      default:
          return 'No button pressed';
  }
  let joke = document.getElementById('joketext')?.innerHTML;
  let date = (new Date()).toISOString();
  let newJoke = new Joke(joke!, score, date);
  reportJokes.push(newJoke);

  console.log(reportJokes);

}

// Ejercicio 4

// get weather
// const APIweatherUrl = 'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}';
const APIweatherKey = 'aee177c467100e7458a1fd62845ff423';
const waether_info = document.getElementById('waether_info');
const weather_image = document.getElementById('weather_image');

navigator.geolocation.getCurrentPosition( getWeather , () => {
    // console.log('Not allowed');
    // waether_info!.innerHTML = 'Weather not available because you did not allow your browser to know your current location :(';
    document.getElementById('div_weather')?.setAttribute('style', 'display: none');
});

async function getWeather(position: any){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    let apiUrlWeatherComplete = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIweatherKey}`;

    // console.log(apiUrlWeatherComplete);

    let response = await fetch(apiUrlWeatherComplete);
    let weatherResponse = await response.json();
    let weather_icon = weatherResponse.weather[0].icon;
    let temperature = Math.round(weatherResponse.main.temp - 273.15); //temperature in K, converted to C

    
    waether_info!.innerHTML = temperature + 'ºC';
    weather_image?.setAttribute('src', `http://openweathermap.org/img/wn/${weather_icon}@2x.png`);

}