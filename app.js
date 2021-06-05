
const card = document.querySelector('.card');
const container = document.querySelector('.container');

const title = document.querySelector(".title");
const sneaker = document.querySelector(".sneaker img");
const sizes = document.querySelector(".sizes");
const purchase = document.querySelector(".purchase");
const description = document.querySelector(".info h3");

//moving animation
container.addEventListener("mousemove",function(e){
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
})

//Animate in
container.addEventListener('mouseenter',function(e){
    card.style.transition="none";
    title.style.transform = "translateZ(130px)";
    sneaker.style.transform = "translateZ(170px) rotateZ(-45deg)";
    sizes.style.transform = "translateZ(100px)";
    description.style.transform = "translateZ(120px)";
    purchase.style.transform = "translateZ(100px)";
})


//Animate out

container.addEventListener('mouseleave',function(e){
    card.style.transition = "all 0.5s ease";
    card.style.transform =`rotateY(0deg) rotateX(0deg)`;
    title.style.transform = "translateZ(0px)";
    sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
    sizes.style.transform = "translateZ(0px)";
    description.style.transform = "translateZ(0px)";
    purchase.style.transform = "translateZ(0px)";
})