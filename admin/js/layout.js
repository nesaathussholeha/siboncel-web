const menuToggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("sidebarOverlay");
const closeSidebar = document.getElementById("closeSidebar");
const body = document.body;

menuToggle.addEventListener("click", () => {
  if (window.innerWidth >= 1024) {
    body.classList.toggle("sidebar-hide");
  } else {
    sidebar.classList.toggle("active");
    overlay.classList.toggle("active");
  }
});

const hideSidebarMobile = () => {
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
};

closeSidebar.addEventListener("click", hideSidebarMobile);
overlay.addEventListener("click", hideSidebarMobile);

window.addEventListener("resize", () => {
  if (window.innerWidth >= 1024) {
    hideSidebarMobile();
  }
});