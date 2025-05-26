const products = [
  {
    id: 1,
    name: "BMW X7",
    price: 75000,
    image: "assets/car1.jpg",
    brand: "BMW",
    fuel: "Petrol",
  },
  {
    id: 2,
    name: "Audi Q8",
    price: 85000,
    image: "assets/car2.jpg",
    brand: "Audi",
    fuel: "Diesel",
  },
  {
    id: 3,
    name: "Mercedes GLE",
    price: 95000,
    image: "assets/car3.jpg",
    brand: "Mercedes",
    fuel: "Diesel",
  },
  {
    id: 4,
    name: "Lexus RX",
    price: 68000,
    image: "assets/car4.jpg",
    brand: "Lexus",
    fuel: "Hybrid",
  },
  {
    id: 5,
    name: "Porsche Cayenne",
    price: 105000,
    image: "assets/car5.jpg",
    brand: "Porsche",
    fuel: "Petrol",
  },
  {
    id: 6,
    name: "Range Rover Sport",
    price: 98000,
    image: "assets/car6.jpg",
    brand: "Land Rover",
    fuel: "Diesel",
  },
  {
    id: 7,
    name: "Tesla Model X",
    price: 120000,
    image: "assets/car7.jpg",
    brand: "Tesla",
    fuel: "Electric",
  },
  {
    id: 8,
    name: "Rolls-Royce Ghost",
    price: 320000,
    image: "assets/car8.jpg",
    brand: "Rolls-Royce",
    fuel: "Petrol",
  },
  {
    id: 9,
    name: "Bentley Bentayga",
    price: 190000,
    image: "assets/car9.jpg",
    brand: "Bentley",
    fuel: "Petrol",
  },
  {
    id: 10,
    name: "Jaguar F-Pace",
    price: 85000,
    image: "assets/car10.jpg",
    brand: "Jaguar",
    fuel: "Diesel",
  },
  {
    id: 11,
    name: "Ferrari Purosangue",
    price: 400000,
    image: "assets/car11.jpg",
    brand: "Ferrari",
    fuel: "Petrol",
  },
  {
    id: 12,
    name: "Maserati Levante",
    price: 98000,
    image: "assets/car12.jpg",
    brand: "Maserati",
    fuel: "Petrol",
  },
  {
    id: 13,
    name: "Genesis GV80",
    price: 70000,
    image: "assets/car13.jpg",
    brand: "Genesis",
    fuel: "Petrol",
  },
  {
    id: 14,
    name: "Volvo XC90 Recharge",
    price: 79000,
    image: "assets/car14.jpg",
    brand: "Volvo",
    fuel: "Hybrid",
  },
  {
    id: 15,
    name: "Cadillac Escalade",
    price: 95000,
    image: "assets/car15.jpg",
    brand: "Cadillac",
    fuel: "Petrol",
  },
];

function loadProducts() {
  const container = document.getElementById("productContainer");
  container.innerHTML = "";

  let filtered = [...products];

  const brand = document.getElementById("brandFilter").value;
  const sort = document.getElementById("sortPrice").value;

  if (brand) {
    filtered = filtered.filter((p) => p.brand === brand);
  }

  if (sort === "asc") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === "desc") {
    filtered.sort((a, b) => b.price - a.price);
  }

  filtered.forEach((car) => {
    const card = document.createElement("div");
    card.className = "car-card";
    card.innerHTML = `
      <img src="${car.image}" alt="${car.name}" />
      <h3>${car.name}</h3>
      <p>$${car.price.toLocaleString()}</p>
      <button onclick="addToCart(${car.id})">Add to Cart</button>
    `;
    container.appendChild(card);
  });
}

document.getElementById("brandFilter").addEventListener("change", loadProducts);
document.getElementById("sortPrice").addEventListener("change", loadProducts);

window.onload = loadProducts;

function addToCart(productId) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const product = products.find((p) => p.id === productId);
  const existing = cart.find((item) => item.id === productId);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${product.name} added to cart!`);
}

window.onload = loadProducts;
