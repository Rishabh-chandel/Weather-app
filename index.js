const API_KEY = "a27480c28f83b5e281ba16e7765b0a52";

function renderWeatherInfo(data) {
    let newPara = document.createElement('p');
    newPara.textContent = `${data?.main?.temp.toFixed(2)} °C`;
    document.body.appendChild(newPara);
}

async function fetchWeatherdetails() {
    try {
        let city = "pune";
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        const data = await response.json();
        console.log(response);
        console.log("wether data-->" , data);
        renderWeatherInfo(data);
    }
    catch(err) { 
        console.warn("ERROR \.../");
    }
}

async function showWeatherdetails() {
    try {
        let longitude = 18.3333;
        let latitude = 15.6333;
        let result = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`);
        let ans = await result.json();
        console.log(ans);
        renderWeatherInfo(ans);
    }
    catch(err) {
        console.log("ERROR FOUND -->" , err);
    }
}

function getLocation() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else {
        console.log("NO SUPPORT");
    }
}

function showPosition(position) {
    let lat = position.coords.latitude;
    let longi = position.coords.longitude;

    console.log(lat);
    console.log(longi);
}