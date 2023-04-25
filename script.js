// Pentru obiectul "data" de mai jos, afiseaza din JS cardul urmator din codul de HTML:

//         <div class="card">
//           <div class="card-image">
//             <img src="https://www.thecocktaildb.com/images/media/drink/metwgh1606770327.jpg" alt="mojito-drink">
//           </div>
//           <div class="card-title">
//             <div class="center">
//               <p>mojito</p>
//             </div>
//           </div>
//           <div class="card-icon">
//             <ion-icon name="heart"></ion-icon>
//           </div>
//         </div>

// Task-ul se va realiza prin folosirea functiilor furnizate de JS precum document.getElementById, document.createElement
// Tot codul va fi scris in functia renderCard.
// ID-ul categoriei la care se va adauga cardul este "popularDrinks"

let data = {
  image:
    "https://www.thecocktaildb.com/images/media/drink/metwgh1606770327.jpg",
  favorite: true,
  name: "Mojito",
};

window.addEventListener("load", renderCard());

function renderCard() {
  const test = document.getElementById("popularDrinks");

  const divCard = document.createElement("div");
  divCard.classList.add("card");

  const divCardImage = document.createElement("div");
  divCardImage.classList.add("card-image");

  const image = document.createElement("img");
  image.src =
    "https://www.thecocktaildb.com/images/media/drink/metwgh1606770327.jpg";

  const divCardTitle = document.createElement("div");
  divCardTitle.classList.add("card-title");

  const divCenter = document.createElement("div");
  divCenter.classList.add("center");

  const paragraph = document.createElement("p");
  paragraph.textContent = "mojito";

  const divCardIcon = document.createElement("div");
  divCardIcon.classList.add("card-icon");
  const icon = document.createElement("ion-icon");
  icon.setAttribute("name", "heart");

  divCardIcon.appendChild(icon);
  divCenter.appendChild(paragraph);
  divCardTitle.appendChild(divCenter);
  divCardImage.appendChild(image);
  divCard.appendChild(divCardImage);
  divCard.appendChild(divCardTitle);
  divCard.appendChild(divCardIcon);
  test.appendChild(divCard);
}
