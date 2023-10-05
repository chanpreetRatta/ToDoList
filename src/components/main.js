import { form } from "./form";
export let main;

main = (() => {
  let main = document.createElement("div");
  main.classList.add("main");
  main.appendChild(form);
  return main;
})();

function getDataFromForm(event) {
  event.preventDefault();
  console.log(event.target.elements[0].value);
}

main.addEventListener("submit", getDataFromForm);
