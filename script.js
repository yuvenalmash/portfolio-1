function showMenu() {
  const menuBox = document.getElementById('menu-box');
  if (menuBox.style.display === 'block') { // if is menuBox displayed, hide it
    menuBox.style.display = 'none';
  } else { // if is menuBox hidden, display it
    menuBox.style.display = 'block';
  }
}

showMenu();

function closeMenu() {
  const menuBox = document.getElementById('menu-box');
  menuBox.style.display = 'none';
}

closeMenu();
