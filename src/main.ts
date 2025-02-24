async function fetchDatos() {
  try {
    const response = await fetch('https://icanhazdadjoke.com/', {
      headers: {
        Accept: 'application/json', // Para recibir JSON
      },
    });

    const data = await response.json();
    console.log(data.joke)
    return data.joke; // Devuelve el chiste
  } catch (error) {
    console.error('Error al obtener el chiste:', error);
    return null; // En caso de error, retorna null
  }
}

const chisteHtml = document.getElementById("chiste") as HTMLParagraphElement
const btnHtml = document.getElementById("btn") as HTMLButtonElement

(async () => {
  chisteHtml.textContent = await fetchDatos()
})()

btnHtml.addEventListener("click", async () => {
  chisteHtml.textContent = await fetchDatos()
})