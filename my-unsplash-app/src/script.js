// Using template literals for dynamic queries
const query = "mountain,lake,forest,waterfall,tropical";
const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY; // From .env

fetch(`https://api.unsplash.com/photos/random?orientation=landscape&query=${query}&client_id=${UNSPLASH_KEY}`)
.then(res=>res.json())
.then(data => {
    document.querySelector("#app-body").style.backgroundImage = `url(${data.urls.full})`;
})


const WEATHER_KEY = import.meta.env.VITE_WEATHER_KEY;




// 1. Get location
navigator.geolocation.getCurrentPosition(
    (position) => {
        const { latitude, longitude } = position.coords;

        // 2. Free API endpoint
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${WEATHER_KEY}`)
            .then(response => {
                if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
                return response.json();
            })
            .then(data => {
                console.log(data);
                const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
                 document.querySelector("#weather").innerHTML =`
                     <img src=${iconUrl} />
                    <p>${data.main.temp}</p>
                     <p>${data.name}</p>

                 `;
            })
    }
);
//
//
// const now=new Date().getTime();
// console.log(now.getHours());