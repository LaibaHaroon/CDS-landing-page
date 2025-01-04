// Sample product data
var  products = [
  { name: 'Blue T-Shirts', inStock: true },
  { name: 'Red T-Shirts', inStock: false },
  { name: 'Yellow T-Shirts', inStock: true },
  { name: 'Pink T-Shirts', inStock: false },
  { name: 'Orange T-Shirts', inStock: true },
  
];

// Select DOM elements
var searchInput = document.getElementById('searchInput');
// var searchBtn = document.getElementById('searchBtn');
var productContainer = document.getElementById('productContainer');

// Function to display products based on search query
function displayProducts(found) {
  productContainer.innerHTML = ''; // Clear previous results

  var filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(found.toLowerCase())
  );

  if (filteredProducts.length === 0) {
      productContainer.innerHTML = '<p>No products found</p>';
  } 
  else {
      filteredProducts.forEach(product => {
          var productButton = document.createElement('button');
          productButton.textContent = `${product.name} (${product.inStock ? 'In Stock' : 'Out of Stock'})`;
          productButton.classList.add('product-btn');
          productButton.classList.add(product.inStock ? 'in-stock' : 'out-of-stock');
          productButton.disabled = !product.inStock;
          productContainer.appendChild(productButton);
      });
  }
 }

// Event listeners
searchBtn.addEventListener('click', () => {
  var found = searchInput.value;
  displayProducts(found);
});




