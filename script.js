const products = [
    { id: 1, name: "Smartphone", category: "Electronics", price: "₹15,000" },
    { id: 2, name: "Laptop", category: "Electronics", price: "₹45,000" },
    { id: 3, name: "Headphones", category: "Accessories", price: "₹2,000" },
    { id: 4, name: "Smartwatch", category: "Wearables", price: "₹5,000" },
];

function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    // Show selected page
    document.getElementById(pageId).classList.add('active');
    
    if (pageId === 'products') renderProducts();
}

function renderProducts() {
    const list = document.getElementById('product-list');
    list.innerHTML = products.map(p => `
        <div class="product-item">
            <h3>${p.name}</h3>
            <p>Price: ${p.price}</p>
            <button onclick="viewDetails(${p.id})">View Details</button>
        </div>
    `).join('');
}

function viewDetails(id) {
    const product = products.find(p => p.id === id);
    if (product) {
        document.getElementById('product-detail-content').innerHTML = `
            <p><strong>Name:</strong> ${product.name}</p>
            <p><strong>Category:</strong> ${product.category}</p>
            <p><strong>Price:</strong> ${product.price}</p>
        `;
        showPage('details');
    }
}
