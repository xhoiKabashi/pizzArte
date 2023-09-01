const content = document.querySelector("#content");
const main = document.createElement("div");

const homeContainer = () => {
  main.classList.add("main");

  main.innerHTML = `<p>Hey</p>`;
  content.appendChild(main);
};

export default homeContainer;
export { main, content };
