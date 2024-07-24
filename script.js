const weather = document.getElementById("GetWeather")
const button = document.getElementById("button")
const display = document.getElementById("display")
const erorr = document.getElementById("error")
const temp = document.getElementById("temperature")
const disc = document.getElementById("discription")
 const key = "f62eebbe9bc5e20bb01844c22c7bda2f"

 button.addEventListener("click", async ()=>{
     try {
        const responce = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${weather.value}&appid=${key}&units=metric`)
        const data = await responce.json()
        console.log(data)
        temp.innerHTML=`Temperature ${data.main.temp}` 
        disc.innerHTML=`Discripsion ${data.weather[0].description}`
     } catch(error){
        erorr.textContent= "Data Error"
     }
 })
