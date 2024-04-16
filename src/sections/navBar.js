export let navBar;
navBar = (function () {
  let navigationBar = document.createElement("div");
  navigationBar.classList.add("nav-bar");
  navigationBar.appendChild(document.createTextNode("!ToDoList"));

  return navigationBar;
})();
