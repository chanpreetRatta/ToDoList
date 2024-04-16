import "normalize.css";
import "./style.css";
import { navBar } from "./sections/navBar";
import { main } from "./sections/main";
import { footer } from "./sections/footer";

let container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);

container.appendChild(navBar);
container.appendChild(main.main);
container.appendChild(footer);
