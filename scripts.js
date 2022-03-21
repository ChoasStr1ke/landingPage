function changeCSS(menu, menuIcon, sidebar,element){
  if(element == "something"){
    menu.style.border = "1px solid white";
    menu.style.backgroundColor = "white";
    menu.style.color = "#d4bc7c";
    menuIcon.forEach(e => {
      e.style.backgroundColor = "#d4bc7c";
    });    
  }

  if(element === "header"){
    menu.style.backgroundColor = "";
    menu.style.border = "1px solid #d4bc7c";
    menu.style.color = "#d4bc7c";

    menuIcon.forEach(e => {
      e.style.backgroundColor = "white";
    });
    
  }

  else{
    console.log("nothing detected");
  }
}

function theMenu(open, sidebar){
  if(open == true){  
    sidebar.style.left = "0";

  }

  else{  

    sidebar.style.left = "-400px";
  }
}


const navSlide = () => {
  const nav = document.querySelector(".navbar");
  const navLinks = document.querySelectorAll(".items");

  let header = document.querySelector("#header");
  let menu = document.querySelector(".header-links a");
  let sidebar = document.querySelector(".sidebar");
  let menuBtn = document.querySelector(".menu-btn");
  let closeButton = document.querySelector("#xButton");
  let menuIcon = document.querySelectorAll(".menu-icon span");

  menu.addEventListener("mouseover", e => {    
    changeCSS(menu, menuIcon, sidebar,"something");
    event.stopPropagation();

  });

  header.addEventListener("mouseover", e => {
    changeCSS(menu, menuIcon, sidebar,"header");
    event.stopPropagation();
  });

  menu.addEventListener("click", e => {
    theMenu(true, sidebar);
    event.stopPropagation();

  });

  closeButton.addEventListener("click", e => {
    theMenu(false, sidebar);
    event.stopPropagation();
  })


  
};

var counter = 1;

function plusSlide(n){
  var slider = document.querySelector(".slider");
  slider.style.transition = "6s ease-in";
  
  var images = ["/images/greenFields.jpeg", "/images/food.jpg", "/images/hotelRoom.jpeg", "/images/pool.jpg"];
 
  if(n == -1){
    
    if(counter > 0){
      counter = counter - 1;
      console.log('counter ' + counter)
      slider.style.backgroundImage = `url(${images[counter]})`;
    }
    
    else{
      counter = images.length - 1;
      console.log('counter ' + counter)

      slider.style.backgroundImage = `url(${images[counter]})`;
    }
  }

  if(n == 1){
    
    if(counter <= images.length - 2){
      counter++;
      slider.style.backgroundImage = `url(${images[counter]})`;
    }
    
    else{
      counter = 0;
      slider.style.backgroundImage = `url(${images[counter]})`;
    }
  }
}

navSlide();

/* 
var slideIndex = 1;

function plusSlide(n){
  showSlides(slideIndex += n);
}

function currentSlide(n){
  showSlides(slideIndex = n);
}

function showSlide(n){
  var i;
  var slides = document.getElementsByClassName("images");

  if(n > slides.length) {slidesIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block"; 
}

*/