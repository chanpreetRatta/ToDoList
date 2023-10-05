export let form;

form = (() => {
  let form = document.createElement("form");
  form.classList.add("input-form");
  form.id += "input-form";

  let input = document.createElement("input");
  let button = document.createElement("button");

  input.placeholder = "Enter your !ToDO item here!!! ";
  button.textContent = "+";

  form.append(input, button);

  return form;
})();
