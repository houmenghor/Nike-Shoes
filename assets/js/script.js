const products = [
  {
    id: 1,
    name: "Nike Air Force 1 '07",
    price: 115,
    description: "A classic basketball-inspired sneaker with a durable leather upper, comfortable Air cushioning, and timeless streetwear appeal.",
    image: "./assets/images/nike-air-force-1.webp",
    category: "women's shoes"
  },
  {
    id: 2,
    name: "Nike Air Max 90 Drift",
    price: 160,
    description: "Known for its visible Air unit in the heel, this sneaker delivers lightweight cushioning and a bold, retro design that remains a fan favorite.",
    image: "./assets/images/Nike Air Max 90 Drift.webp",
    category: "men's shoes"
  },
  {
    id: 3,
    name: "Air Jordan 1 Low SE",
    price: 125,
    description: "The iconic basketball shoe that started the Jordan brand, featuring premium leather, high-top support, and legendary colorways.",
    image: "./assets/images/Air Jordan 1 Low SE.webp",
    category: "women's shoes"
  },
  {
    id: 4,
    name: "Nike Dunk Low Retro",
    price: 115,
    description: "A low-top skate and lifestyle sneaker with a padded collar, durable materials, and vibrant color combinations for everyday wear.",
    image: "./assets/images/Nike Dunk Low Retro.webp",
    category: "men's shoes"
  },
  {
    id: 5,
    name: "Nike InfinityRN",
    price: 190,
    description: "Custom Women's Road Running Shoes",
    image: "./assets/images/Nike InfinityRN 4 By You.webp",
    category: "women's shoes"
  },
  {
    id: 6,
    name: "Nike Vaporfly 3",
    price: 260,
    description: "A lightweight, elite running shoe with ZoomX foam and a carbon fiber plate for maximum energy return and speed.",
    image: "./assets/images/Nike Vaporfly 3.webp",
    category: "men's shoes"
  },
  {
    id: 7,
    name: "Nike Blazer Mid '77",
    price: 73.97,
    description: "A vintage-style sneaker with suede and leather overlays, a mid-top cut, and a classic herringbone outsole for traction and style.",
    image: "./assets/images/Nike Blazer Mid '77.webp",
    category: "women's shoes"
  },
  {
    id: 8,
    name: "Nike Pegasus 41",
    price: 140,
    description: "A versatile and reliable running shoe with responsive React foam cushioning and a breathable mesh upper for daily training.",
    image: "./assets/images/Nike Pegasus 41.webp",
    category: "men's shoes"
  },
  {
    id: 9,
    name: "LeBron XXII",
    price: 200,
    description: "A basketball sneaker built for power and agility, featuring a Zoom Air unit, premium materials, and a secure lockdown fit.",
    image: "./assets/images/LeBron XXII.webp",
    category: "women's shoes"
  },
  {
    id: 10,
    name: "Nike Metcon 9",
    price: 150,
    description: "A durable and stable training shoe with a grippy outsole, reinforced midfoot, and responsive cushioning for intense workouts and weightlifting.",
    image: "./assets/images/Nike Metcon 9.webp",
    category: "women's shoes"
  },
]
const cart = []; // Array to store cart items

// Function to truncate description
function truncateDescription(description, maxLength) {
  return description.length > maxLength
    ? description.substring(0, maxLength) + "..."
    : description;
}

// Function to save cart to localStorage
function saveCartToLocalStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Function to load cart from localStorage
function loadCartFromLocalStorage() {
  const savedCart = localStorage.getItem("cart");
  if (savedCart) {
    return JSON.parse(savedCart);
  }
  return [];
}

// Function to show toast notifications
function showToast(message, type) {
  const icon =
    type === "success"
      ? '<i class="bi bi-check-circle-fill text-success me-2"></i>'
      : '<i class="fas fa-trash-alt text-danger me-2"></i>';

  const bgClass = type === "success" ? "bg-light" : "bg-light text-danger";

  const toastHtml = `
    <div class="custom-toast ${bgClass} position-fixed top-0 start-50 translate-middle-x mt-3 p-3 rounded shadow-sm" style="z-index: 1050; min-width: 250px;">
      <div class="d-flex align-items-center">
        ${icon}
        <span class="flex-grow-1">${message}</span>
      </div>
    </div>
  `;

  $("body").append(toastHtml);

  setTimeout(() => {
    $(".custom-toast").fadeOut(500, function () {
      $(this).remove();
    });
  }, 2000);
}


