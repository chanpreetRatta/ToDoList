import "normalize.css";
import "./style.css";
import { navBar } from "./components/navBar";
import { main } from "./components/main";
import { footer } from "./components/footer";

let container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);

container.appendChild(navBar);
container.appendChild(main);
container.appendChild(footer);
