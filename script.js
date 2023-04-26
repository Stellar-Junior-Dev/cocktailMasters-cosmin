

let data = {
    categoryName: "Popular drinks",
    cocktailList: [
        mojito,
        ginLemon,
        oldFashioned
    ]
}

let mojito = {
    image:
        "https://www.thecocktaildb.com/images/media/drink/metwgh1606770327.jpg",
    favorite: false,
    name: "Mojito",
};

let ginLemon = {
    image:
        "https://www.thecocktaildb.com/images/media/drink/nkwr4c1606770558.jpg",
    favorite: false,
    name: "Gin Lemon",
};

let oldFashioned = {
    image:
        "https://www.thecocktaildb.com/images/media/drink/vrwquq1478252802.jpg",
    favorite: true,
    name: "Old Fashioned",
};

window.addEventListener("load", renderSection());

function renderSection() {
    // pentru obiectul "data" afisati categoria completa.
}

function renderCard() {
    const test = document.getElementById("popularDrinks");

    const divCard = document.createElement("div");
    divCard.classList.add("card");

    const divCardImage = document.createElement("div");
    divCardImage.classList.add("card-image");

    const image = document.createElement("img");
    image.src = mojito.image;

    const divCardTitle = document.createElement("div");
    divCardTitle.classList.add("card-title");

    const divCenter = document.createElement("div");
    divCenter.classList.add("center");

    const paragraph = document.createElement("p");
    paragraph.textContent = mojito.name;

    const divCardIcon = document.createElement("div");
    divCardIcon.classList.add("card-icon");
    const icon = document.createElement("ion-icon");
    if (mojito.favorite === true) {
        icon.setAttribute("name", "heart");
    } else {
        icon.setAttribute("name", "heart-outline");
    }

    divCardIcon.appendChild(icon);
    divCenter.appendChild(paragraph);
    divCardTitle.appendChild(divCenter);
    divCardImage.appendChild(image);
    divCard.appendChild(divCardImage);
    divCard.appendChild(divCardTitle);
    divCard.appendChild(divCardIcon);
    test.appendChild(divCard);
}
