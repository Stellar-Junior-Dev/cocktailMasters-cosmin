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

function renderSearchPage() {
  //Organize all code lines that involve the search page and its rendering :
  const body = document.querySelector("body");
  const searchPage = createDivs();
  const searchMenu = createDivs("c-search-menu");

  const searchIcon = createIcon("search", "search-icon");
  const searchElem = createDivs("search-element");
  searchElem.appendChild(searchIcon);
  const closeIcon = createIcon("close", "c-close");
  //
  const titleSearch = createHeadings("search", "c-title");
  const inputElement = createDivs("c-inputElement");
  const inputSearch = document.createElement("input");
  inputSearch.className = "c-input";
  inputSearch.placeholder = "type here";
  const inputSearchIcon = createIcon("search", "c-search");
  const showResults = document.createElement("p");
  showResults.className = "c-paragraph";
  showResults.textContent = "results";
  const figureImage = document.createElement("figure");
  figureImage.className = "c-icon-result";
  const resultImage = document.createElement("img");
  resultImage.src = "./Group.png";
  resultImage.className = "c-icon";
  const figcaption = document.createElement("figcaption");
  figcaption.className = "c-figcaption";
  figcaption.textContent = "no results yet";
  //append
  searchMenu.appendChild(closeIcon);
  searchMenu.appendChild(titleSearch);
  inputElement.appendChild(inputSearch);
  inputElement.appendChild(inputSearchIcon);
  searchMenu.appendChild(inputElement);
  searchMenu.appendChild(showResults);
  figureImage.appendChild(resultImage);
  figureImage.appendChild(figcaption);
  searchMenu.appendChild(figureImage);
  searchPage.appendChild(searchMenu);
  body.appendChild(searchPage);
  //onclick event for search menu
  searchElem.addEventListener("click", displaySearchMenu);
  function displaySearchMenu() {
    searchMenu.classList.add("c-search-visible");

    searchPage.classList.add("c-search-page");
  }

  closeIcon.addEventListener("click", exitPage);
  function exitPage() {
    searchMenu.className = "c-search-menu";
    searchPage.classList.remove("c-search-page");
  }
  const iconNav = createDivs("nav-op");
  iconNav.appendChild(searchElem);
  body.appendChild(iconNav);
}

function renderBurgerPage() {
  const body = document.querySelector("body");

  const burgerMenu = createDivs("c-burger-menu");
  const burgerIcon = createIcon("grid", "menu-icon");
  const exitMenuIcon = createIcon("close", "c-exit");
  const headerContainer = createDivs("c-links");
  const homeLink = createHeadings("home", "c-menu");
  const favoritesLink = createHeadings("favorites", "c-menu");
  const popularLink = createHeadings("popular drinks", "c-menu");
  const latestDrinksLink = createHeadings("latest drinks", "c-menu");
  const randomLink = createHeadings("random drinks", "c-menu");

  const footerCopyright = document.createElement("p");
  footerCopyright.className = "c-copyright";
  footerCopyright.innerHTML = "<p>&copy2023 SkiwindGroup & TheCocktailDB";
  //append
  burgerMenu.appendChild(exitMenuIcon);
  headerContainer.appendChild(homeLink);
  headerContainer.appendChild(favoritesLink);
  headerContainer.appendChild(popularLink);
  headerContainer.appendChild(latestDrinksLink);
  headerContainer.appendChild(randomLink);
  burgerMenu.appendChild(headerContainer);
  burgerMenu.appendChild(footerCopyright);
  body.appendChild(burgerMenu);
  //onclick event for "burger" menu
  const burgerIconElem = createDivs();
  burgerIconElem.appendChild(burgerIcon);

  burgerIconElem.addEventListener("click", displayBurgerMenu);
  function displayBurgerMenu() {
    burgerMenu.classList.add("c-burger-menu-visible");
  }
  exitMenuIcon.addEventListener("click", exitMenu);
  function exitMenu() {
    burgerMenu.classList.remove("c-burger-menu-visible");
  }
  const iconNav = document.querySelector(".nav-op");
  iconNav.appendChild(burgerIconElem);
}

function renderSection() {
  const body = document.querySelector("body");
  renderSearchPage();
  renderBurgerPage();

  // Create main page
  const pageTitle = document.createElement("h1");
  pageTitle.className = "pageTitle";
  pageTitle.innerHTML = ` cocktail <br> master`;
  body.appendChild(pageTitle);

  for (obj of drinksArray) {
    const body = document.querySelector("body");

    //build sections :
    const section = document.createElement("section");
    section.className = "group";
    //build header
    const header = document.createElement("header");
    //build div title
    const drinkTypeTitle = document.createElement("div");
    drinkTypeTitle.className = "title-name";
    //build div-buttons
    const viewBtn = createDivs("view-all-button");
    //Build button
    const button = document.createElement("button");
    button.innerHTML = `view all <ion-icon name="chevron-forward-outline"></ion-icon>`;
    //build divDrinks
    const rowDrinks = createDivs("row-drinks");
    const drinkType = document.createElement("h3");

    drinkType.textContent = obj.categoryName;
    drinkTypeTitle.appendChild(drinkType);
    viewBtn.appendChild(button);
    header.appendChild(drinkTypeTitle);
    header.appendChild(viewBtn);
    section.appendChild(header);
    body.appendChild(section);
    const main = document.createElement("main");
    for (item of obj.cocktailList) {
      let card = renderCard(item);
      rowDrinks.appendChild(card);
    }
    main.appendChild(rowDrinks);
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
//write a functions to create <div>
function createDivs(className) {
  const createDivElem = document.createElement("div");
  createDivElem.className = className;
  return createDivElem;
}
