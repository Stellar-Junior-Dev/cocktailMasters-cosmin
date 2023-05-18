const card = JSON.parse(localStorage.getItem("selectedCard"));
window.addEventListener("load", loadDetailsPage);
function loadDetailsPage() {
  const body = document.querySelector("body");
  const divImg = renderHeaderImage(card.image);
  body.appendChild(divImg);
  const frame = renderCocktailDetails();
  body.appendChild(frame);
}

function renderHeaderImage(image) {
  const divImg = renderDivElement("divImg");
  const imageDiv = document.createElement("img");
  imageDiv.src = image;
  const divIcons = renderDivElement("divIcons");
  const iconHeart = renderIcon("heart", "iconHeart");
  const iconChevron = renderIcon("chevron-back-outline", "iconChevron");
  appendChildren(divIcons, [iconChevron, iconHeart]);
  iconChevron.addEventListener("click", () => {
    history.back();
  });
  appendChildren(divImg, [divIcons, imageDiv]);
  return divImg;
}

function renderCocktailDetails() {
  const frame = renderDivElement("frame");
  const titleDetailsPage = renderTitleDetail();
  const divDetails = renderTagsList();
  const titleMix = renderTitles("ingredients", "title-style");
  const divContainAll = renderIngredientsList();
  const titleInstruct = renderTitles("instructions", "title-style");
  const instructionsElement = renderInstructionsElement();
  const bottomNav = renderBottomNav();

  appendChildren(frame, [
    titleDetailsPage,
    divDetails,
    titleMix,
    divContainAll,
    titleInstruct,
    instructionsElement,
    bottomNav,
  ]);
  return frame;
}
function renderInstructionsElement() {
  const divParentMain = renderDivElement("div-parent-main");
  const divInstructions = renderInstructionList();
  divParentMain.appendChild(divInstructions);
  const textInstrElement = renderTextInstructions();
  const textServingElement = renderServingInstr();
  appendChildren(divInstructions, [textInstrElement, textServingElement]);
  return divParentMain;
}
function renderTextInstructions() {
  const textInstructions = renderDivElement("style-instructions");
  textInstructions.id = "change-language";
  textInstructions.textContent = card.instructions[0].text;
  return textInstructions;
}
function renderServingInstr() {
  const divBottomText = document.createElement("div");
  const glass = renderTitles("glass", "glass");
  divBottomText.appendChild(glass);
  const serveManner = document.createElement("p");
  serveManner.textContent = "Serve: Old-fashioned glass";
  divBottomText.appendChild(serveManner);
  return divBottomText;
}

function renderBottomNav() {
  const divNavigation = renderDivElement("flex-nav");
  const divPrevious = renderDivElement("previous");
  const divNext = renderDivElement("next");
  const previousIcon = renderIcon("chevron-back-outline", "bottom-nav");
  const nextIcon = renderIcon("chevron-forward-outline", "bottom-nav");
  const previousText = renderTextIcon("previous", "bottom-nav");
  const nextText = renderTextIcon("next", "bottom-nav");
  appendChildren(divPrevious, [previousIcon, previousText]);
  appendChildren(divNext, [nextText, nextIcon]);
  appendChildren(divNavigation, [divPrevious, divNext]);
  return divNavigation;
}

function renderTagsList() {
  const divDetails = renderDivElement("divDetails");
  let tags = card.tags;
  tags.forEach((tag) => {
    let tagElement = renderTag(tag);
    divDetails.appendChild(tagElement);
  });

  return divDetails;
}

function renderTag(tag) {
  const divItem = renderDivElement("divItem");
  divItem.textContent = tag;

  return divItem;
}

function renderIngredientsList() {
  const divContainAll = renderDivElement("ingredients");
  let list = card.ingredients;
  list.forEach((ingredient) => {
    let listElement = renderIngredient(ingredient);
    divContainAll.appendChild(listElement);
  });
  return divContainAll;
}

function renderIngredient(ingredient) {
  const divElements = renderDivElement("flex");
  const imgMix = document.createElement("img");
  imgMix.className = "small-pics";
  const textMix = document.createElement("p");
  textMix.className = "small-pics-text";
  imgMix.src = ingredient.img;
  textMix.textContent = ingredient.mix;
  divElements.appendChild(imgMix);
  divElements.appendChild(textMix);

  return divElements;
}

function renderInstructionList() {
  const divInstructions = renderDivElement("div-main-instruction");
  const divCountryType = renderDivElement("div-country-type");
  let instructionsToDo = card.instructions;
  instructionsToDo.forEach((language) => {
    let divFinal = renderLanguageFlag(language);
    divCountryType.appendChild(divFinal);
    divInstructions.appendChild(divCountryType);
  });
  return divInstructions;
}

function renderLanguageFlag(language) {
  const divFlag = renderDivElement("div-flag");
  divFlag.addEventListener("click", changeLanguage);
  function changeLanguage() {
    const flagText = document.getElementById("change-language");
    flagText.textContent = language.text;
    return flagText;
  }

  const imgFlag = document.createElement("img");
  imgFlag.className = "TEST";
  imgFlag.src = language.flag;
  divFlag.appendChild(imgFlag);
  return divFlag;
}

//Render functions to refactorization
function renderIcon(iconName, className) {
  const iconChevron = document.createElement("ion-icon");
  iconChevron.setAttribute("name", iconName);
  iconChevron.className = className;

  return iconChevron;
}
function renderTextIcon(content, className) {
  const paragraph = document.createElement("p");
  paragraph.textContent = content;
  paragraph.className = className;

  return paragraph;
}
function renderDivElement(addClass) {
  const createDivElem = document.createElement("div");
  createDivElem.classList.add(addClass);
  return createDivElem;
}
function renderTitles(content, className) {
  const titles = document.createElement("h2");
  titles.textContent = content;
  titles.className = className;

  return titles;
}
function appendChildren(parent, children) {
  for (elem of children) {
    parent.appendChild(elem);
  }
}
function renderTitleDetail() {
  const divTitle = renderDivElement("divTitle");
  const drinkTitle = document.createElement("h1");
  drinkTitle.textContent = card.name;
  divTitle.appendChild(drinkTitle);
  return divTitle;
}
