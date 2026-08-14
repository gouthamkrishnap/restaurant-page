import restaurantImage from "./images/The_Batcave_Bistro.png"

function homeTab() {
    const content = document.querySelector("#content");

    content.textContent = "";

    const heading = document.createElement("h1");
    heading.textContent = "Dine in the Shadows";

    const image = document.createElement("img");
    image.src = restaurantImage;
    image.alt = "The Batcave Bistro";

    const paragraph = document.createElement("p");
    paragraph.textContent = "Welcome to The Batcave Bistro, where Gotham’s finest flavors come out after dark. Inspired by the legendary Dark Knight, we serve bold, unforgettable dishes in a cozy hideaway worthy of Bruce Wayne himself. Step inside, grab a seat, and discover a menu that even Batman would make time for.";

    content.appendChild(heading);
    content.appendChild(image);
    content.appendChild(paragraph);
}

export default homeTab;