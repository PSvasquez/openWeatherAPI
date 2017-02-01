$(document).ready(function (){
 $("button").on("click", function(){
  var city = $("input").val();
  var url = "http://api.openweathermap.org/data/2.5/weather?q="
     + city 
     + "units=imperial&appid=d92b1594354e0df5d46c7f5f8bb29a31"
 $.get(url, function(data){
    
    console.log(data)
 });
   });
});
