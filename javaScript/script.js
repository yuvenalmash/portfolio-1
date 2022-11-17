function showMenu() {
  const menuBox = document.getElementById('menu-box');
  menuBox.style.display = 'block';
}

function closeMenu() {
  const menuBox = document.getElementById('menu-box');
  menuBox.style.display = 'none';
}

// WORKS POPUP SECTION
function showProject(projectId) {
  var projects = listProjects()
  var projectIndex = projects.findIndex((object) => object.id == projectId);
  var project = projects[projectIndex]
  const projectPopup = document.getElementById('popupBox')
  projectPopup.style.display = 'block';
  createWorkPopup(project)
}

function closeProject() {
  const projectPopup = document.getElementById('popupBox')
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
        </div>`

  var image
  if((window.matchMedia("(max-width: 767px)")).matches){
    image = project.featuredImageSmall
  }else {
    image = project.featuredImageBig
  }
  

  var parent = document.getElementById('worksContent')
  parent.innerHTML += featuredWorks
  generatelist(project.technologies, tagsListId)
  // var img = document.createElement("img");
  // img.src = image;
  // var src = document.getElementById("featured-image");
  // src.appendChild(img);
}

function createOtherWorks(project, tagsListId) {
  const otherWorks = `
        <div class="content-defaults content2">
          <h2 class="other-content-title">${project.name}</h2>
          <p class="other-content-description">${project.description}</p>
          <ul class="other-content-tags" id="${tagsListId}">
          </ul>
          <a class="other-content-link" id="otherContentLink" onclick="showProject(${project.id})" href="#">See Project</a>
        </div>`
  var parent = document.getElementById('otherContent')
  parent.innerHTML += otherWorks
  generatelist(project.technologies, tagsListId)
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
      </div>`
  var parent = document.getElementById('popupBox')
  parent.innerHTML = popup
  generatelist(project.technologies, "popupTags")
}

function generatelist(array, listId) {
  let list = document.getElementById(listId);
  // array.forEach((item) => {
  //   let li = document.createElement("li");
  //   li.innerText = item;
  //   list.appendChild(li);
  // })
  for (let item of array) {
    let li = document.createElement("li");
    li.innerText = item;
    list.appendChild(li);
  }
}

function pageLoad() {
  var projects = listProjects()
  for (let x = 0; x < projects.length; x++) {
    var tagsListId = "tagsListId" + (x.toString())
    if (x === 0) {
      createFeaturedWorks(projects[x], tagsListId)
    } else {
      createOtherWorks(projects[x], tagsListId)
    }
  }
}

function listProjects() {
  var project1 = {
    id: 1,
    name: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    featuredImageBig: 'images/desktop-size/ImgPlaceholder.png',
    featuredImageSmall: 'images/featured-work/Img-Placeholder.png',
    featuredImage: 'images/projects/project1/Snapshoot Portfolio(desktop).png',
    technologies: ['css', 'html', 'bootstrap', 'Ruby'],
    linkToLive: 'https://www.freecodecamp.org/news/what-is-a-fullstack-developer/',
    linkToSource: 'https://github.com/yuvenalmash',
  };
  var project2 = {
    id: 2,
    name: 'REST API',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    featuredImage: 'images/projects/project1/Snapshoot Portfolio(desktop).png',
    technologies: [],
    linkToLive: 'https://www.freecodecamp.org/news/what-is-a-fullstack-developer/',
    linkToSource: 'https://github.com/yuvenalmash',
  };
  var project3 = {
    id: 3,
    name: 'Data Dashboard Healthcare',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    featuredImage: 'images/projects/project1/Snapshoot Portfolio(desktop).png',
    technologies: ['html', 'bootstrap', 'Ruby'],
    linkToLive: 'https://www.freecodecamp.org/news/what-is-a-fullstack-developer/',
    linkToSource: 'https://github.com/yuvenalmash'
  };
  var project4 = {
    id: 4,
    name: 'Website Portfolio',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    featuredImage: 'images/projects/project1/Snapshoot Portfolio(desktop).png',
    technologies: ['html', 'bootstrap', 'Ruby'],
    linkToLive: 'https://www.freecodecamp.org/news/what-is-a-fullstack-developer/',
    linkToSource: 'https://github.com/yuvenalmash'
  };
  var project5 = {
    id: 5,
    name: 'Blog',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    featuredImage: 'images/projects/project1/Snapshoot Portfolio(desktop).png',
    technologies: ['html', 'bootstrap', 'Ruby'],
    linkToLive: 'https://www.freecodecamp.org/news/what-is-a-fullstack-developer/',
    linkToSource: 'https://github.com/yuvenalmash'
  };
  var project6 = {
    id: 6,
    name: 'Data Dashboard Healthcare',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    featuredImage: 'images/projects/project1/Snapshoot Portfolio(desktop).png',
    technologies: ['html', 'bootstrap', 'Ruby'],
    linkToLive: 'https://www.freecodecamp.org/news/what-is-a-fullstack-developer/',
    linkToSource: 'https://github.com/yuvenalmash'
  };
  var project7 = {
    id: 7,
    name: 'Website Portfolio',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    featuredImage: 'images/projects/project1/Snapshoot Portfolio(desktop).png',
    technologies: ['html', 'bootstrap', 'Ruby'],
    linkToLive: 'https://www.freecodecamp.org/news/what-is-a-fullstack-developer/',
    linkToSource: 'https://github.com/yuvenalmash'
  };
  return [project1, project2, project3, project4, project5, project6, project7]
}


showMenu();
closeMenu();
showProject();
closeProject();
