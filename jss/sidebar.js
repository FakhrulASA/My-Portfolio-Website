function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("mybody").style.marginLeft="250px";
  document.getElementById("menu").onclick = closeNav;

}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("mybody").style.marginLeft="0";
  document.getElementById("menu").onclick = openNav;
}
function scrollWin() {
  window.location = 'file:///C:/Personal%20WEBSITE/index.html#jumpHere';
 
}
function scrollWin2() {
  window.location = 'file:///C:/Personal%20WEBSITE/index.html#jumpHereZ';
 
}