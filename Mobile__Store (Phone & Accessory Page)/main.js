var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);


// Fetch HomePage Mobile 
var mobileAPI = 'http://localhost:3000/products'

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
    var phoneMobileBtn = $('.mobile-page-btn');
    var getBrandMobileBtn = $$('.brand-btn');
    var accessoryBtn = $('.accessory-page-btn');
    var headerCart = $('.header__cart');

    // Select Brand Button
    // function selectBrandBorder() {
    //     getBrandMobileBtn.forEach((brand) => {
    //         brand.onclick = function() {
    //             $('.brand-btn.bordered').classList.remove('bordered');

    //             this.classList.add('bordered');
    //         }
    //     })
    // }


    // Get All Phone
    listMobile(mobiles);


    // Button Phone Page
    phoneMobileBtn.onclick = function() {
        $('.brand-btn.bordered').classList.remove('bordered');
        getBrandMobileBtn[0].classList.add('bordered');
        $('.brand-of-accessory').style.display = null;
        return listMobile(mobiles);
        
    }

    // Get All Mobile Button
    getBrandMobileBtn[0].onclick = function() {
        $('.brand-btn.bordered').classList.remove('bordered');
        getBrandMobileBtn[0].classList.add('bordered');
        return listMobile(mobiles);
    };
    
    // [...getBrandMobileBtn].forEach((brand) => brand.addEventListener('click', function(e) {
    //     [...getBrandMobileBtn].forEach((el) => el.classList.remove('bordered'));
    //     e.target.classList.add('bordered');
    //     const dataBrand = e.target.dataset.brand;
    //     console.log(dataBrand);
    //     return brandMobile(mobiles, dataBrand);
    // }))
    // Iphone
    getBrandMobileBtn[1].onclick = function() {
        $('.brand-btn.bordered').classList.remove('bordered');
        getBrandMobileBtn[1].classList.add('bordered');
        return brandMobile(mobiles, "iphone");
    }

    // Xiaomi
    getBrandMobileBtn[2].onclick = function() {
        $('.brand-btn.bordered').classList.remove('bordered');
        getBrandMobileBtn[2].classList.add('bordered');
        return brandMobile(mobiles, "xiaomi");
    }

    // samsung
    getBrandMobileBtn[3].onclick = function() {
        $('.brand-btn.bordered').classList.remove('bordered');
        getBrandMobileBtn[3].classList.add('bordered');
        return brandMobile(mobiles, "samsung");
    }

    // Vivo
    getBrandMobileBtn[4].onclick = function() {
        $('.brand-btn.bordered').classList.remove('bordered');
        getBrandMobileBtn[4].classList.add('bordered');
        return brandMobile(mobiles, "vivo");
    }

    // Oppo
    getBrandMobileBtn[5].onclick = function() {
        $('.brand-btn.bordered').classList.remove('bordered');
        getBrandMobileBtn[5].classList.add('bordered');
        return brandMobile(mobiles, "oppo");
    }

    // Oneplus
    getBrandMobileBtn[6].onclick = function() {
        $('.brand-btn.bordered').classList.remove('bordered');
        getBrandMobileBtn[6].classList.add('bordered');
        return brandMobile(mobiles, "oneplus");
    }

    // realme
    getBrandMobileBtn[7].onclick = function() {
        $('.brand-btn.bordered').classList.remove('bordered');
        getBrandMobileBtn[7].classList.add('bordered');
        return brandMobile(mobiles, "realme");
    }

    // Vsmart
    getBrandMobileBtn[8].onclick = function() {
        $('.brand-btn.bordered').classList.remove('bordered');
        getBrandMobileBtn[8].classList.add('bordered');
        return brandMobile(mobiles, "vsmart");
    }

    // Nokia
    getBrandMobileBtn[9].onclick = function() {
        $('.brand-btn.bordered').classList.remove('bordered');
        getBrandMobileBtn[9].classList.add('bordered');
        return brandMobile(mobiles, "nokia");
    }

    // Button Phone Page
    phoneMobileBtn.onclick = function() {
        $('.brand-btn.bordered').classList.remove('bordered');
        getBrandMobileBtn[0].classList.add('bordered');
        return listMobile(mobiles);
        
    }


    // Button Accessory Page
    accessoryBtn.onclick = function() {
        $('.brand-btn.bordered').classList.remove('bordered');
        getBrandMobileBtn[10].classList.add('bordered');
        $('.brand-of-accessory').style.display = "flex";
        return listAccessory(mobiles);
    }

    // Get All Accessory Button
    getBrandMobileBtn[10].onclick = function() {
        $('.brand-btn.bordered').classList.remove('bordered');
        getBrandMobileBtn[10].classList.add('bordered');
        return listAccessory(mobiles);
    };

    // Case
    getBrandMobileBtn[11].onclick = function() {
        $('.brand-btn.bordered').classList.remove('bordered');
        getBrandMobileBtn[11].classList.add('bordered');
        return brandMobile(mobiles, "case");
    }

    // Backup Charger
    getBrandMobileBtn[12].onclick = function() {
        $('.brand-btn.bordered').classList.remove('bordered');
        getBrandMobileBtn[12].classList.add('bordered');
        return brandMobile(mobiles, "backup charger");
    }

    // Adapter
    getBrandMobileBtn[13].onclick = function() {
        $('.brand-btn.bordered').classList.remove('bordered');
        getBrandMobileBtn[13].classList.add('bordered');
        return brandMobile(mobiles, "adapter");
    }

    // Charging Cable
    getBrandMobileBtn[14].onclick = function() {
        $('.brand-btn.bordered').classList.remove('bordered');
        getBrandMobileBtn[14].classList.add('bordered');
        return brandMobile(mobiles, "Charging Cable");
    }

    // Cart
    var btnAddtoCart = $$('.add-to-cart-btn');
    // console.log(btnAddtoCart);
    var amountCart = $('.header__cart-amount');
    var count = 0;
    for(var i = 0; i < btnAddtoCart.length; i++) {
        btnAddtoCart[i].onclick = function() {
        amountCart.style.display = 'block';
        count++;
        amountCart.innerHTML = `${count}`;
        }
    }

    var headerCart = $('.header__cart');
    headerCart.onclick = function() {
        
    }

}


