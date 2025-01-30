const cartButton = document.getElementById('cartButton');
const addToCartButtons = document.querySelectorAll('.add-to-cart');
let cartCount = 0;

// Add event listeners to "Add to Cart" buttons
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        cartCount++;
        cartButton.textContent = `Cart (${cartCount})`;
        alert('Item added to cart!');
    });
});