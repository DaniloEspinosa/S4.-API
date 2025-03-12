import { result } from "./interfaces/result";
import { fetchChuck, fetchJokes, fetchJokesApi, fetchTemperature, randomJoke } from "./utils/fetchFunctions";

let reportAcudits: result[] = [];

const chisteHtml = document.getElementById("chiste") as HTMLParagraphElement;
const cityName = document.getElementById("city-name") as HTMLParagraphElement;
const btnHtml = document.getElementById("btn") as HTMLButtonElement;
const temperature = document.getElementById("temperature") as HTMLSpanElement;
const imageTemp = document.getElementById("image-temp") as HTMLImageElement;
const inputs = document.querySelectorAll<HTMLInputElement>(
  'input[name="rating"]'
);

inputs.forEach((item) => {
  item.addEventListener("change", () => {
    inputs.forEach((vote) => {
      if (item != vote) {
        vote.checked = false;
      }
    });
  });
});

btnHtml.addEventListener("click", async (e) => {
  e.preventDefault();
  votation(chisteHtml.textContent);
  chisteHtml.textContent = await randomJoke(reportAcudits);
  cleanVotation();
});

const votation = (joke: string | null) => {
  const date = new Date().toISOString();
  let score = "";
  let results: result = { joke: joke ?? "", score: score, date: date };

  inputs.forEach((item) => {
    if (item.checked) {
      results.score = Number(item.value);
    }
  });
  reportAcudits.push(results);
};

const cleanVotation = () => {
  inputs.forEach((item) => (item.checked = false));
};

(async () => {
  chisteHtml.textContent = await randomJoke(reportAcudits);
  const datosTemp = await fetchTemperature();
  if (datosTemp) {
    temperature.textContent = datosTemp.temp;
    imageTemp.setAttribute(
      "src",
      `https://openweathermap.org/img/w/${datosTemp.icon}.png`
    );
    imageTemp.setAttribute("alt", datosTemp.alt);
    cityName.textContent = datosTemp.cityName;
  } else {
    temperature.textContent = "Error obteniendo los datos del clima";
  }
})();
