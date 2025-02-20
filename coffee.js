const navLinks=document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton=document.querySelector("#menu-open-button");
const menuCloseButton=document.querySelector("#menu-close-button");


menuOpenButton.addEventListener("click",() => {
    //Toggle menu Visibility
    document.body.classList.toggle("show-mobile-menu");
}); 

//Close the menu when the close button is clicked
menuCloseButton.addEventListener("click",() =>menuOpenButton.click()); 


//Close the menu when a close button  is clicked 
navLinks.forEach(link => {
link.addEventListener("click",() =>menuCloseButton.click());});      


//Initialize the Swiper
const swiper = new Swiper('.slider-wrapper', {
    
    loop: true,
    grabCursor: true,
    spaceBetween:25,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  //Responsive navigation
    breakpoints:{
        0:{
            slidesPerView:1
        },
        768:{
            slidesPerView:2
        },
        1024:{
            slidesPerView:3
        }
    }
    
  });