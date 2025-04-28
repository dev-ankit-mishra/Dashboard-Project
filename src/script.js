fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=mountain,lake,forest,waterfall,tropical")
.then(res=>res.json())
.then(data => {
    console.log(data);
    document.querySelector("#app-body").style.backgroundImage = `url(${data.urls.full})`;
})