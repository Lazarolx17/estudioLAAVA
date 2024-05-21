// home page navigation //
function openMenu() {
  document.getElementById("container").style.right = "0%";
  document.getElementById("menu").style.opacity = "1";
}

function closeMenuAndScrollToSection(sectionId) {
  const menuContainer = document.getElementById("container");
  const menuLinks = document.querySelectorAll(".nav-links li a");

  // Close the menu
  menuContainer.style.right = "-100%";
  menuContainer.querySelector("#menu").style.opacity = "0";

  // Scroll to the clicked section
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

// Close menu when close icon is clicked
function closeMenu() {
  closeMenuAndScrollToSection(null);
}

// Responsive navigation //
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Add event listeners to each navigation link
document.querySelectorAll(".nav-links li a").forEach((link) => {
  link.addEventListener("click", (event) => {
    const sectionId = event.target.getAttribute("href").substring(1); // Get section id from href
    closeMenuAndScrollToSection(sectionId); // Close menu and scroll to clicked section
  });
});
