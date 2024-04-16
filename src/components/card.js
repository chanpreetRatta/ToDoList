export let card;

card = (entry) => {
  let card = document.createElement("div");
  card.classList.add("card");

  let hasNotCompleted = document.createElement("div");
  hasNotCompleted.classList.add("hasNotCompleted");

  let cardBody = document.createElement("div");
  let title = document.createElement("div");
  let date = document.createElement("div");
  let id = document.createElement("div");
  cardBody.classList.add("cardBody");
  title.classList.add("title");
  date.classList.add("date");
  id.classList.add("cardId");

  title.appendChild(document.createTextNode(entry.title));
  date.appendChild(document.createTextNode(entry.timeCreated.split("T")[0]));
  id.appendChild(document.createTextNode(entry.timeCreated));

  cardBody.append(title, date, id);
  card.append(hasNotCompleted, cardBody);

  return card;
};
