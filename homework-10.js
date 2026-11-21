import { products, imagePath } from "./products.js";

const productList = document.querySelector("#product-list");
const productTemplate = document.querySelector("#product-template");

// Объект вида: { "Название товара": "Описание товара" }.
const productDescriptions = products.reduce((descriptions, product) => {
  descriptions[product.name] = product.description;
  return descriptions;
}, {});

console.log("Описания товаров:", productDescriptions);

function getProductsCount() {
  const answer = prompt("Сколько карточек отобразить? От 1 до 5");
  const count = Number(answer);

  if (!Number.isInteger(count) || count < 1 || count > 5) {
    alert("Введите целое число от 1 до 5.");
    return getProductsCount();
  }

  return count;
}

function renderProducts(productItems) {
  productList.innerHTML = "";

  productItems.forEach((product) => {
    const productClone = productTemplate.content.cloneNode(true);
    const image = productClone.querySelector(".card__image-item");

    image.src = imagePath + product.image;
    image.alt = product.name;
    productClone.querySelector(".card__skin").textContent = product.skinType;
    productClone.querySelector(".card__title").textContent = product.name;
    productClone.querySelector(".card__description").textContent = product.description;
    const ingredientsList = productClone.querySelector(".card__ingredients");

    product.ingredients.forEach((ingredient) => {
      const ingredientItem = document.createElement("li");
      ingredientItem.textContent = ingredient;
      ingredientsList.append(ingredientItem);
    });
    productClone.querySelector(".card__price-value").textContent = `${product.price.toLocaleString("ru-RU")}₽`;

    productList.append(productClone);
  });
}

const productsCount = getProductsCount();
renderProducts(products.slice(0, productsCount));