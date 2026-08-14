function menuTab() {
    const content = document.querySelector("#content");

    content.textContent = "";

    const heading = document.createElement("h1");
    heading.textContent = "MENU";

    const item1 = document.createElement("h2");
    item1.textContent = "Gotham Burger";

    const description1 = document.createElement("p");
    description1.textContent = "Juicy beef burger with cheese and fresh vegetables."

    const item2 = document.createElement("h2");
    item2.textContent = "Bat Wings";

    const description2 = document.createElement("p");
    description2.textContent = "Crispy chicken wings with our signature dark sauce.";

    const item3 = document.createElement("h2");
    item3.textContent = "Wayne Manor Pasta";

    const description3 = document.createElement("p");
    description3.textContent = "Creamy pasta prepared with fresh ingredients.";

    content.appendChild(heading);
    content.appendChild(item1);
    content.appendChild(description1);
    content.appendChild(item2);
    content.appendChild(description2);
    content.appendChild(item3);
    content.appendChild(description3);
}

export default menuTab;