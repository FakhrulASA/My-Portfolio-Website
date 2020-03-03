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
