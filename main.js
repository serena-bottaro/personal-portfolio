
src="https://kit.fontawesome.com/1f25bafa85.js"
crossorigin="anonymous";
    
    
function scrollToTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");

const checkbox = document.querySelector("input");
const links = document.querySelectorAll(".nav-list a");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navList.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navList.classList.remove("active");
  })
);

for (const link of links) {
  link.onclick = handleClick;
};

function handleClick() {
  checkbox.checked = false;
};
   