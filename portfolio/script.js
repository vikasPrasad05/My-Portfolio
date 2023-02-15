const image = document.querySelector(".image");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

const sun = document.querySelector(".sun");
const imageContainer = document.querySelector(".nav-container")
const home = document.querySelector("#home");
const homeData = document.querySelector(".home-data")
const skills = document.querySelector("#skills")
const projects = document.querySelector("#projects");
const project = document.querySelectorAll(".project");
const contact = document.querySelector("#contact");
const faBrands = document.querySelector(".fa-brands");

let x = 0
let timer;

prev.addEventListener("click",() => {
    x = x +90;
    clearTimeout(timer)
    updateGallery()
})

next.addEventListener("click",() => {
    x = x -90;
    clearTimeout(timer)
    updateGallery()
})



function updateGallery(){
    image.style.transform = `perspective(900px) rotateY(${x}deg)`
    // timer = setTimeout(()=>{
    //     x = x - 90;
    //     clearTimeout(timer)
    // updateGallery()
    // }, 3000)

}


updateGallery()





// --------------------------DARK MODE 


sun.addEventListener("click", function(){
  
    this.classList.toggle('fa-moon');
    console.log("hello")
    if(this.classList.toggle("fa-sun")){
       location.reload();
    }else{
      
      imageContainer.style.background = "linear-gradient(180deg, #242833 0%, #242833 47%, rgba(74,74,186,1) 47%, rgba(16,16,140,1) 100%)"
    home.style.background = "#242833";
    homeData.style.background = "#242833"
    homeData.style.color = "white"
    skills.style.background = "#242849"
    skills.style.color = "white"
    projects.style.background = "#242833"
    
    
    faBrands.style.color ="white"
    contact.style.backgroundColor = "#242933"
    contact.style.color = "white"
  
    for(let i = 0; i < project.length; i++){
      project[i].style.background = "#242833"
  
      project[i].style.color = "white"
    //   project[i].style.backgroundColor = "black"
      project[i].style.boxShadow = "1px 1px 7px #000000"
      
    }
    // imageContainer.style.transition ="background 1s "
    }
  })
  
  