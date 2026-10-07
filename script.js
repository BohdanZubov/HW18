// const { createElement } = require("react");

// const categories = document.querySelectorAll("#categories .item");

// console.log(`У списку ${categories.length} категорії`);

// for (const category of categories) {
//   const title = category.querySelector("h2").textContent;
//   const items = category.querySelectorAll("li").length;

//   console.log(`Категорія: ${title}`);
//   console.log(`Кількість ${items}`);
// }

const ingredients = [
  "Картопля",
  "Гриби",
  "Часник",
  "Помідори",
  "Зелень",
  "Приправи",
];

const list = document.querySelector("#ingredients");

const elements = ingredients.map((ingridient) => {
  const item = document.createElement("li");
  item.textContent = ingridient;

  return item;
});

list.append(...elements);

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryList = document.querySelector("#gallery");

galleryList.style.cssText =
  "display: flex; flex-wrap: wrap; gap: 16px; list-style: none; padding: 0;";

const pluck = images
  .map(
    (img) =>
      `<li><img src="${img.url}" alt="${img.alt}" style="width: 360px; height: 240px; object-fit: cover;"></li>`,
  )
  .join("");

galleryList.insertAdjacentHTML("beforeend", pluck);


const span = document.querySelector("#value")

const decrementBtn = document.querySelector('[data-action = "decrement"]')
const incrementBtn = document.querySelector('[data-action = "increment"]')

let counterValue = 0

function decrement() {
  counterValue -= 1 
  span.textContent = counterValue
}

decrementBtn.addEventListener("click", decrement)

function increment() {
  counterValue += 1
  span.textContent = counterValue
}

incrementBtn.addEventListener('click', increment)
