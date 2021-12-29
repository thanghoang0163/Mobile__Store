var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

var pickupAtTheStore = $('.pick-label');

// Fetch HomePage Mobile 
var buyingAPI = 'http://localhost:3000/cart/1'

function start() {
    getMobile(renderMobile);
    
}

start();

//Get All Products
function getMobile(callback) {
    fetch(buyingAPI)
    .then(function(response) {
        return response.json();
    })
    .then(callback);
}


// Render 
function renderMobile(mobiles) {
    var buyingListPage = $('.selected-product__list');

    var getCartItems = mobiles.cartItems;

    var buyingList = getCartItems.map(function(item) {
        return `
        <li class="selected-product__item">
        <div class="selected-product__img-and-delete">
            <img src="${item.thumbnail}" alt="">
            <div class="deletes-product">
                Xóa sản phẩm
            </div>
        </div>

        <div class="selected-product__name-and-price-and-color-and-quantity">
            <div class="selected-product__name">
             ${item.name}
            </div>
            <div class="selected-product__price">${item.price} đ</div>
            <div class="selected-product__color">
                <span>Màu: </span>
                
            </div>
        </div>

        <div class="selected-product__quantity">
         <div class="decreases-quantity">-</div>
         <div class="quantity">1</div>
         <div class="increases-quantity">+</div>
     </div>
    </li>
        `
    });

    buyingListPage.innerHTML = buyingList.join('');

    // increases and decreases quantity
    var increaseQuantity = $('.increases-quantity');
    var decreaseQuantity = $('.decreases-quantity');
    var quantity = $('.quantity');
    var count = 1;
    
    increaseQuantity.onclick = function() {
        count++;
        quantity.innerHTML = `${count}`;
    }

    decreaseQuantity.onclick = function() {
        if(count == 1) {
            count = 1;
        } else {
            count--;
            quantity.innerHTML = `${count}`;
        }
    }
}


// Number formatting
function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }