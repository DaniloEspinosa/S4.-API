let reportAcudits: result[] = [];

const chisteHtml = document.getElementById("chiste") as HTMLParagraphElement;
const btnHtml = document.getElementById("btn") as HTMLButtonElement;
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

async function fetchDatos() {
  try {
    const response = await fetch("https://icanhazdadjoke.com/", {
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

function cleanVotation() {
  inputs.forEach((item) => (item.checked = false));
}
