let reportAcudits: result[] = [];
let city = "barcelona";
const JOKES = "https://icanhazdadjoke.com/";
const API_WEATHER = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=93b7d700335e20d50fbed4f29e09c2ea`;

const chisteHtml = document.getElementById("chiste") as HTMLParagraphElement;
const btnHtml = document.getElementById("btn") as HTMLButtonElement;
const temperature = document.getElementById("temperature") as HTMLSpanElement;
const imageTemperature = document.getElementById(
  "image-temperature"
) as HTMLImageElement;
const inputs = document.querySelectorAll<HTMLInputElement>(
  'input[name="rating"]'
);

type result = {
  joke: string;
  score: string | number;
  date: string;
};

inputs.forEach((item) => {
  item.addEventListener("change", () => {
    inputs.forEach((vote) => {
      if (item != vote) {
        vote.checked = false;
      }
    });
  });
});

async function fetchTemperature() {
  try {
    const response = await fetch(API_WEATHER);
    const data = await response.json();
    let temp = (Number(data.main.temp) - 273.15).toFixed(2) + "ºC";
    let icon = data.weather[0].icon;
    let alt = data.weather[0].description;

    return { temp, icon, alt };
  } catch (error) {
    console.error("Error al obtener el clima:", error);
    return null;
  }
}

async function fetchDatos() {
  try {
    const response = await fetch(JOKES, {
      headers: {
        Accept: "application/json",
      },
    });

    const data = await response.json();
    if (reportAcudits.length > 0) console.log(reportAcudits);
    console.log(data.joke);

    return data.joke;
  } catch (error) {
    console.error("Error al obtener el chiste:", error);
    return null;
  }
}

(async () => {
  chisteHtml.textContent = await fetchDatos();
  const datosTemp = await fetchTemperature();
  if (datosTemp) {
    temperature.textContent = datosTemp.temp;
    imageTemperature.setAttribute(
      "src",
      `https://openweathermap.org/img/w/${datosTemp.icon}.png`
    );
    imageTemperature.setAttribute("alt", datosTemp.alt);
  } else {
    temperature.textContent = "Error obteniendo la temperatura";
  }
})();

btnHtml.addEventListener("click", async (e) => {
  e.preventDefault();
  votation(chisteHtml.textContent);
  chisteHtml.textContent = await fetchDatos();
  cleanVotation();
});

function votation(joke: string | null) {
  const date = new Date().toISOString();
  let score = "";
  let results: result = { joke: joke ?? "", score: score, date: date };

  inputs.forEach((item) => {
    if (item.checked) {
      results.score = Number(item.value);
    }
  });

  reportAcudits.push(results);
}

//Una vez pasamos al siguiente chiste se formatea la votación
function cleanVotation() {
  inputs.forEach((item) => (item.checked = false));
}
