// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("nav");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset >= fixedNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// Dark Mode
