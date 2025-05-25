const cartDrawer = document.getElementById('cart-drawer-section');
const openCartButton = document.getElementById('add-to-cart-btn');
const closeCartButton = document.getElementById('closecartdrawer-btn');

const incProductButton = document.querySelectorAll('#inc-counter');
const decProductButton = document.querySelectorAll('#dec-counter');
const productcountLabel = document.querySelectorAll('#product-count');

const prevPriceLabel = document.querySelectorAll('#prev-price-lbl');
const newPriceLabel = document.querySelectorAll('#new-price-lbl');

let prev_product_price = 369.99;
let product_price = 249.99;
let product_count = 1;

function storeProductData() {
    localStorage.setItem('product_count', product_count);
}

function updateTotalPrice(newPrice) {
    const totalPriceElements = document.querySelectorAll('#total-price'); // Select all elements with the ID 'total-price'
    
    totalPriceElements.forEach(element => {
        element.textContent = `$${newPrice.toFixed(2)}`; // Update each element's text content
    });

    storeProductData()
}

function updateNewPrice()
{
    let newnewprice = product_count * product_price;
    newPriceLabel.forEach(element => {
        element.textContent = `$${newnewprice.toFixed(2)}`; // Update each element's text content
    });
}

function updatePrevPrice()
{
    let newprevprice = product_count * prev_product_price;
    prevPriceLabel.forEach(element => {
        element.innerHTML = `<s>$${newprevprice.toFixed(2)}</s>`;
    });
}

function loadProductData() {
    const storedCount = localStorage.getItem('product_count');

    if (storedCount) {
        product_count = parseInt(storedCount, 10);
    }

    updateTotalPrice(product_count * product_price);
    updateProductCount();
    updateNewPrice();
    updatePrevPrice();
}

function updateProductCount()
{
    productcountLabel.forEach(element => {
        element.textContent = product_count; // Update each element's text content
    });
}

function incProduct()
{
    product_count = product_count + 1;
    if(product_count > 10)
    {
        product_count = 10;
    }

    updateTotalPrice(product_count * product_price);
    updateProductCount();
    storeProductData();
    updateNewPrice();
    updatePrevPrice();
}

function decProduct()
{
    product_count = product_count - 1;
    if(product_count < 1)
    {
        product_count = 1;
    }

    updateTotalPrice(product_count * product_price);
    updateProductCount()
    storeProductData()
    updateNewPrice();
    updatePrevPrice();
}

function opencartdrawer()
{
    cartDrawer.style.display = 'flex';
}

function closecartdrawer()
{
    cartDrawer.style.display = 'none';
}

// Attach the toggle function to the button click event
openCartButton.addEventListener('click', opencartdrawer);
closeCartButton.addEventListener('click', closecartdrawer);
incProductButton.forEach(button => {
    button.addEventListener('click', incProduct);
});

decProductButton.forEach(button => {
    button.addEventListener('click', decProduct);
});

loadProductData();