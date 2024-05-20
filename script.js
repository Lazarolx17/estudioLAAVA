// home page navigation //
function openMenu() {
  document.getElementById("container").style.right = "0%";
  document.getElementById("menu").style.opacity = "1";
}
function closeMenu() {
  document.getElementById("container").style.right = "-100%";
  document.getElementById("menu").style.opacity = "0";
}

// Responsive navigation //
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
