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

let data = {
  categoryName: "Popular drinks",
  cocktailList: [mojito, ginLemon, oldFashioned],
};

let longIslandTea = {
  image:
    "https://www.thecocktaildb.com/images/media/drink/nkwr4c1606770558.jpg",
  favorite: false,
  name: "Long Island Tea",
};
let negroni = {
  image:
    "https://www.thecocktaildb.com/images/media/drink/qgdu971561574065.jpg",
  favorite: true,
  name: "Negroni",
};
let whiskeySour = {
  image:
    "https://www.thecocktaildb.com/images/media/drink/hbkfsh1589574990.jpg",
  favorite: true,
  name: "Whiskey Sour",
};

let dataTwo = {
  categoryName: "Latest drinks",
  cocktailList: [longIslandTea, negroni, whiskeySour],
};

let dryMartini = {
  image:
    "https://www.thecocktaildb.com/images/media/drink/6ck9yi1589574317.jpg",
  favorite: false,
  name: "Dry Martini",
};
let daiquiry = {
  image:
    "https://www.thecocktaildb.com/images/media/drink/mrz9091589574515.jpg",
  favorite: true,
  name: "Daiquiry",
};
let margarita = {
  image:
    "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",
  favorite: true,
  name: "Margarita",
};

let dataThree = {
  categoryName: "Random drinks",
  cocktailList: [dryMartini, daiquiry, margarita],
};

const drinksArray = [data, dataTwo, dataThree];

window.addEventListener("load", renderSection);

function renderSection() {
  //Append shit
  for (obj of drinksArray) {
    const body = document.querySelector("body");

    //build sections :

    const section = document.createElement("section");
    section.className = "group";

    //build header

    const header = document.createElement("header");

    //build div title

    const divTitle = document.createElement("div");
    divTitle.className = "title-name";

    //build div-buttons

    const divBtn = document.createElement("div");
    divBtn.className = "view-all-button";

    //Build button
    const button = document.createElement("button");
    button.innerHTML = `view all <ion-icon name="chevron-forward-outline"></ion-icon>`;

    //build divDrinks
    const divDrinks = document.createElement("div");
    divDrinks.className = "row-drinks";

    const drinkType = document.createElement("h3");

    drinkType.textContent = obj.categoryName;
    divTitle.appendChild(drinkType);
    divBtn.appendChild(button);
    header.appendChild(divTitle);
    header.appendChild(divBtn);

    section.appendChild(header);
    body.appendChild(section);
    const main = document.createElement("main");
    const divRow = document.createElement("div");
    divRow.className = "row-drinks";

    for (item of obj.cocktailList) {
      let card = renderCard(item);
      divRow.appendChild(card);
    }
    main.appendChild(divRow);
    section.appendChild(main);
  }
}

function renderCard(item) {
  const divCard = document.createElement("div");
  divCard.classList.add("card");

  const divCardImage = document.createElement("div");
  divCardImage.classList.add("card-image");

  const image = document.createElement("img");
  image.src = item.image;

  const divCardTitle = document.createElement("div");
  divCardTitle.classList.add("card-title");

  const divCenter = document.createElement("div");
  divCenter.classList.add("center");

  const paragraph = document.createElement("p");
  paragraph.textContent = item.name;

  const divCardIcon = document.createElement("div");
  divCardIcon.classList.add("card-icon");
  const icon = document.createElement("ion-icon");
  if (item.favorite === true) {
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
  return divCard;
}
