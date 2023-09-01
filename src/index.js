// Import the functions from other js modules
import navBar from "./navbar";
import homeContainer from "./home";
import menuContainer from "./menu";
import contactContainer from "./contact";

//call navBar to avoid page getting loaded with delay

navBar();

/// get all "buttoms" in order to "navigate"  by changing dom

const homeBtn = document.getElementById("home");
const menuBtn = document.getElementById("menu");
const contactBtn = document.getElementById("contact");

//calling the home function so it get render first by defult
homeContainer();

//calling home again in case we have called other functions

homeBtn.addEventListener("click", () => {
  homeContainer();
});

//calling menu function to render the menu content

menuBtn.addEventListener("click", () => {
  menuContainer();
});

//calling contact function to render the contact content
contactBtn.addEventListener("click", () => {
  contactContainer();
});
