function showMenu() {
  const menuBox = document.getElementById('menu-box');
  if (menuBox.style.display === 'block') { // if is menuBox displayed, hide it
    menuBox.style.display = 'none';
  } else { // if is menuBox hidden, display it
    menuBox.style.display = 'block';
  }
}

function closeMenu() {
  const menuBox = document.getElementById('menu-box');
  menuBox.style.display = 'none';
}

// document.getElementById("myBtn").onclick = function() {showProject()};
function showProject() {
  const projectPopup = document.getElementById('popupBox')
  projectPopup.style.display = 'block';
  // const projectPopup = document.getElementById('popupBox');
  // if (projectPopup.style.display === 'block') {
  //   projectPopup.style.display = 'none';
  // } else {
  //   projectPopup.style.display = 'block';
  // }
}

function closeProject() {
  const projectPopup = document.getElementById('popupBox')
  projectPopup.style.display = 'none';
}

showMenu();
closeMenu();
showProject();
closeProject();
