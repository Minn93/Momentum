const API_KEY= "c69b614f606f2d9ea1567f8dc2b31129";

function onGeoOk(position){
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        const url= `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
        fetch(url)
            .then(Response => Response.json())
            .then(data => {
                const weather= document.querySelector("#weather span:first-child");
                const city= document.querySelector("#weather span:last-child");
            city.innerText=data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        });
}
function onGeoError(){
    alert("can't find you, No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError );