// 1. Data Source
const products = [
    { id: 1, name: "Smartphone", category: "Electronics", price: "₹15,000" },
    { id: 2, name: "Laptop", category: "Electronics", price: "₹45,000" },
    { id: 3, name: "Headphones", category: "Accessories", price: "₹2,000" },
    { id: 4, name: "Smartwatch", category: "Wearables", price: "₹5,000" },
];

// 2. Function to switch between "pages"
function showPage(pageId) {
    // Hide all sections with the class 'page'
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.style.display = 'none';
    });

    // Show the specific section requested
    document.getElementById(pageId).style.display = 'block';

    // If going to the products page, refresh the list
    if (pageId === 'products') {
        renderProducts();
    }
}

// 3. Function to build the product list HTML
function renderProducts() {
    const listContainer = document.getElementById('product-list');
    listContainer.innerHTML = ''; // Clear current list

    products.forEach(p => {
        const productDiv = document.createElement('div');
        productDiv.style.border = "1px solid #ccc";
        productDiv.style.margin = "10px 0";
        productDiv.style.padding = "10px";

        productDiv.innerHTML = `
            <h3>${p.name}</h3>
            <p>Price: ${p.price}</p>
            <button onclick="viewDetails(${p.id})">View Details</button>
        `;
        listContainer.appendChild(productDiv);
    });
}

// 4. Function to show details of a specific product
function viewDetails(id) {
    const product = products.find(p => p.id === id);
    const detailContent = document.getElementById('product-detail-content');

    if (product) {
        detailContent.innerHTML = `
            <p><strong>Name:</strong> ${product.name}</p>
            <p><strong>Category:</strong> ${product.category}</p>
            <p><strong>Price:</strong> ${product.price}</p>
        `;
        showPage('details');
    }
}

// Initialize the app by showing the home page on load
window.onload = () => showPage('home');
