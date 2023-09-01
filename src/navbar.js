const navBar = () => {
  const content = document.querySelector("#content");
  const nav = document.createElement("ul");
  const d = new Date();
  nav.classList.add("nav");

  nav.innerHTML = `<a href="#" id="home">Home</a>
    <a href="#" id="menu">Menu</a>
    <a href="#" id="contact">Contact</a>`;

  content.appendChild(nav);

  const footer = document.createElement("ul");
  footer.classList.add("footer");

  footer.innerHTML = `<a href="#">xKabashi ${d.getFullYear()}</a>`;
  content.appendChild(footer);
};

export default navBar;
