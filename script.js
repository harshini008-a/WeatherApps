async function getWeather() {
  const city = document.getElementById("city").value;
  const apiKey = "b8496f1113c685c32bcc46a7d0e1e02f"; // Replace with your actual key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const response = await fetch(url);
  const data = await response.json();

  if (data.cod === 200) {
    document.getElementById("result").innerHTML = `
      <h2>${data.name}</h2>
      <p>🌡️ Temp: ${data.main.temp} °C</p>
      <p>💧 Humidity: ${data.main.humidity}%</p>
      <p>🌬️ Wind: ${data.wind.speed} km/h</p>
    `;
  } else {
    document.getElementById("result").innerHTML = `<p>City not found!</p>`;
  }
}
