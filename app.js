const logo = document.querySelector(".logo");

logo.addEventListener("mouseenter", ()=> {
    logo.setAttribute("src", "./dave_1.1.svg");
    logo.classList.add("logo-hover");
});

logo.addEventListener("mouseleave", ()=> {
    logo.setAttribute("src", "./dave_1.0.svg");
    logo.classList.remove("logo-hover");
})

logo.addEventListener("click", topFunction)

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  