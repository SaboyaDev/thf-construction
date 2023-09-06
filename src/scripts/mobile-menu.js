
document.addEventListener('DOMContentLoaded', function() {
  console.log("Script loaded!")

  // Select the button that will trigger the mobile menu
  const mobileMenuButton = document.querySelector(".mobile-btn");

  // Select the mobile menu itself
  const mobileMenu = document.getElementById("mobile-menu");

  // Select the hamburger icon and the close icon
  const hamburgerIcon = document.querySelector(".hamburger");
  const closeIcon = document.querySelector(".close");

  // Add a click event listener to the mobile menu button
  mobileMenuButton.addEventListener("click", () => {
    // Toggle the mobile menu's visibility
    mobileMenu.classList.toggle("hidden");

    // Toggle the visibility of the hamburger and close icons
    hamburgerIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");

    // Update aria-expanded attribute
    const expanded = mobileMenuButton.getAttribute("aria-expanded") === "true";
    mobileMenuButton.setAttribute("aria-expanded", !expanded);
  });
})