
let ulcontainer = document.querySelector("ul#progress")
let skills = document.querySelectorAll("#progress>li")
let skillsArray = Array.from(skills)

function append(skill) {
    ulcontainer.appendChild(skill)
}
function draw(content) {
  ulcontainer.innerHTML = ""
  content.forEach(append)
}
async function next() {
  if (!ulcontainer.classList.contains("nextAnimation")){
    ulcontainer.classList.add("nextAnimation")
    await new Promise(resolve => {
      ulcontainer.addEventListener("transitionend", resolve, { once: true });
    });
    ulcontainer.classList.remove("nextAnimation")
    skillsArray.push(skillsArray.shift())
    draw(skillsArray)
  }
}
async function prev() {
  if (!ulcontainer.classList.contains("prevAnimation")){
    ulcontainer.classList.add("prevAnimation")
    await new Promise(resolve => {
      ulcontainer.addEventListener("transitionend", resolve,{ once: true });
    });
    ulcontainer.classList.remove("prevAnimation")
    skillsArray.unshift(skillsArray.pop());
    draw(skillsArray)
  }
}
let prevButton = document.querySelector("#skillsPrevButton");
prevButton.addEventListener('click', prev)
let nextButton = document.querySelector("#skillsNextButton");
nextButton.addEventListener('click', next)