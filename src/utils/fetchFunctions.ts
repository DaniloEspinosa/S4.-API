import { result } from "../interfaces/result";

let city = "barcelona";
const JOKES = "https://icanhazdadjoke.com/";
const JOKES_API = "https://v2.jokeapi.dev/joke/Any?type=single";
const JOKES_CHUCK = "https://api.chucknorris.io/jokes/random";
const API_WEATHER = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=93b7d700335e20d50fbed4f29e09c2ea`;

export async function fetchTemperature() {
  try {
    const response = await fetch(API_WEATHER);
    const data = await response.json();
    let temp = (Number(data.main.temp) - 273.15).toFixed(2) + "ºC";
    let icon = data.weather[0].icon;
    let alt = data.weather[0].description;
    let cityName = data.name;

    return { temp, icon, alt, cityName };
  } catch (error) {
    console.error("Error al obtener el clima:", error);
    return null;
  }
}

export async function fetchJokes(array: result[]) {
  try {
    const response = await fetch(JOKES, {
      headers: {
        Accept: "application/json",
      },
    });

    const data = await response.json();
    if (array.length > 0) console.log(array);
    console.log(data.joke);

    return data.joke;
  } catch (error) {
    console.error("Error al obtener el chiste:", error);
    return null;
  }
}

export async function fetchChuck(array: result[]) {
  try {
    const response = await fetch(JOKES_CHUCK);

    const data = await response.json();
    if (array.length > 0) console.log(array);
    console.log(data.value);

    return data.value;
  } catch (error) {
    console.error("Error al obtener el chiste:", error);
    return null;
  }
}

export async function fetchJokesApi(array: result[]) {
  try {
    const response = await fetch(JOKES_API);

    const data = await response.json();
    if (array.length > 0) console.log(array);
    console.log(data.joke);

    return data.joke;
  } catch (error) {
    console.error("Error al obtener el chiste:", error);
    return null;
  }
}

export async function randomJoke(array: result[]) {
  switch (getRandomInt()) {
    case 0:
      return await fetchChuck(array);
      
    case 1:
      return await fetchJokes(array);
      
    case 2:
      return await fetchJokesApi(array);
      
      default:
        return "No joke found."
  }
}

function getRandomInt() {
  return Math.floor(Math.random() * 3);
}
