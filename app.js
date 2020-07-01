const logo = document.querySelector(".logo");

function hoverEffect() {
console.log(window.innerWidth);

  if (window.innerWidth > 1000) {
    logo.addEventListener("mouseenter", () => {
      logo.setAttribute("src", "./dave_1.1.svg");
      logo.classList.add("logo-hover");
    });

    logo.addEventListener("mouseleave", () => {
      logo.setAttribute("src", "./dave_1.0.svg");
      logo.classList.remove("logo-hover");
    });
  }
}


hoverEffect();
window.addEventListener("resize", hoverEffect);

logo.addEventListener("click", topFunction);

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
