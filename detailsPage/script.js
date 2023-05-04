// Scrie pagina de detalii direct din JS.
let data = {
  image:
    "https://www.thecocktaildb.com/images/media/drink/vrwquq1478252802.jpg",
  favorite: true,
  name: "Old Fashioned",
  tags: ["iba", "classic", "alcoholic", "expensive", "savory"],
  ingredients: [
    {
      img: "https://www.thecocktaildb.com/images/ingredients/Bourbon-Medium.png",
      mix: "4.5cl bourbon",
    },
    {
      img: "https://www.thecocktaildb.com/images/ingredients/Angostura%20bitters-Medium.png",
      mix: "2 dashes angostura bitters",
    },
    {
      img: "https://www.thecocktaildb.com/images/ingredients/Sugar-Medium.png",
      mix: "1 cube sugar",
    },
    {
      img: "https://www.thecocktaildb.com/images/ingredients/Water-Medium.png",
      mix: "dash water",
    },
  ],
  instructions: [
    {
      language: "EN",
      flag: "https://www.thecocktaildb.com/images/icons/flags/shiny/32/gb.png",
      text: `Place sugar cube in old fashioned glass and saturate with bitters, add a dash of plain water.
  Muddle until dissolved.
  Fill the glass with ice cubes and add whiskey.
  Garnish with orange twist, and a cocktail cherry.`,
    },
    {
      language: "DE",
      flag: "https://www.thecocktaildb.com/images/icons/flags/shiny/32/de.png",
      text: `Zuckerwürfel in ein old fashioned Glas geben und mit Bitterstoff sättigen, einen Schuss Wasser hinzufügen.
    Vermischen, bis sie sich auflösen.
    `,
    },
    {
      language: "IT",
      flag: "https://www.thecocktaildb.com/images/icons/flags/shiny/32/it.png",
      text: `Mettere la zolletta di zucchero nel bicchiere vecchio stile e saturare con il bitter, aggiungere un goccio di acqua naturale.
    Pestare finché non si scioglie.
    Riempi il bicchiere con cubetti di ghiaccio e aggiungi il whisky.
    Guarnire con una scorza d'arancia e una ciliegina al maraschino.`,
    },
    {
      language: "FR",
      flag: "https://www.thecocktaildb.com/images/icons/flags/shiny/32/fr.png",
      text: `Placer le morceau de sucre dans un verre à l'ancienne et saturer d'amers, ajouter un trait d'eau plate.
    Mélanger jusqu'à dissolution.
    Remplir le verre de glaçons et ajouter le whisky.
    Garnir d'un zeste d'orange et d'une cerise à cocktail.`,
    },
    {
      language: "ES",
      flag: "https://www.thecocktaildb.com/images/icons/flags/shiny/32/es.png",
      text: `Coloque el terrón de azúcar en un vaso old fashioned y sature con amargo, agregue una pizca de agua corriente.
    Triture hasta que se disuelva.
    Llene el vaso con cubitos de hielo y agregue el whisky.
    Adorne con twist de naranja y una cereza de cóctel.`,
    },
  ],
};

// create a function called "renderHeaderImage(cocktailData)" where you render the image and the icons up top -> return div which contains all the items
// create a function called "renderCocktailDetails()" where you render the title and the tags  -> return div which contains all the items
// create a function called "renderTagsList()" where you render the tags list  -> return div which contains all the items
// create a function called "renderTag(tag)" where you render the tag  -> return div which contains all the items
// create a function called "renderIngredientsList()" where you render the ingredients  -> return div which contains all the items
// create a function called "renderIngredient(ingredient)" where you render the ingredients  -> return div which contains all the items
// create a function called "renderInstructionsList()" where you render the instructions  -> return div which contains all the items
// create a function called "renderLanguageFlag(language)" where you render the language flag  -> return div which contains all the items

window.addEventListener("load", loadDetailsPage);
function loadDetailsPage() {
  const body = document.querySelector("body");
  const divImg = renderHeaderImage(data.image);
  body.appendChild(divImg);

  const frame = renderCocktailDetails();
  body.appendChild(frame);
}

//create a function for page titles <h2>

function createTitles(content, className) {
  const titles = document.createElement("h2");
  titles.textContent = content;
  titles.className = className;

  return titles;
}

function renderHeaderImage(image) {
  const divImg = document.createElement("div");
  divImg.className = "divImg";
  const imageDiv = document.createElement("img");
  imageDiv.src = image;

  const divIcons = document.createElement("div");
  divIcons.className = "divIcons";

  const iconChevron = renderIcon("chevron-back-outline", "iconChevron");

  const iconHeart = renderIcon("heart", "iconHeart");

  divIcons.appendChild(iconChevron);
  divIcons.appendChild(iconHeart);
  divImg.appendChild(divIcons);
  divImg.appendChild(imageDiv);
  return divImg;
}