// Function to update the cart UI
function addProductToCart() {
  const listCart = $(".listCart");
  listCart.html(""); // Clear the cart before re-rendering

  if (cart.length === 0) {
    listCart.html(`
      <div class="cart-empty text-center py-5">
        <h3>Your cart is empty</h3>
        <p>Start shopping now.</p>
      </div>
    `);
    $(".quantity").text(0); // Update cart item count to 0
    return;
  }

  let totalAmount = 0;
  let totalQuantity = 0; // Track total quantity

  cart.forEach((item, index) => {
    const itemTotalPrice = (item.price * item.quantity).toFixed(2);
    totalAmount += parseFloat(itemTotalPrice);
    totalQuantity += item.quantity; // Increment total quantity

    const cartItem = `
      <div class="cart-item d-flex align-items-center justify-content-between mb-3">
        <div class="cart-item-image-wrapper">
          <img src="${item.image}" alt="${item.name}" class="cart-item-image rounded">
        </div>
        <div class="cart-item-details flex-grow-1 mx-3">
          <h6 class="cart-item-name mb-1">${item.name}</h6>
          <p class="cart-item-price text-muted mb-0">Price: $${item.price.toFixed(2)}</p>
          <p class="cart-item-total-price text-muted mb-0">Total: $${itemTotalPrice}</p>
        </div>
        <div class="quantity-control d-flex align-items-center">
          <button class="btn btn-sm btn-danger btn-minus-quantity rounded-circle fs-3" data-index="${index}">-</button>
          <span class="mx-2">${item.quantity}</span>
          <button class="btn btn-sm btn-primary btn-plus-quantity rounded-circle fs-3" data-index="${index}">+</button>
        </div>
      </div>
    `;
    listCart.append(cartItem);
  });

  listCart.append(`
    <div class="cart-footer mt-4 text-center">
      <h6 class="fw-bold">Amount to pay: $${totalAmount.toFixed(2)}</h6>
      <div>
        <div class="row">
          <button class="btn btn-dark btn-checkout">Checkout</button>
          <button class="btn btn-danger btn-remove-all">Remove All</button>
        </div>
      </div>
    </div>
  `);

  $(".quantity").text(totalQuantity); // Update total cart quantity in the UI
}


$(document).ready(function () {
  $(".user-items .search-item").click(function () {
    $(".search-box").toggleClass('active');
    $(".search-box .search-input").focus();
  });
  $(".close-button").click(function () {
    $(".search-box").toggleClass('active');
  });
  // Load cart from localStorage on page load
  const savedCart = loadCartFromLocalStorage();
  cart.push(...savedCart); // Restore cart items
  addProductToCart();

  // Dynamically render products on the page
  const productList = $(".main-product.list");
  products.forEach((product) => {
    const truncatedDescription = truncateDescription(product.description, 50); // Limit to 50 characters
    const productCard = `
      <div class="box col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
        <div class="cart">
          <div class="image">
            <img src="${product.image}" class="card-img-top" alt="${product.name}">
          </div>
          <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">${truncatedDescription}</p>
            <p class="price fw-bold">$${product.price.toFixed(2)}</p>
            <button class="btn-add-to-cart" data-id="${product.id}">Add To Cart</button>
          </div>
        </div>
      </div>
    `;
    productList.append(productCard);
  });

  // Add to cart functionality
  $(".main-product.list").on("click", ".btn-add-to-cart", function () {
    const productId = $(this).data("id");
    const product = products.find((item) => item.id === productId);

    if (product) {
      const existingProduct = cart.find((cartItem) => cartItem.id === product.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        cart.push({ ...product, quantity: 1 }); // Add product with an initial quantity of 1
      }
      saveCartToLocalStorage(); // Save cart to localStorage
      addProductToCart();
      // Show success toast with green icon
      showToast(`Product has been added successfully!`, "success");
    }
  });


  // Increase item quantity
  $(".listCart").on("click", ".btn-plus-quantity", function () {
    const itemIndex = $(this).data("index");
    cart[itemIndex].quantity += 1;
    saveCartToLocalStorage(); // Save updated cart
    addProductToCart(); // Re-render UI, including cart icon
  });

  // Decrease item quantity
  $(".listCart").on("click", ".btn-minus-quantity", function () {
    const itemIndex = $(this).data("index");
    if (cart[itemIndex].quantity > 1) {
      cart[itemIndex].quantity -= 1;
    } else {
      cart.splice(itemIndex, 1)[0]; // Remove item if quantity reaches 0
      showToast(`Product has been deleted successfully!`, "danger");
    }
    saveCartToLocalStorage(); // Save updated cart
    addProductToCart(); // Re-render UI, including cart icon
  });


  // Remove all items from the cart
  $(".listCart").on("click", ".btn-remove-all", function () {
    cart.length = 0; // Clear the cart array
    saveCartToLocalStorage(); // Save updated cart
    addProductToCart();
    showToast("All Products has been deleted successfully!", "danger");
  });
});

function changeImage(small){
  var full = document.getElementById("imagebox")
  full.src = small.src
}



