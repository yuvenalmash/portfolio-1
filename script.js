function show_menu() {
  var menuBox = document.getElementById('menu-box');
  if (menuBox.style.display == "block") { // if is menuBox displayed, hide it
    menuBox.style.display = "none";
  }
  else { // if is menuBox hidden, display it
    menuBox.style.display = "block";
  }
}

function close_menu() {
  var menuBox = document.getElementById('menu-box');
  menuBox.style.display = "none"
}