function renderCocktailDetails() {
  const frame = document.createElement("div");
  frame.className = "frame";
  const divTitle = document.createElement("div");
  divTitle.className = "divTitle";
  const drinkTitle = document.createElement("h1");
  drinkTitle.textContent = data.name;
  divTitle.appendChild(drinkTitle);
  frame.appendChild(divTitle);
  const divDetails = renderTagsList();
  frame.appendChild(divDetails);

  const titleMix = createTitles("ingredients", "title-style");
  frame.appendChild(titleMix);

  const divContainAll = renderIngredientsList();
  frame.appendChild(divContainAll);

  const titleInstruct = createTitles("instructions", "title-style");
  frame.appendChild(titleInstruct);

  const divParentMain = document.createElement("div");
  divParentMain.className = "div-parent-main";
  const divInstructions = renderInstructionList();
  divParentMain.appendChild(divInstructions);
  frame.appendChild(divParentMain);

  const textInstructions = document.createElement("div");
  textInstructions.className = "style-instructions";
  textInstructions.textContent = data.instructions[0].text; // adaugare provizorie.
  divInstructions.appendChild(textInstructions);

  //bottom text
  const divBottomText = document.createElement("div");
  const glass = createTitles("glass", "glass");
  divBottomText.appendChild(glass);

  const serveManner = document.createElement("p");
  serveManner.textContent = "Serve: Old-fashioned glass";
  divBottomText.appendChild(serveManner);
  divInstructions.appendChild(divBottomText);

  //bottom page icons
  const divNavigation = document.createElement("div");
  divNavigation.className = "flex-nav";
  const divPrevious = document.createElement("div");
  const divNext = document.createElement("div");
  //create icons
  const previousIcon = renderIcon("chevron-back-outline", "bottom-nav");
  const nextIcon = renderIcon("chevron-forward-outline", "bottom-nav");

  //create text for icons
  const previousText = renderTextIcon("previous", "bottom-nav");
  const nextText = renderTextIcon("next", "bottom-nav");

  divPrevious.appendChild(previousIcon);
  divPrevious.appendChild(previousText);
  divPrevious.className = "previous";
  divNext.appendChild(nextText);
  divNext.appendChild(nextIcon);
  divNext.className = "next";
  divNavigation.appendChild(divPrevious);
  divNavigation.appendChild(divNext);
  frame.appendChild(divNavigation);
  return frame;
}

// create a function called "renderTagsList()" where you render the tags list  -> return div which contains all the items

function renderTagsList() {
  const divDetails = document.createElement("div");
  divDetails.className = "divDetails";

  let tags = data.tags;
  tags.forEach((tag) => {
    let tagElement = renderTag(tag);
    divDetails.appendChild(tagElement);
  });

  return divDetails;
}

// create a function called "renderTag(tag)" where you render the tag  -> return div which contains all the items

function renderTag(tag) {
  const divItem = document.createElement("div");
  divItem.textContent = tag;
  divItem.className = "divItem";

  return divItem;
}
// create a function called "renderIngredientsList()" where you render the ingredients  -> return div which contains all the items

function renderIngredientsList() {
  const divContainAll = document.createElement("div");
  divContainAll.className = "ingredients";
  let list = data.ingredients;
  list.forEach((ingredient) => {
    let listElement = renderIngredient(ingredient);
    divContainAll.appendChild(listElement);
  });
  return divContainAll;
}

// create a function called "renderIngredient(ingredient)" where you render the ingredients  -> return div which contains all the items

function renderIngredient(ingredient) {
  const divElements = document.createElement("div");
  divElements.className = "flex";
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

//create a function called "renderInstructionsList()" where you render the instructions  -> return div which contains all the items

function renderInstructionList() {
  const divInstructions = document.createElement("div");
  divInstructions.className = "div-main-instruction";
  const divCountryType = document.createElement("div");
  divCountryType.className = "div-country-type";
  let instructionsToDo = data.instructions;
  instructionsToDo.forEach((language) => {
    let divFinal = renderLanguageFlag(language);
    divCountryType.appendChild(divFinal);
    divInstructions.appendChild(divCountryType);
  });
  return divInstructions;
}

/// create a function called "renderLanguageFlag(language)" where you render the language flag  -> return div which contains all the items

function renderLanguageFlag(language) {
  const divFlag = document.createElement("div");
  divFlag.className = "div-flag";
  const imgFlag = document.createElement("img");
  imgFlag.className = "TEST";
  imgFlag.src = language.flag;
  divFlag.appendChild(imgFlag);
  return divFlag;
}

//create a function called renderIcon(iconName, className)

function renderIcon(iconName, className) {
  const iconChevron = document.createElement("ion-icon");
  iconChevron.setAttribute("name", iconName);
  iconChevron.className = className;

  return iconChevron;
}

//Create a function called renderTextIcon(content,className)

function renderTextIcon(content, className) {
  const paragraph = document.createElement("p");
  paragraph.textContent = content;
  paragraph.className = className;

  return paragraph;
}