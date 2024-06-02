const hamMeni = document.querySelector(".hamburgerMeni");

const skrivenMeni = document.querySelector(".skrivenMeni");

hamMeni.addEventListener("click", () => {
  hamMeni.classList.toggle("aktivno");
  skrivenMeni.classList.toggle("aktivno");
});