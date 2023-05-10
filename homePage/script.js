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
  const body = document.querySelector("body");
  //
  //
  //Create the Search Menu div

  const divSearchMenu = document.createElement("div");
  divSearchMenu.className = "c-search-menu";
  const closeIcon = createIcon("close", "c-close");

  //Exit search page
  closeIcon.addEventListener("click", exitPage);
  function exitPage() {
    divSearchMenu.className = "c-search-menu";
  }
  const titleSearch = createHeadings("search", "c-title");
  //create input , placeholder +icon
  const divInput = document.createElement("div");
  divInput.className = "c-divInput";
  const inputSearch = document.createElement("input");
  inputSearch.className = "c-input";
  inputSearch.placeholder = "type here";
  const inputSearchIcon = createIcon("search", "c-search");

  const showResults = document.createElement("p");
  showResults.className = "c-paragraph";
  showResults.textContent = "results";

  const divResultImage = document.createElement("figure");
  divResultImage.className = "c-icon-result";
  const resultImage = document.createElement("img");
  resultImage.src = "./Group.png";
  resultImage.className = "c-icon";
  const figcaption = document.createElement("figcaption");
  figcaption.className = "c-figcaption";
  figcaption.textContent = "no results yet";
  //append
  divSearchMenu.appendChild(closeIcon);
  divSearchMenu.appendChild(titleSearch);
  divInput.appendChild(inputSearch);
  divInput.appendChild(inputSearchIcon);
  divSearchMenu.appendChild(divInput);
  divSearchMenu.appendChild(showResults);
  divResultImage.appendChild(resultImage);
  divResultImage.appendChild(figcaption);
  divSearchMenu.appendChild(divResultImage);
  body.appendChild(divSearchMenu);
  //
  //
  //Create the "burger" navigation

  const divBurgerMenu = document.createElement("div");
  divBurgerMenu.className = "c-burger-menu";
  const exitMenuIcon = createIcon("close", "c-exit");
  exitMenuIcon.addEventListener("click", exitMenu);
  function exitMenu() {
    divBurgerMenu.className = "c-burger-menu";
  }
  const divLinks = document.createElement("div");
  divLinks.className = "c-links";
  const homeLink = createHeadings("home", "c-menu");
  const favoritesLink = createHeadings("favorites", "c-menu");
  const popularLink = createHeadings("popular drinks", "c-menu");
  const latestDrinksLink = createHeadings("latest drinks", "c-menu");
  const randomLink = createHeadings("random drinks", "c-menu");

  const footerCopyright = document.createElement("p");
  footerCopyright.className = "c-copyright";
  footerCopyright.innerHTML = "<p>&copy2023 SkiwindGroup & TheCocktailDB";
  //append
  divBurgerMenu.appendChild(exitMenuIcon);
  divLinks.appendChild(homeLink);
  divLinks.appendChild(favoritesLink);
  divLinks.appendChild(popularLink);
  divLinks.appendChild(latestDrinksLink);
  divLinks.appendChild(randomLink);
  divBurgerMenu.appendChild(divLinks);
  divBurgerMenu.appendChild(footerCopyright);
  body.appendChild(divBurgerMenu);

  //Create page title and navigation icons

  const searchIcon = createIcon("search", "search-icon");
  const burgerIcon = createIcon("grid", "menu-icon");
  //onclick event for "burger" menu
  const divBurgerIcon = document.createElement("div");
  divBurgerIcon.appendChild(burgerIcon);

  divBurgerIcon.addEventListener("click", displayBurgerMenu);
  function displayBurgerMenu() {
    divBurgerMenu.className = "c-burger-menu-visible";
  }
  const divNav = document.createElement("div");
  const divSearch = document.createElement("div");
  //onclick event for search menu
  divSearch.addEventListener("click", displaySearchMenu);
  function displaySearchMenu() {
    divSearchMenu.className = "c-search-visible";
  }
  divSearch.className = "div-search";
  divSearch.appendChild(searchIcon);
  divNav.className = "nav-op";
  divNav.appendChild(divSearch);
  divNav.appendChild(divBurgerIcon);
  body.appendChild(divNav);
  console.log(searchIcon);

  // create page title
  const pageTitle = document.createElement("h1");
  pageTitle.className = "pageTitle";
  pageTitle.innerHTML = `<h1> cocktail <br> master</h1>`;
  body.appendChild(pageTitle);

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

//write a function to create icons

function createIcon(nameIcon, classIcon) {
  const ionIcon = document.createElement("ion-icon");
  ionIcon.setAttribute("name", nameIcon);
  ionIcon.className = classIcon;
  return ionIcon;
}

//write a function to create headings for the burger page

function createHeadings(content, addClass) {
  const heading = document.createElement("h1");
  heading.textContent = content;
  heading.className = addClass;
  return heading;
}
