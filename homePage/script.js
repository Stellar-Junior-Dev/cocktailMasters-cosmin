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
  const body = document.querySelector("body");
  const searchPage = createDivs("c-search-transition");
  searchPage.id = "id-search-page";
  body.appendChild(searchPage);
  const searchMenu = createDivs("c-search-menu");
  searchMenu.id = "id-search-menu";
  searchPage.appendChild(searchMenu);
  //Append new functions
  const searchHeaderElement = searchPageHeader();
  const searchInputElement = renderInputElement();
  const searchTextResult = renderTextResult();
  const cocktailImageResult = renderFigure();
  appendChildren(searchMenu, [
    searchHeaderElement,
    searchInputElement,
    searchTextResult,
    cocktailImageResult,
  ]);
  return searchPage;
}
//
function renderNavigationIcons() {
  const searchElem = createDivs("search-element");
  const searchIcon = createIcon("search", "search-icon");
  searchElem.appendChild(searchIcon);
  const iconNav = createDivs("nav-op");
  iconNav.appendChild(searchElem);

  searchElem.addEventListener("click", displaySearchMenu);
  function displaySearchMenu() {
    const selectPage = document.getElementById("id-search-page");
    selectPage.classList.add("c-search-page");
  }

  const burgerIconElem = createDivs();
  const burgerIcon = createIcon("grid", "menu-icon");
  burgerIconElem.appendChild(burgerIcon);

  burgerIconElem.addEventListener("click", displayBurgerMenu);
  function displayBurgerMenu() {
    const burgerSelect = document.getElementById("id-burger");
    console.log(burgerSelect);
    console.log(typeof burgerSelect);
    burgerSelect.classList.add("c-burger-menu-visible");
  }

  iconNav.appendChild(burgerIconElem);
  return iconNav;
}
//
function searchPageHeader() {
  const headerElement = document.createElement("div");
  const closeIcon = createIcon("close", "c-close");
  const titleSearch = createHeadings("search", "c-title");
  closeIcon.addEventListener("click", exitPage);
  function exitPage() {
    const exitButton = document.getElementById("id-search-page");
    exitButton.classList.remove("c-search-page");
  }

  appendChildren(headerElement, [closeIcon, titleSearch]);
  return headerElement;
}
//
function renderInputElement() {
  const inputElement = createDivs("c-inputElement");
  const inputSearch = document.createElement("input");
  inputSearch.className = "c-input";
  inputSearch.placeholder = "type here";
  const inputSearchIcon = createIcon("search", "c-search");
  inputElement.appendChild(inputSearch);
  inputElement.appendChild(inputSearchIcon);
  return inputElement;
}

//
function renderTextResult() {
  const showResults = document.createElement("p");
  showResults.className = "c-paragraph";
  showResults.textContent = "results";
  return showResults;
}
//
function renderFigure() {
  const figureImage = document.createElement("figure");
  figureImage.className = "c-icon-result";
  const resultImage = document.createElement("img");
  resultImage.src = "./Group.png";
  resultImage.className = "c-icon";
  figureImage.appendChild(resultImage);
  const figcaption = document.createElement("figcaption");
  figcaption.className = "c-figcaption";
  figcaption.textContent = "no results yet";
  figureImage.appendChild(figcaption);
  return figureImage;
}

function renderBurgerPage() {
  const burgerMenu = createDivs("c-burger-menu");
  burgerMenu.id = "id-burger";
  const closeBurgerPage = renderExitBurgerMenu();
  const burgerLinks = renderBurgerLinks();
  const copyrightElement = renderCopyright();
  appendChildren(burgerMenu, [closeBurgerPage, burgerLinks, copyrightElement]);
  return burgerMenu;
}
function renderExitBurgerMenu() {
  const exitMenuIcon = createIcon("close", "c-exit");

  exitMenuIcon.addEventListener("click", exitMenu);
  function exitMenu() {
    const burgerExitButton = document.getElementById("id-burger");
    burgerExitButton.remove("c-burger-menu-visible");
  }
  return exitMenuIcon;
}

