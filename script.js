let cart = [];

// Function to add an item to the cart
function addToCart(productName, productPrice) {
    // Create an object for the product
    const product = { name: productName, price: productPrice };
    // Add the product to the cart array
    cart.push(product);
    // Display a confirmation
    alert(productName + " has been added to your cart.");
    // Update the cart display
    updateCartDisplay();
}

// Function to display cart contents
function updateCartDisplay() {
    // Get the cart display element
    const cartDisplay = document.getElementById('cartDisplay');
    // Clear the previous contents
    cartDisplay.innerHTML = '';
    // Iterate through the cart and create a list item for each product
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item.name + " - $" + item.price;
        cartDisplay.appendChild(listItem);
    });
}

// Function to handle the checkout process
function checkout() {
    // Simple checkout process (e.g., display cart contents in an alert)
    let message = "You have purchased:\n";
    cart.forEach(item => {
        message += item.name + " - $" + item.price + "\n";
    });
    alert(message);
    // Clear the cart
    cart = [];
    // Update the cart display
    updateCartDisplay();
}
