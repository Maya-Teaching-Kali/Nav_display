const nav = document.querySelector(".nav");
const menu_btn = document.getElementById("nav-btn");
menu_btn.addEventListener("click", () => {
  console.log("it clicked before", nav.style.display);
  //version 1
  //     if (nav.style.display === "flex") {

  //     nav.style.display = "none";
  //   } else {
  //     nav.style.display = "flex";
  //   }
  //version 2
  if (nav.style.display !== "flex") {
    nav.style.display = "flex";
    nav.style.animationName = "slide-in";
    return;
  }
  nav.style.animationName = "fade-out";
  setTimeout(() => {
    nav.style.display = "none";
    console.log(nav.style.animationName);
  }, 1000);
});
