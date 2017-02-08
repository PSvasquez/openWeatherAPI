$(document).ready(function (){
 $("button").on("click", function(){
  var city = $("input").val();
  var url = "http://api.openweathermap.org/data/2.5/weather?q="
     + city 
     + "&units=imperial&appid=d92b1594354e0df5d46c7f5f8bb29a31"
     console.log(url)
 $.get(url, function(data){
   var data = data.name + ' ' + data.main.temp + 'F ' + data.main.humidity + '% humidity ' + data.wind.speed + ' mph';
   $("#weather-results").html(data + "");
    console.log(data)
 });
   });
});