// add active class to internal nav link, when scroll veiw is over that section

const menuLinks = document.querySelectorAll("#internalNavBox .nav-link")
const sections = document.querySelectorAll("main section")
const Footer = document.querySelector("footer")
// add a section margin so scroll spy moves on before section hits top of screen size is in pixels
const sectionMargin = 350


window.addEventListener("scroll", () => {
    menuLinks.forEach(element=>{
            if (element.classList.contains("active")){
                element.classList.remove("active")
            }
        })
        if (window.scrollY>sections[0].offsetTop - sectionMargin && window.scrollY<=sections[1].offsetTop-sectionMargin){
            menuLinks[0].classList.add("active");
        } 
        else if (window.scrollY>sections[1].offsetTop - sectionMargin && window.scrollY<=sections[2].offsetTop - sectionMargin){
            menuLinks[1].classList.add("active");
        }
        else if (window.scrollY>sections[2].offsetTop - sectionMargin && window.scrollY<=Footer.offsetTop - sectionMargin){
            menuLinks[2].classList.add("active");
        }
        // else if (window.scrollY+window.innerHeight>=document.body.offsetHeight){
        //     menuLinks[3].classList.add("active");
        // }
})