
async function getWeather() {

  const city = document.querySelector("input").value

  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1175892dbc41995a6cfc60f56f42d3b3`);

  const data = await response.json();
  return data

}

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();
  getWeather().then(
    function (data) {
      weatherDisplay = document.getElementById("weather")
      console.log(data);
      weatherDisplay.innerHTML = data["main"]["temp"]
    }
  ).catch(
    function (e) {
      console.log(`Error: ${e}`)
    }
  );
});
