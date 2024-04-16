import { card } from "./../components/card";
export let main;
let arrayOfFormData = JSON.parse(localStorage.getItem("formData"));

main = (() => {
  let main = document.createElement("div");
  let cardContainer = document.createElement("div");

  main.classList.add("main");
  cardContainer.classList.add("card-container");

  main.append(
    form("input-form", "Enter your !ToDO item here!!! "),
    cardContainer
  );

  updateCardContainer(cardContainer);

  cardContainer.addEventListener("click", deleteCard);

  return {
    main,
  };
})();

function updateCardContainer(container) {
  container.innerHTML = "";

  if (arrayOfFormData) {
    arrayOfFormData.map((cardData) => {
      container.append(card(cardData));
    });
  }
}

function form(formClass, placeHolder) {
  let form = document.createElement("form");
  form.classList.add(formClass);
  form.id = formClass;

  let input = document.createElement("input");
  let button = document.createElement("button");

  input.placeholder = placeHolder;
  input.name = formClass;
  button.type = "submit";
  button.textContent = "+";

  form.append(input, button);

  form.addEventListener("submit", getDataFromForm);

  return form;
}

function getDataFromForm(event) {
  let formData = {
    title: event.target[0].value,
    timeCreated: new Date().toISOString(),
    cardId: new Date().toISOString(),
    completed: false,
  };

  let dataTable = JSON.parse(localStorage.getItem("formData")) || [];

  dataTable.push(formData);
  localStorage.setItem("formData", JSON.stringify(dataTable));
  event.target.reset();
}

function deleteCard(event) {
  const getCardId = event.target.querySelector(".cardId").innerHTML;
  let tableData = arrayOfFormData.filter((card) => card.cardId !== getCardId);
  localStorage.setItem("formData", JSON.stringify(tableData));
  updateCardContainer(document.querySelector(".card-container"));
  window.location.reload();
}
