let navbar = document.querySelector('.navbar');

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}


let carts = document.querySelectorAll('.add-cart');

let products = [
    {
        name: 'Burger',
        tag: 'menu-1',
        price: 5,
        inCart: 0
    },
    {
        name: 'Pizza',
        tag: 'menu-2',
        price: 5.00,
        inCart: 0
    },
    {
        name: 'FriedProtatol',
        tag: 'menu-3',
        price: 5.00,
        inCart: 0
    },
    {
        name: 'ChickenNugget',
        tag: 'menu-4',
        price: 5.00,
        inCart: 0
    },
    {
        name: 'CheeseStick',
        tag: 'menu-5',
        price: 2.00,
        inCart: 0
    },
    {
        name: 'Bò Khô',
        tag: 'menu-6',
        price: 3,
        inCart: 0
    },
    {
        name: 'Khô Gà',
        tag: 'menu-7',
        price: 2,
        inCart: 0
    },
    {
        name: 'Que Cay',
        tag: 'menu-8',
        price: 1,
        inCart: 0
    },
    {
        name: 'Mỳ Trộn',
        tag: 'menu-9',
        price: 3,
        inCart: 0
    },
    {
        name: 'Mít Sấy',
        tag: 'menu-10',
        price: 1,
        inCart: 0
    },

];

for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click',() => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}

function onLoadCartNumbers() {
    let productsNumbers = localStorage.getItem('cartNumbers');
    if (productsNumbers) {
        document.querySelector('.fa-shopping-cart span').textContent = productsNumbers;
    }
}

function cartNumbers(product) {
    let productsNumbers = localStorage.getItem('cartNumbers');
    productsNumbers = parseInt(productsNumbers);

    if (productsNumbers) {
        localStorage.setItem('cartNumbers', productsNumbers + 1);
        document.querySelector('.fa-shopping-cart span').textContent = productsNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.fa-shopping-cart span').textContent = 1;
    }

    setItems(product);
}

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if(cartItems != null ) {

        if(cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }

    localStorage.setItem("productsInCart", JSON.stringify (cartItems));
}

function totalCost(product) {

    let cartCost = localStorage.getItem('totalCost');

    if(cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price)
    } else {
        localStorage.setItem("totalCost", product.price);
    }

}

function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".product-items-in-cart");
    let cartCost = localStorage.getItem("totalCost");
    if ( cartItems && productContainer ) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
                <div class="product-items-in-cart">
                    <div class="cart-item">
                        <span class="fas fa-times"></span>
                        <img src="/Assignment/Image/${item.tag}.png">
                        <div class="content">
                            <h3>${item.name}</h3>
                            <div class="quantity">Số lượng: ${item.inCart}</div>
                            <div class="total">Tổng: ${item.price * item.inCart}$</div>
                            <div class="price">$${item.price},00</div>
                        </div>
                    </div>
                </div>
            `;
        });
        productContainer.innerHTML += `
            <div class="total-cost">
                <h4 class="total-cost-title"> Tổng Giá Tiền </h4>
                <h4 class="total-cost-price"> $${cartCost},00 </h4> 
            </div>
        `;  
    }
        
}

onLoadCartNumbers();
displayCart();