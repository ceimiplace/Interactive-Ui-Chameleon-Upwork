let navs = document.querySelectorAll(".nav-button");
let navigation = document.querySelector(".navigation");
navs.forEach((elem) => {
  elem.addEventListener("click", () => {
    navs.forEach((elem2) => {
      elem2.classList.remove("nav-button--active");
    });
    elem.classList.add("nav-button--active");
  });
});
let logo = document.querySelector(".logo");
logo.addEventListener("click", () => {
  logo.classList.add("spin");
  let width = document.body.clientWidth;

  if (width < 768) {
    navigation.classList.toggle("collapse");
  }
});
logo.addEventListener("animationend", () => {
  logo.classList.remove("spin");
});
