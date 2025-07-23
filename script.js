function searchProducts() {
  const query = document.getElementById('search').value;
  fetch(`http://your-backend-api.com/search?query=${query}`)
    .then(response => response.json())
    .then(data => displayProducts(data))
    .catch(error => console.error('Error fetching data:', error));
}

function displayProducts(products) {
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = '';  // Clear previous results
  products.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.classList.add('product');
      productDiv.innerHTML = `
          <h3>${product.name}</h3>
          <p>Price: ${product.price}</p>
          <a href="${product.url}" target="_blank">Buy Now</a>
      `;
      resultsDiv.appendChild(productDiv);
  });
}
function searchProducts() {
  // Mock data
  const data = [
      { name: 'Product 1', price: '₹1000', url: 'https://amazon.com/product1' },
      { name: 'Product 2', price: '₹950', url: 'https://flipkart.com/product2' }
  ];
  displayProducts(data);
}
