function changeCSS(menu, menuIcon, menuWord){
  menu.style.backgroundColor = "white";
  menuWord.style.color = "gold";

  menuIcon.array.forEach(element => {
    element.style.color = "blue";
  });
}


const navSlide = () => {
  const nav = document.querySelector(".navbar");
  const navLinks = document.querySelectorAll(".items");
  
  let hovering = false;

  let header = document.querySelector("#header");
  let menu = document.querySelector(".header-links a");
  let menuBtn = document.querySelector(".menu-btn");
  let menuIcon = document.querySelectorAll(".menu-icon span");
  let menuWord = document.querySelector("#gap");

  menu.addEventListener("mouseover", e => {    
    hovering = true;

    if(hovering){
      changeCSS(menu, menuIcon, menuWord);
    }

    return;
  });

  header.addEventListener("mouseover", e => {

  });


};

navSlide();

/* 

What I want is for the whole menu block to be treated like one thing. 
I only want one event so that it we get an effect we like while hovering.
If we stop hovering we go back to defualt

Than if we click on it we activate the menu.

*/