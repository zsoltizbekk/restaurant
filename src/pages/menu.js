import prosciutto from '../assets/prosciutto.png';
import primavera from '../assets/primavera.png';
import quattrostagioni from '../assets/quattrostagioni.png';

function makeMenuPage(){
    const content = document.querySelector('#content');
    const body = document.querySelector(".body");
    body.innerHTML = "";
 
    const firstFood = document.createElement("div");
    firstFood.className = "food";
    const firstFoodText = document.createElement("div");
    firstFoodText.className = "foodText";
    firstFood.appendChild(firstFoodText);
    const firstFoodName = document.createElement("div");
    firstFoodName.textContent = "PROSCIUTTO"
    firstFoodText.appendChild(firstFoodName);
    const firstFoodDescription = document.createElement("div");
    firstFoodDescription.className = "foodDescription";
    firstFoodDescription.textContent = `Tomato, mozzarella, brie chesse, porcini mushrooms, ham of Parms, rucola`;
    firstFoodText.appendChild(firstFoodDescription);
    const firstFoodImg = document.createElement("img");
    firstFoodImg.src = prosciutto;
    firstFoodImg.className = "foodImg";
    firstFood.appendChild(firstFoodImg);
    body.appendChild(firstFood);

    const secondFood = document.createElement("div");
    secondFood.className = "food";
    const secondFoodText = document.createElement("div");
    secondFoodText.className = "foodText";
    secondFood.appendChild(secondFoodText);
    const secondFoodName = document.createElement("div");
    secondFoodName.textContent = "PRIMAVERA"
    secondFoodText.appendChild(secondFoodName);
    const secondFoodDescription = document.createElement("div");
    secondFoodDescription.className = "foodDescription";
    secondFoodDescription.textContent = `Tomato, mozzarella, rucola, fresh tomato`;
    secondFoodText.appendChild(secondFoodDescription);
    const secondFoodImg = document.createElement("img");
    secondFoodImg.src = primavera;
    secondFoodImg.className = "foodImg";
    secondFood.appendChild(secondFoodImg);
    body.appendChild(secondFood);

    const thirdFood = document.createElement("div");
    thirdFood.className = "food";
    const thirdFoodText = document.createElement("div");
    thirdFoodText.className = "foodTextLast";
    thirdFood.appendChild(thirdFoodText);
    const thirdFoodName = document.createElement("div");
    thirdFoodName.textContent = "QUATTRO STAGIONI"
    thirdFoodText.appendChild(thirdFoodName);
    const thirdFoodDescription = document.createElement("div");
    thirdFoodDescription.className = "foodDescription";
    thirdFoodDescription.textContent = `Tomato, mozzarella, brie chesse, porcini mushrooms, ham of Parms, rucola`;
    thirdFoodText.appendChild(thirdFoodDescription);
    const thirdFoodImg = document.createElement("img");
    thirdFoodImg.src = quattrostagioni;
    thirdFoodImg.className = "foodImg";
    thirdFood.appendChild(thirdFoodImg);
    body.appendChild(thirdFood);

}
export default makeMenuPage;