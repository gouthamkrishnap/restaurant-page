function aboutTab() {
    const content = document.querySelector("#content");

    content.textContent = "";

    const heading = document.createElement("h1");
    heading.textContent = "ABOUT US";

    const paragraph = document.createElement("p");
    paragraph.textContent ="The Batcave Bistro is a Gotham-inspired restaurant serving delicious food after dark.";

    const paragraph2 = document.createElement("p");
    paragraph2.textContent ="Founded in the heart of Gotham, our restaurant combines great food, a mysterious atmosphere, and a passion for bringing people together.";

    content.appendChild(heading);
    content.appendChild(paragraph);
    content.appendChild(paragraph2);
}

export default aboutTab;