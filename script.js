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
    image: "https://www.thecocktaildb.com/images/media/drink/metwgh1606770327.jpg",
    favorite: true,
    name: "Mojito"
}

window.addEventListener("load", renderCard())

function renderCard() {

}