function renderBurgerLinks() {
  const linksArray = [
    "home",
    "favorites",
    "popular drinks",
    "latest drinks",
    "random drinks",
  ];
  const headerContainer = createDivs("c-links");
  for (let i = 0; i < linksArray.length; i++) {
    const link = createHeadings(linksArray[i], "c-menu");
    headerContainer.appendChild(link);
  }

  return headerContainer;
}

function renderCopyright() {
  const footerCopyright = document.createElement("p");
  footerCopyright.className = "c-copyright";
  footerCopyright.innerHTML = "&copy2023 SkiwindGroup & TheCocktailDB";
  return footerCopyright;
}

function renderSection() {
  const body = document.querySelector("body");
  const clickSearch = renderSearchPage();
  const clickMenu = renderBurgerPage();
  const mainPage = renderMainPage();

  appendChildren(body, [clickSearch, clickMenu, mainPage]);
  // Create main page
}
function renderMainPage() {
  const mainPage = document.createElement("div");
  const icons = renderNavigationIcons();
  const titleHomePage = renderTitleHomePage();
  const pageMainContent = renderMainContent();
  appendChildren(mainPage, [icons, titleHomePage, pageMainContent]);
  return mainPage;
}

function renderTitleHomePage() {
  const pageTitle = document.createElement("h1");
  pageTitle.className = "pageTitle";
  pageTitle.innerHTML = ` cocktail <br> master`;
  return pageTitle;
}

function renderMainContent() {
  const mainContent = document.createElement("div");

  for (obj of drinksArray) {
    const drinksCategoryName = renderHeader();
    const mainDrinksCard = renderMainCards();

    appendChildren(mainContent, [drinksCategoryName, mainDrinksCard]);
  }
  return mainContent;
}

function renderHeader() {
  const header = document.createElement("header");
  const drinkTypeTitle = createDivs("title-name");
  const drinkType = document.createElement("h3");
  drinkType.textContent = obj.categoryName;
  drinkTypeTitle.appendChild(drinkType);
  const viewBtn = createDivs("view-all-button");
  const button = document.createElement("button");
  button.innerHTML = "view all";
  const viewAllIcon = document.createElement("ion-icon");
  viewAllIcon.setAttribute("name", "chevron-forward-outline");
  button.appendChild(viewAllIcon);
  viewBtn.appendChild(button);
  appendChildren(header, [drinkTypeTitle, viewBtn]);
  return header;
}

function renderMainCards() {
  const main = createDivs("c-card-section");
  const rowDrinks = createDivs("row-drinks");
  for (item of obj.cocktailList) {
    let card = renderCard(item);
    rowDrinks.appendChild(card);
    main.appendChild(rowDrinks);
  }
  return main;
}

function appendChildren(tag, arr) {
  for (item of arr) {
    tag.appendChild(item);
  }
}

function renderCard(item) {
  const divCard = document.createElement("div");
  divCard.classList.add("card");

  const cardImage = renderCardImage(item);
  const textCardContent = renderTextCard(item);
  const cardIcon = renderCardIcon(item);
  appendChildren(divCard, [cardImage, textCardContent, cardIcon]);
  return divCard;
}
function renderCardImage(item) {
  const divCardImage = createDivs("card-image");

  const image = document.createElement("img");
  image.src = item.image;
  image.alt = item.name;
  divCardImage.appendChild(image);
  return divCardImage;
}

function renderTextCard(item) {
  const divCardTitle = createDivs("card-title");
  const divCenter = createDivs("center");
  const paragraph = document.createElement("p");
  paragraph.textContent = item.name;
  divCenter.appendChild(paragraph);
  divCardTitle.appendChild(divCenter);
  return divCardTitle;
}

function renderCardIcon(item) {
  const divCardIcon = createDivs("card-icon");
  const icon = document.createElement("ion-icon");
  if (item.favorite === true) {
    icon.setAttribute("name", "heart");
  } else {
    icon.setAttribute("name", "heart-outline");
  }
  divCardIcon.appendChild(icon);
  return divCardIcon;
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
