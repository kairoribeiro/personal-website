//External JS File

//import

import { projectData } from "./project-data.js"

const cardContainer = document.getElementById('card-container')



let projectMarkup = projectData.map(project =>
  `
  <div class="project-container project-card">
    <img src=${project.image} alt="future-project" loading="lazy" class="project-pic"/>
    <h3 class="project-title">${project.title}</h3>
    <button id="work1Btn"><a href="${project.deployment}" target="_blank">Check Here</a></button>
    <button id="work1Btn"><a href="${project.github}" target="_blank">GitHub</a></button>
  </div>
  `
  ).join('')

cardContainer.innerHTML = projectMarkup

