var windowHeight = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;

var header = document.getElementById("body-header");
var headerHeight = header.clientHeight;
var filterHeight = document.getElementsByClassName("filters")[0].clientHeight;
var filterTopPos = windowHeight-filterHeight;

//document.getElementsByClassName("filters")[0].style.top = filterTopPos;
//document.getElementsByClassName("filters")[0].style.backgroundColor = "red";
//function initFiltersHeight(){
//   document.getElementsByClassName("filters")[0].style.top = windowHeight;
//}

window.addEventListener('load', function(){
    document.getElementsByClassName("filters")[0].style.top = filterTopPos+"px";
})

window.addEventListener('resize', function(){
    document.getElementsByClassName("filters")[0].style.top = filterTopPos+"px";
})