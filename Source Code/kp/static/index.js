   
function openNav() {
    document.getElementById("QuickAccessMenu").style.width = "auto";
   
  }
  

  function closeNav() {
    document.getElementById("QuickAccessMenu").style.width = "0";
    
  }

  window.onscroll = function() {myFunction()};


//sticky behaviour
var subnav = document.getElementById("subnav");
var sticky = subnav.offsetTop;


function myFunction() {
  if (window.pageYOffset >= sticky) {
    subnav.classList.add("sticky-top");
    document.getElementById("backtotop").style.display = "block";
  } 
  else {
    subnav.classList.remove("sticky-top");
    document.getElementById("backtotop").style.display = "none";

}};