// Phone List Page
function listMobile(mobiles) {
    var mobileListPage = $('.mobile-list');
    
    var filterMobileList = mobiles.filter(function(mobile) {
        return mobile.brand == "iphone" || mobile.brand == "xiaomi" || mobile.brand == "samsung" 
        || mobile.brand == "vivo" || mobile.brand == "oppo" || mobile.brand == "oneplus" 
        || mobile.brand == "realme" || mobile.brand == "vsmart" || mobile.brand == "nokia";
    })

    var mobileList = filterMobileList.map(function(mobile) {
        var doubleId = mobile.id * 2;
        var discount = 100 - ((mobile.price / mobile.marketPrice) * 100);
        var price = formatNumber(mobile.price);
        var marketPrice = formatNumber(mobile.marketPrice);
        var specsMobile = mobile.specifications;
        var memoryMobile = mobile.memories;
        
        var getRam = memoryMobile.map(function(memory) {
            return memory.Ram;
        })
        
        var getRom = memoryMobile.map(function(memory) {
            return memory.Rom;
        })

        var screenSize = specsMobile.filter(function(specs) {
            return specs.id == doubleId;
        })
        
        var getScreenSize = screenSize.map(function(specs) {
            return specs.value;
        })
        
        return `
        <li class="mobile-item">
            <div class="mobile-item-img">
                <img src="${mobile.thumbnail}">
            </div>
            <div class="mobile-item-name">
                <span>${mobile.name}</span>
            </div>
            <div class="mobile-item-specs">
                <div class="mobile-item-specs__screen-size">${getScreenSize}</div>
                <div class="mobile-item-specs__ram">${getRam} GB</div> 
                <div class="mobile-item-specs__rom">${getRom} GB</div>
            </div>
            <div class="mobile-item-price">
                <div class="mobile-item-new-price">
                    <span>${price}</span> đ
                </div>
                <div class="mobile-item-old-price">
                    <span>${marketPrice}</span> đ
                </div>
            </div>
        
            <div class="mobile-item__sale-off">
                Giảm <span>${discount.toFixed()}%</span>
            </div>
            <div class="mobile-item__installment">Trả góp 0%</div>
            <div class="add-to-cart">
                <button class="add-to-cart-btn">Thêm vào giỏ hàng</button>
            </div>
        </li>
        `
    })
    
    mobileListPage.innerHTML = mobileList.join('');

}


