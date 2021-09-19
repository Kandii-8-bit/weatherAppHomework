function addEventListener(cityZip) {
    $("#submit").click(function (e){
        e.preventDefault();
        let cityZipName = $("#cityZip").val();
        // Missed in class how to get my image to change and tried to figure it out but could not, also tried to ask for help...
        // $("#submit, #weatherPic").attr("src", "//cdn.weatherapi.com/weather/64x64/day/113.png"); 
        console.log(cityZipName);
        getWeather(cityZipName);

        
    })
}

function getWeather(cityZip) {

    

    $.get(`https://api.weatherapi.com/v1/current.json?key=3b3d9ca985124708968211520211309&q=${cityZip}&aqi=no`, function(data) {
        //Logs all Data
        console.log(data);

        //Logs the Location and Name of Location
        console.log(data.location.name);

        //Now I want to display this in my table...HERE
        var location = document.getElementById("location").textContent = data.location.name;
        
        //Logs the Temp in F, I'm only using this one because it's what we use in the states
        console.log(data.current.temp_f);
        //Now I want to display this in my table...HERE
        var temperature = document.getElementById( "tempF" ).textContent = data.current.temp_f;

        //Since all my data is console.logged I'm going to bypass logging the rest that was just something for me to see...

        //feels like
        var feelslike = document.getElementById( "feelslike" ).textContent = data.current.feelslike_f;

        //region
        var region = document.getElementById("region").textContent = data.location.region;

        //humidity
        var humidity = document.getElementById("humidity").textContent = data.current.humidity;

        //localtime
        var localtime = document.getElementById("localtime").textContent = data.location.localtime;
       
    });


    
    
}




$(document).ready(function () {
   addEventListener();
});