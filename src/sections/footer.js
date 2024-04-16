export let footer;

footer = (() => {
  let footer = document.createElement("div");
  footer.classList.add("footer");
  footer.appendChild(document.createTextNode("A project by Chanpreet"));

  return footer;
})();
