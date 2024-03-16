const API__URL = "https://dummyjson.com/products";

const productImage = document.querySelector(".product__img");

async function fetchSingleUser(api) {
  let params = new URLSearchParams(window.location.search);
  let id = params.get("id");

  let data = await fetch(`${api}/${id}`);
  data
    .json()
    .then((res) => singleUser(res))
    .catch((err) => console.log(err));
}

fetchSingleUser(API__URL);

function singleUser({ images }) {
  productImage.src = images[0];
}
