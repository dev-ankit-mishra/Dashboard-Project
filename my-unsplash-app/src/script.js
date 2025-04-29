// Using template literals for dynamic queries
const query = "mountain,lake,forest,waterfall,tropical";
const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY; // From .env

try{
    fetch(`https://api.unsplash.com/photos/random?orientation=landscape&query=${query}&client_id=${UNSPLASH_KEY}`)
        .then(res=>res.json())
        .then(data => {
            console.log(data)
            document.querySelector("#app-body").style.backgroundImage = `url(${data.urls.full})`;
            document.querySelector(".author").innerText =`Photos by ${data.user.name}` ;
        })
}catch(e){
    document.querySelector("#app-body").style.backgroundImage = `url(https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D)`;
}



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
                const temp=Math.round(data.main.temp)
                const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
                 document.querySelector("#weather").innerHTML =`
                     <div class="temp">
                        <img src=${iconUrl} alt="Weather-icon"/>
                        <p>${temp}&deg</p>
                     </div>
      
                     <p>${data.name}</p>

                 `;
            })
    }
);

function getTime(){
    const now=new Date();
    document.querySelector(".time").textContent=now.toLocaleTimeString("en-in",{timeStyle:"short"}).toUpperCase()
}

setInterval(getTime,1000);


