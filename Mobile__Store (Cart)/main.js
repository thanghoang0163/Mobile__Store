var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

var pickupAtTheStore = $('.pick-label');

// Fetch HomePage Mobile 
var mobileAPI = 'http://localhost:3000/cart/1'

function start() {
    getMobile(renderMobile);
    
}

start();

//Get All Products
function getMobile(callback) {
    fetch(mobileAPI)
    .then(function(response) {
        return response.json();
    })
    .then(callback);
}


// Render 
function renderMobile(mobiles) {
    var buyingListPage = $('.selected-product__list');
    var count = 0;

    var getCartItems = mobiles.cartItems;

    var getProduct = getCartItems.map(function(item) {
        return item.product;
    })

    var buyingList = getProduct.map(function(item) {
        count += item.price;

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
            <div class="selected-product__price">${formatNumber(item.price)} đ</div>
            <div class="selected-product__color">

                
            </div>
        </div>

        <div class="selected-product__quantity">
         <div class="decreases-quantity">-</div>
         <div class="quantity">1</div>
         <div class="increases-quantity">+</div>
     </div>
    </li>
        `
    })

    buyingListPage.innerHTML = buyingList.join('');

    // Total
    $('.total-price').innerHTML = `${formatNumber(count)} đ`;

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

    var pickupAtTheStore = $('.pick-label');
    if(pickupAtTheStore.checked == true) {
        $('.fill-to-delivery').style.display = 'none';
        // console.log(abc)
    }

    // Click Buy
    var modalCart = $('.modal-cart');
    var clickBuy = $('.click-buy');

    clickBuy.onclick = function() {
        modalCart.classList.add('open');
    }

    modalCart.addEventListener('click', function() {
        modalCart.classList.remove('open');
    })
}


// Number formatting
function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }