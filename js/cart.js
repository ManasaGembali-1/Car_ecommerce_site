function loadCart() {
  const cartItemsDiv = document.getElementById("cartItems");
  const cartTotalDiv = document.getElementById("cartTotal");
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (cart.length === 0) {
    cartItemsDiv.innerHTML = "<p>Your cart is empty.</p>";
    cartTotalDiv.innerHTML = "";
    return;
  }

  let total = 0;
  cartItemsDiv.innerHTML = "";

  cart.forEach((item, index) => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;

    const itemDiv = document.createElement("div");
    itemDiv.className = "cart-item";
    itemDiv.innerHTML = `
      <img src="${item.image}" alt="${item.name}" width="120"/>
      <div>
        <h3>${item.name}</h3>
        <p>Price: $${item.price.toLocaleString()}</p>
        <p>Quantity: ${item.quantity}</p>
        <p>Total: $${itemTotal.toLocaleString()}</p>
        <button onclick="removeFromCart(${index})">Remove</button>
      </div>
    `;

    cartItemsDiv.appendChild(itemDiv);
  });

  cartTotalDiv.innerHTML = `<h3>Grand Total: $${total.toLocaleString()}</h3>`;
}

function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}

function placeOrder() {
  window.location.href = "order.html";
}

window.onload = loadCart;
