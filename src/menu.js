function menuTab() {
    const content = document.querySelector("#content");

    content.textContent = "";

    const heading = document.createElement("h1");
    heading.textContent = "MENU";

    const item1 = document.createElement("div");
    item1.classList.add("menu-item");
    const heading1 = document.createElement("h2");
    heading1.textContent = "Gotham Burger";
    const description1 = document.createElement("p");
    description1.textContent = "Juicy beef burger with cheese and fresh vegetables."

    const item2 = document.createElement("div");
    item2.classList.add("menu-item");
    const heading2 = document.createElement("h2");
    heading2.textContent = "Bat Wings";
    const description2 = document.createElement("p");
    description2.textContent = "Crispy chicken wings with our signature dark sauce.";

    const item3 = document.createElement("div");
    item3.classList.add("menu-item");
    const heading3 = document.createElement("h2");
    heading3.textContent = "Wayne Manor Pasta";
    const description3 = document.createElement("p");
    description3.textContent = "Creamy pasta prepared with fresh ingredients.";

    content.appendChild(heading);

    item1.appendChild(heading1);
    item1.appendChild(description1);
    content.appendChild(item1);

    item2.appendChild(heading2);
    item2.appendChild(description2);
    content.appendChild(item2);

    item3.appendChild(heading3);
    item3.appendChild(description3);
    content.appendChild(item3);
}

export default menuTab;