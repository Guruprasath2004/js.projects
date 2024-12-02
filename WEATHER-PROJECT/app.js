const callapikey = "2ff7c83ab944c37ad1622e37edcfeafc";

const weatherdataEL = document.getElementById("weatherdata");
const cityinputEL = document.getElementById("city-input");
const formEL = document.querySelector("form")

formEL.addEventListener("submit", (event)=>{
    event.preventDefault();
    const cityvalue = cityinputEL.value;
    getWeatherData(cityvalue);
});

async function getWeatherData(cityvalue){
    try {
        const resposne = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityvalue}&appid=${callapikey}&units=metric`)
        if (!resposne.ok){
            throw new Error("Network response not working")
        }
        const data = await resposne.json()

        const temperature = Math.round(data.main.temp)
        const description = data.weather[0].description
        const icon = data.weather[0].icon
        const details = [
            `Feels like : ${Math.round(data.main.feels_like)}°C`,
            `Humidity: ${data.main.humidity}%`,
            `Wind speed: ${data.wind.speed} m/s`,
        ]
        weatherdataEL.querySelector(".icon").innerHTML = `<img src="https://openweathermap.org/img/wn/${icon}.png" alt="">`
        weatherdataEL.querySelector(".temperature").textContent=`${temperature}°C`;
        weatherdataEL.querySelector(".description").textContent=description;
        weatherdataEL.querySelector(".details").innerHTML = details.map((details)=>`<div>${details}</div>`).join("");
    } catch (error) {
        weatherdataEL.querySelector(".icon").innerHTML = "";
        weatherdataEL.querySelector(".temperature").textContent="";
        weatherdataEL.querySelector(".description").textContent="An error happened,please try again later.";
        weatherdataEL.querySelector(".details").innerHTML = "";
        
    }
}