jQuery(document).ready(function ($) {
  $(".burger-container").on("click", function (e) {
    e.preventDefault();
    $(this).children(".burger").toggleClass("burger--active");
    $("#hero #top-nav > ul").toggleClass("active");
    $("#hero #top-nav .shop-icon-and-login-container").toggleClass("active");
  });
});

const Nav = document.querySelector("#top-nav-container");
const NavTop = Nav.offsetTop + 150;

function fixnavbar() {
  if (window.scrollY >= NavTop) {
    document.body.style.paddingTop = Nav.offsetHeight + "px";
    document.body.classList.add("fixed-nav");
  } else {
    document.body.style.paddingTop = 0;
    document.body.classList.remove("fixed-nav");
  }
}
window.addEventListener("scroll", fixnavbar);
