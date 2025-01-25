const data = [
  {
    id: 1,
    name: "Nike Air Force 1 '07",
    price: 115,
    description: "A classic basketball-inspired sneaker with a durable leather upper, comfortable Air cushioning, and timeless streetwear appeal.",
    image: "./assets/image/nike-air-force-1.webp",
    category: "women's shoes"
  },
  {
    id: 2,
    name: "Nike Air Max 90 Drift",
    price: 160,
    description: "Known for its visible Air unit in the heel, this sneaker delivers lightweight cushioning and a bold, retro design that remains a fan favorite.",
    image: "./assets/image/sticker.webp",
    category: "men's shoes"
  },
  {
    id: 3,
    name: "Air Jordan 1 Low SE 'LNY'",
    price: 125,
    description: "The iconic basketball shoe that started the Jordan brand, featuring premium leather, high-top support, and legendary colorways.",
    image: "./assets/image/sticker.webp",
    category: "women's shoes"
  },
  {
    id: 4,
    name: "Nike Dunk Low Retro",
    price: 115,
    description: "A low-top skate and lifestyle sneaker with a padded collar, durable materials, and vibrant color combinations for everyday wear.",
    image: "./assets/image/sticker.webp",
    category: "men's shoes"
  },
  {
    id: 5,
    name: "Nike InfinityRN 4 By You",
    price: 190,
    description: "Custom Women's Road Running Shoes",
    image: "./assets/image/sticker.webp",
    category: "women's shoes"
  },
  {
    id: 6,
    name: "Nike Vaporfly 3",
    price: 260,
    description: "A lightweight, elite running shoe with ZoomX foam and a carbon fiber plate for maximum energy return and speed.",
    image: "./assets/image/sticker.webp",
    category: "men's shoes"
  },
  {
    id: 7,
    name: "Nike Air Force 1 '07",
    price: 115,
    description: "A vintage-style sneaker with suede and leather overlays, a mid-top cut, and a classic herringbone outsole for traction and style.",
    image: "./assets/image/sticker.webp",
    category: "women's shoes"
  },
  {
    id: 8,
    name: "Nike Air Force 1 '07",
    price: 115,
    description: "A versatile and reliable running shoe with responsive React foam cushioning and a breathable mesh upper for daily training.",
    image: "./assets/image/sticker.webp",
    category: "women's shoes"
  },
  {
    id: 9,
    name: "Nike Air Force 1 '07",
    price: 115,
    description: "A basketball sneaker built for power and agility, featuring a Zoom Air unit, premium materials, and a secure lockdown fit.",
    image: "./assets/image/sticker.webp",
    category: "women's shoes"
  },
  {
    id: 10,
    name: "Nike Air Force 1 '07",
    price: 115,
    description: "A durable and stable training shoe with a grippy outsole, reinforced midfoot, and responsive cushioning for intense workouts and weightlifting.",
    image: "./assets/image/sticker.webp",
    category: "women's shoes"
  },
]
$(document).ready(function () {

  $(".user-items .search-item").click(function () {
    $(".search-box").toggleClass('active');
    $(".search-box .search-input").focus();
  });
  $(".close-button").click(function () {
    $(".search-box").toggleClass('active');
  });

  
  $.each(data, function (index, item) {
    let description = item.description.length > 80 ? item.description.substring(0, 50) + "..." : item.description;
    $(".main-product").append(`
      <div class="box col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
        <div class="cart">
          <div class="image">
            <img src="${item.image}" class="card-img-top" alt="${item.name}">
          </div>
          <div class="card-body">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text">${description}</p>
            <p class="price fw-bold">$${item.price.toFixed(2)}</p>
            <div class="products_star">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <button class="btn-add-to-cart">Add To Cart</button>
          </div>
        </div>
      </div>
    `);
  })
});