// Brand of Phone & Accessory List
function brandMobile(mobiles, brand) {
    var mobileListPage = $('.mobile-list');

    var filterMobileList = mobiles.filter(function(mobile) {
        return mobile.brand == `${brand}`;
    })

    // console.log(filterMobileList)
    var mobileList = filterMobileList.map(function(mobile) {
        var doubleId = mobile.id * 2;
        var discount = 100 - ((mobile.price / mobile.marketPrice) * 100);
        var price = formatNumber(mobile.price);
        var marketPrice = formatNumber(mobile.marketPrice);
        var specsMobile = mobile.specifications;
        var memoryMobile = mobile.memories;
        
        var getRam = memoryMobile.map(function(memory) {
            return memory.Ram;
        })
        
        var getRom = memoryMobile.map(function(memory) {
            return memory.Rom;
        })
        
        var screenSize = specsMobile.filter(function(specs) {
            return specs.id == doubleId;
        })
        
        var getScreenSize = screenSize.map(function(specs) {
            return specs.value;
        })

        return `
            <li class="mobile-item">
                <div class="mobile-item-img">
                    <img src="${mobile.thumbnail}">
                </div>
                <div class="mobile-item-name">
                    <span>${mobile.name}</span>
                </div>
                <div class="mobile-item-specs">
                    <div class="mobile-item-specs__screen-size">${getScreenSize}</div>
                    <div class="mobile-item-specs__ram">${getRam} GB</div> 
                    <div class="mobile-item-specs__rom">${getRom} GB</div>
                </div>
                <div class="mobile-item-price">
                    <div class="mobile-item-new-price">
                        <span>${price}</span> đ
                    </div>
                    <div class="mobile-item-old-price">
                        <span>${marketPrice}</span> đ
                    </div>
                </div>

                <div class="mobile-item__sale-off">
                    Giảm <span>${discount.toFixed()}%</span>
                </div>
                <div class="mobile-item__installment">Trả góp 0%</div>
                <div class="add-to-cart">
                <button class="add-to-cart-btn">Thêm vào giỏ hàng</button>
            </div>
            </li>
        `
    })

    mobileListPage.innerHTML = mobileList.join('');
}


// Accessory List Page
function listAccessory(mobiles) {
    var mobileListPage = $('.mobile-list');
    
    var filterMobileList = mobiles.filter(function(mobile) {
        return mobile.brand == "backup charger" || mobile.brand == "adapter" || mobile.brand == "Charging Cable" 
        || mobile.brand == "case";
    })

    var mobileList = filterMobileList.map(function(mobile) {
        var doubleId = mobile.id * 2;
        var discount = 100 - ((mobile.price / mobile.marketPrice) * 100);
        var price = formatNumber(mobile.price);
        var marketPrice = formatNumber(mobile.marketPrice);
        var specsMobile = mobile.specifications;
        var memoryMobile = mobile.memories;
        
        var specs = specsMobile.filter(function(specs) {
            return specs.id == doubleId;
        })

        var getSpecs = specs.map(function(specs) {
            return specs.value;
        })
        
        return `
        <li class="mobile-item">
            <div class="mobile-item-img">
                <img src="${mobile.thumbnail}">
            </div>
            <div class="mobile-item-name">
                <span>${mobile.name}</span>
            </div>
            <div class="mobile-item-specs">
                <div class="mobile-item-specs__screen-size">${getSpecs}</div>    
            </div>
            <div class="mobile-item-price">
                <div class="mobile-item-new-price">
                    <span>${price}</span> đ
                </div>
                <div class="mobile-item-old-price">
                    <span>${marketPrice}</span> đ
                </div>
            </div>
        
            <div class="mobile-item__sale-off">
                Giảm <span>${discount.toFixed()}%</span>
            </div>
            <div class="mobile-item__installment">Trả góp 0%</div>
            <div class="add-to-cart">
                <button class="add-to-cart-btn">Thêm vào giỏ hàng</button>
            </div>
        </li>
        `
    })
    
    mobileListPage.innerHTML = mobileList.join('');

}

// Number formatting
function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }