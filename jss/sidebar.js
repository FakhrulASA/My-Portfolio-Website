function openNav() {
  document.getElementById("mySidenav").classList.toggle("sidnavact");
  document.getElementById("mybody").classList.toggle("sidnavactbody");
  document.getElementById("menu").onclick = closeNav;
  document.getElementById("closeb").onclick=closeNav;

}

function closeNav() {
  document.getElementById("mySidenav").classList.toggle("sidnavact");
  document.getElementById("mybody").classList.toggle("sidnavactbody");
  document.getElementById("menu").onclick = openNav;
}
function scrollWin() {
  window.location = '#jumpHere';
 
}
function scrollWin2() {
  window.location = '#jumpHereZ';
 
}
function scrollTOP() {
  window.location = '#jumpHeret';
 
}

  var preloader= document.getElementById("loading")
   function loader(){
 
     preloader.style.display='none';
    
}
