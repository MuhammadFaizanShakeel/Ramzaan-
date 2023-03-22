var daysItem = document.querySelector(".days")
var hoursItem = document.querySelector(".hours")
var minItem = document.querySelector(".min")
var secItem = document.querySelector(".sec")

var count = () => {
    var futureDate = new Date("23 march 2023");
    var currentDate = new Date();
    var myDate = futureDate - currentDate;

    var days = Math.floor(myDate/1000/60/60/24);
    var hours = Math.floor(myDate/1000/60/60) % 24;
    var min = Math.floor(myDate/1000/60) % 60;
    var sec = Math.floor(myDate/1000) % 60;

    daysItem.innerHTML= days;
    hoursItem.innerHTML= hours;
    minItem.innerHTML= min;
    secItem.innerHTML= sec;

}
count();
setInterval(count,1000);