function openNav() {
  document.getElementById("mySidenav").style.width = "200px";
  document.getElementById("mybody").style.marginLeft="200px";
  document.getElementById("menu").onclick = closeNav;
  document.getElementById("closeb").onclick=closeNav;

}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("mybody").style.marginLeft="0";
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
$(window).on("load",function(){
  $(".loader-wrapper").fadeOut("slow");
});