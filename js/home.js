const API__URL = "https://dummyjson.com/products";
const row = document.querySelector(".row");

async function fetchData(api) {
  let data = await fetch(api);
  data
    .json()
    .then((res) => createCard(res.products))
    .catch((err) => console.log(err));
}
fetchData(API__URL);

function createCard(data) {
  data.forEach(({ rating, price, description, images, id }) => {
    let card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
    <div class="card">
        <img class="card__img" src=${images[0]} alt="" />
        <div class="card__body">
        <div class="card__star">
            <img src="./images/star.png" alt="star" />
            <p>(${rating}) отзывов</p>
        </div>
        <p class="card__text">
            ${description}
        </p>
        <div class="card__price">
            <h2>${price}₽</h2>
            <p>8 000₽</p>
        </div>
        </div>
    </div>
    `;
    card.addEventListener("click", () => singlePage(id));
    row.appendChild(card);
  });
}

function singlePage(id) {
  window.open(`/pages/product.html?id=${id}`, "_self");
}

const loading = document.getElementById("loading");

const loadingDuration = 1000; // 1s

setTimeout(() => {
  loading.classList.add("loading-none");
}, loadingDuration);
