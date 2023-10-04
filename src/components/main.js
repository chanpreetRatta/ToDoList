import { form } from "./form";
export let main;

main = (() => {
  let main = document.createElement("div");
  main.classList.add("main");
  main.appendChild(form);
  return main;
})();
