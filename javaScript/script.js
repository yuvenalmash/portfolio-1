function pageLoad() {
  const projects = listProjects();
  for (let x = 0; x < projects.length; x += 1) {
    const tagsListId = `tagsListId${x.toString()}`;
    if (x === 0) {
      createFeaturedWorks(projects[x], tagsListId);
    } else {
      createOtherWorks(projects[x], tagsListId);
    }
  }

  // Validate Form
  const element = document.querySelector('form');
  element.addEventListener('submit', (event) => {
    const email = document.forms.contactForm.email.value;
    const formWarning = document.getElementById('formWarning');
    if (email.toLowerCase() !== email) {
      event.preventDefault();
      formWarning.style.display = 'block';
    }
  });
}

function showMenu() {
  const menuBox = document.getElementById('menu-box');
  menuBox.style.display = 'block';
}

function closeMenu() {
  const menuBox = document.getElementById('menu-box');
  menuBox.style.display = 'none';
}

function listProjects() {
  const project1 = {
    id: 1,
    name: 'Vehicle Auction',
    description: 'A website announcing a vehicle auction event. Some sections are dynamically created by JavaScript',
    featuredImageBig: 'images/vehiceAuction/page1.png',
    featuredImageSmall: 'images/vehiceAuction/mpage1.png',
    featuredImage: 'images/vehiceAuction/page1.png',
    technologies: ['css', 'html', 'javascript'],
    linkToLive: 'https://yuvenalmash.github.io/vehicle-auction/',
    linkToSource: 'https://github.com/yuvenalmash/vehicle-auction',
  };
  const project2 = {
    id: 2,
    name: 'REST API',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    featuredImage: 'images/projects/project1/Snapshoot Portfolio(desktop).png',
    technologies: [],
    linkToLive: 'https://www.freecodecamp.org/news/what-is-a-fullstack-developer/',
    linkToSource: 'https://github.com/yuvenalmash',
  };
  const project3 = {
    id: 3,
    name: 'Data Dashboard Healthcare',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    featuredImage: 'images/projects/project1/Snapshoot Portfolio(desktop).png',
    technologies: ['html', 'bootstrap', 'Ruby'],
    linkToLive: 'https://www.freecodecamp.org/news/what-is-a-fullstack-developer/',
    linkToSource: 'https://github.com/yuvenalmash',
  };
  const project4 = {
    id: 4,
    name: 'Website Portfolio',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    featuredImage: 'images/projects/project1/Snapshoot Portfolio(desktop).png',
    technologies: ['html', 'bootstrap', 'Ruby'],
    linkToLive: 'https://www.freecodecamp.org/news/what-is-a-fullstack-developer/',
    linkToSource: 'https://github.com/yuvenalmash',
  };
  const project5 = {
    id: 5,
    name: 'Blog',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    featuredImage: 'images/projects/project1/Snapshoot Portfolio(desktop).png',
    technologies: ['html', 'bootstrap', 'Ruby'],
    linkToLive: 'https://www.freecodecamp.org/news/what-is-a-fullstack-developer/',
    linkToSource: 'https://github.com/yuvenalmash',
  };
  const project6 = {
    id: 6,
    name: 'Data Dashboard Healthcare',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    featuredImage: 'images/projects/project1/Snapshoot Portfolio(desktop).png',
    technologies: ['html', 'bootstrap', 'Ruby'],
    linkToLive: 'https://www.freecodecamp.org/news/what-is-a-fullstack-developer/',
    linkToSource: 'https://github.com/yuvenalmash',
  };
  const project7 = {
    id: 7,
    name: 'Website Portfolio',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    featuredImage: 'images/projects/project1/Snapshoot Portfolio(desktop).png',
    technologies: ['html', 'bootstrap', 'Ruby'],
    linkToLive: 'https://www.freecodecamp.org/news/what-is-a-fullstack-developer/',
    linkToSource: 'https://github.com/yuvenalmash',
  };
  return [project1, project2, project3, project4, project5, project6, project7];
}

// WORKS POPUP SECTION

function generatelist(array, listId) {
  const list = document.getElementById(listId);
  for (let item = 0; item < array.length; item += 1) {
    const li = document.createElement('li');
    li.innerText = array[item];
    list.appendChild(li);
  }
}

function createWorkPopup(project) {
  const popup = `
      <div class="popup-card">
        <header>
          <h1 class="title">${project.name}</h1>
          <a onclick="closeProject()"><img src="icons/close/Icon.png" alt="close"></a>
        </header>
        <ul class="popuptags" id="popupTags">
        </ul>
        <div class="popup-content">
         <!-- <img src="${project.featuredImage}" alt="featured image" id="popup-img"> -->
          <div class="popup-img"></div>
          <div class="popup-text">
            <p>${project.description}</p>
            <ul>
              <li><a href="${project.linkToLive}">see live
              <img src="icons/popup/Icon - Export.png" alt="live"></a>
              </li>
              <li><a href="${project.linkToSource}">see source
              <img src="icons/popup/Vector.png" alt="github"></a>
              </li>
            </ul>
          </div>
        </div>
      </div>`;
  const parent = document.getElementById('popupBox');
  parent.innerHTML = popup;
  generatelist(project.technologies, 'popupTags');
}

function showProject(projectId) {
  const projects = listProjects();
  const projectIndex = projects.findIndex((object) => object.id === projectId);
  const project = projects[projectIndex];
  const projectPopup = document.getElementById('popupBox');
  projectPopup.style.display = 'block';
  createWorkPopup(project);
}

function closeProject() {
  const projectPopup = document.getElementById('popupBox');
  projectPopup.style.display = 'none';
}

function createFeaturedWorks(project, tagsListId) {
  const featuredWorks = `
        <div class="featured-content">
          <div id=featured-image></div>
          <div class="featured-textblock">
            <h2 id="textblock-title">${project.name}</h2>
            <p id="textblock-supporting-text">${project.description}</p>
            <ul class="textblock-tags" id="${tagsListId}">
            </ul>
            <a class="textblock-link" id="textBlockLink" onclick="showProject(${project.id})" href="#">See Project</a>
          </div>
        </div>`;

  const parent = document.getElementById('worksContent');
  parent.innerHTML += featuredWorks;
  generatelist(project.technologies, tagsListId);
}

function createOtherWorks(project, tagsListId) {
  const otherWorks = `
        <div class="content-defaults content2">
          <h2 class="other-content-title">${project.name}</h2>
          <p class="other-content-description">${project.description}</p>
          <ul class="other-content-tags" id="${tagsListId}">
          </ul>
          <a class="other-content-link" id="otherContentLink" onclick="showProject(${project.id})" href="#">See Project</a>
        </div>`;
  const parent = document.getElementById('otherContent');
  parent.innerHTML += otherWorks;
  generatelist(project.technologies, tagsListId);
}



showMenu();
closeMenu();
showProject();
closeProject();
pageLoad();
