let skillsEvent = document.querySelectorAll("#progress>li");
let skillsTitle = document.querySelectorAll(".skillsTitle");
let skillsContent = document.querySelectorAll(".skillsContent")

for (let i = 0; i<6; i++){
    let j = (i+1)%6;   
    skillsEvent[j].addEventListener("click", toggleHide =>
    {       
        skillsTitle.forEach(element => {
            if (!(element.classList.contains("hide"))) {
                element.classList.add("hide")
            }
            
        });
        skillsContent.forEach(element => {
            if (!(element.classList.contains("hide"))) {
                element.classList.add("hide")
            }
        })
        skillsTitle[i].classList.toggle("hide");
        skillsContent[i].classList.toggle("hide");
    }
    )
    
}