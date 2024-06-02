// home page navigation //
function openMenu() {
  document.getElementById("container").style.right = "0%";
  document.getElementById("menu").style.opacity = "1";
  document.body.style.overflow = "hidden"; // Disable scrolling on the body
}

function closeMenuAndScrollToSection(sectionId) {
  const menuContainer = document.getElementById("container");
  const menuLinks = document.querySelectorAll(".nav-links li a");

  // Close the menu
  menuContainer.style.right = "-100%";
  menuContainer.querySelector("#menu").style.opacity = "0";
  document.body.style.overflow = "auto"; // Re-enable scrolling on the body

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

// PROJECT SECTION //

let items = document.querySelectorAll(".slider .item");
let next = document.getElementById("next");
let prev = document.getElementById("prev");

let active = 3;
// let maxToShow = 3;
function loadShow() {
  let stt = 0;
  items[active].style.transform = `none`;
  items[active].style.zIndex = 1;
  items[active].style.filter = "none";
  items[active].style.opacity = 1;
  for (var i = active + 1; i < items.length; i++) {
    stt++;
    items[i].style.transform = `translateX(${120 * stt}px) scale(${
      1 - 0.2 * stt
    }) perspective(16px) rotateY(-1deg)`;
    items[i].style.zIndex = -stt;
    items[i].style.filter = "blur(5px)";
    items[i].style.opacity = stt > 2 ? 0 : 0.6;
  }
  stt = 0;
  for (var i = active - 1; i >= 0; i--) {
    stt++;
    items[i].style.transform = `translateX(${-120 * stt}px) scale(${
      1 - 0.2 * stt
    }) perspective(16px) rotateY(1deg)`;
    items[i].style.zIndex = -stt;
    items[i].style.filter = "blur(5px)";
    items[i].style.opacity = stt > 2 ? 0 : 0.6;
  }
}
loadShow();
next.onclick = function () {
  active = active + 1 < items.length ? active + 1 : 0; // Reset to 0 if exceeds length
  loadShow();
};
prev.onclick = function () {
  active = active - 1 >= 0 ? active - 1 : items.length - 1; // Set to last item if less than 0
  loadShow();
};
