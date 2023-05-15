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

// RENDER MAIN PAGE
function renderSection() {
  const body = document.querySelector("body");
  const searchMenu = renderSearchPage();
  const burgerMenu = renderBurgerPage();
  const mainPage = renderMainPage();
  appendChildren(body, [searchMenu, burgerMenu, mainPage])
}

function renderMainPage() {
  const mainPageContainer = createDivs("")
  const pageTitle = createHeadings("cocktail masters", "pageTitle")
  const icons = renderMainPageIcons()
  
  const categories = renderCategories()
  appendChildren(mainPageContainer, [icons, pageTitle, categories])
  return mainPageContainer
}

// RENDER PAGE ICONS
function renderMainPageIcons() {
  const iconNav = createDivs("nav-op");
  const searchIcon = renderSearchIcon()
  const burgerIcon = renderBurgerIcon()

  appendChildren(iconNav, [searchIcon, burgerIcon])
 
  return iconNav
}

function renderBurgerIcon() {
  const burgerIcon = createIcon("grid", "menu-icon");
  const burgerIconElem = createDivs();
  burgerIconElem.appendChild(burgerIcon);

  burgerIconElem.addEventListener("click", displayBurgerMenu);
  function displayBurgerMenu() {
    const burgerMenu = document.getElementById("burgerMenu")
    burgerMenu.classList.add("c-burger-menu-visible");
  }
  return burgerIconElem
}

function renderSearchIcon() {
  const searchElem = createDivs("search-element");
  const searchIcon = createIcon("search", "search-icon");

  searchElem.appendChild(searchIcon);

  searchElem.addEventListener("click", displaySearchMenu);
  function displaySearchMenu() {
    const searchPage = document.getElementById("searchPage")
    searchPage.classList.add("c-search-page");
  }

  return searchElem
}

// RENDER CATEGORIES
function renderCategories() {
  const categoryContainer = createDivs("")
  for (category of drinksArray) {
    appendChildren(categoryContainer, renderCategory(category))
  }
  return categoryContainer
}

function renderCategory(category) {
  const header = renderCategoryHeader(category)
  const rowDrinks = createDivs("row-drinks");
  for (item of category.cocktailList) {
    let card = renderCard(item);
    rowDrinks.appendChild(card);
  }
  return [header, rowDrinks]
}

function renderCategoryHeader(category) {
  const header = document.createElement("header");

  const drinkTitle = renderCategoryTitle(category.categoryName)
  const button = renderCategoryButton()

  appendChildren(header, [drinkTitle, button])
 
  return header
}

function renderCategoryTitle(title) {
  const categoryTitle = document.createElement("h3");
  categoryTitle.className = "title-name"
  categoryTitle.textContent = title;

  return categoryTitle
}

function renderCategoryButton() {
  const button = document.createElement("button");
  button.className = "view-all-button"
  button.innerHTML = `view all`;

  let chevronIcon = createIcon("chevron-forward-outline")
  button.appendChild(chevronIcon)

  return button
}

function renderCard(item) {
  const divCard = createDivs("card")

  const cardImage = renderCardImage(item.image, item.name)
  const cardTitle = renderCardTitle(item.name)
  const cardIcon = renderCardIcon(item.favorite)

  appendChildren(divCard, [cardImage, cardTitle, cardIcon])

  return divCard;
}

function renderCardIcon(favorite) {
  const divCardIcon = document.createElement("div");
  divCardIcon.classList.add("card-icon");
  const icon = document.createElement("ion-icon");
  if (favorite === true) {
    icon.setAttribute("name", "heart");
  } else {
    icon.setAttribute("name", "heart-outline");
  }

  divCardIcon.appendChild(icon);


  return divCardIcon
}

function renderCardTitle(name) {
  const divCardTitle = createDivs("card-title")

  const paragraph = document.createElement("p");
  paragraph.textContent = name;
  paragraph.className = "center"

  divCardTitle.appendChild(paragraph);
  return divCardTitle
}

function renderCardImage(image, name) {
  const divCardImage = createDivs("card-image")

  const imageElement = document.createElement("img");
  imageElement.src = image;
  imageElement.alt = name;

  divCardImage.appendChild(imageElement);
  return divCardImage
}

// RENDER SEARCH PAGE
function renderSearchPage() {
  const searchPage = createDivs("c-search-transition");
  searchPage.id = "searchPage"

  const searchMenu = createDivs("c-search-menu");

  const closeIcon = renderSearchCloseIcon()
  const titleSearch = createHeadings("search", "c-title");
  const inputElement = renderSearchInput()
  const showResults = renderSearchResults()
  const figureImage = renderSearchResultImage()

  appendChildren(searchMenu, [closeIcon, titleSearch, inputElement, showResults, figureImage])

  searchPage.appendChild(searchMenu);
  return searchPage
}

function renderSearchResults() {
  const showResults = document.createElement("p");
  showResults.className = "c-paragraph";
  showResults.textContent = "results";
  
  return showResults

}

function renderSearchResultImage() {
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
  return figureImage
}

function renderSearchCloseIcon() {
  const closeIcon = createIcon("close", "c-close");
  closeIcon.addEventListener("click", exitPage);
  function exitPage() {
    const searchPage = document.getElementById("searchPage")
    searchPage.classList.remove("c-search-page");
  }
  return closeIcon
}

function renderSearchInput() {
  const inputElement = createDivs("c-inputElement");
  const inputSearch = document.createElement("input");

  inputSearch.className = "c-input";
  inputSearch.placeholder = "type here";

  const inputSearchIcon = createIcon("search", "c-search");

  inputElement.appendChild(inputSearch);
  inputElement.appendChild(inputSearchIcon);

  return inputElement
}

// RENDER BURGER MENU
function renderBurgerPage() {
  const links = ["home", "favorites", "popular drinks", "latest drinks", "random drinks"]

  const burgerMenu = createDivs("c-burger-menu");
  burgerMenu.id = "burgerMenu"
 
  const exitIcon = renderHamburgerExitIcon()
  const headerContainer = createDivs("c-links");
  for(item of links) {
    const link = createHeadings(item, "c-menu");
    headerContainer.appendChild(link)
  }
  const footerCopyright = renderHamburgerFooter()

  appendChildren(burgerMenu, [exitIcon, headerContainer, footerCopyright])
  return burgerMenu;
}

function renderHamburgerFooter() {
  const footerCopyright = document.createElement("p");
  footerCopyright.className = "c-copyright";
  footerCopyright.innerHTML = "&copy2023 SkiwindGroup & TheCocktailDB";

  return footerCopyright
}

function renderHamburgerExitIcon() {
  const exitMenuIcon = createIcon("close", "c-exit");
  exitMenuIcon.addEventListener("click", exitMenu);
  function exitMenu() {
    const burgerMenu = document.getElementById("burgerMenu")
    burgerMenu.classList.remove("c-burger-menu-visible");
  }
  return exitMenuIcon
}

// write a function to create icons

function createIcon(nameIcon, classIcon) {
  const ionIcon = document.createElement("ion-icon");
  ionIcon.setAttribute("name", nameIcon);
  ionIcon.className = classIcon;
  return ionIcon;
}

// write a function to create headings for the burger page

function createHeadings(content, addClass) {
  const heading = document.createElement("h1");
  heading.textContent = content;
  heading.className = addClass;
  return heading;
}

function createDivs(className) {
  const createDivElem = document.createElement("div");
  createDivElem.className = className;
  return createDivElem;
}

function appendChildren(element, children) {
  for(item of children) {
    element.appendChild(item)
  }
}