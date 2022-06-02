//!TOGGLE NAVIGATION MENU AND ICONS

const menuToggleButton = docmuent.querySelector(".menu-toggle-button");
const menuElement = docmuent.querySelector(".menu");

const toggleMenu = () => {
    menuElement.ClassList.toggle("active")
};

menuToggleButton.addEventListener("click", toggleMenu);

// !REMOVE ACTIVE CLASS FROM AND ICON ON LINK CLICK

// !TOGGLE THEME AND STORE SELECTION WITHIN LOCAL STORAGE

// !SCROLL REVEAL