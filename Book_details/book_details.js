
document.addEventListener('DOMContentLoaded', function() {
  // Get the "Add to Cart" button element
  var addToCartBtn = document.querySelector('.add-to-cart');
  
  // Add click event listener to the "Add to Cart" button
  addToCartBtn.addEventListener('click', function() {
    window.location.href = '../cart/cart.html'; 
  });
});
