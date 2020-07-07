document.addEventListener('scroll', function(e) {
   if(window.pageYOffset >= 330){
       document.querySelector(".logo").style.opacity = 0;
   }
   if(window.pageYOffset < 330){
    document.querySelector(".logo").style.opacity = 1;
}
  
  }
);