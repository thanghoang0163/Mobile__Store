var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

// Header Location Choose
var locationSelect = $('.header__location-select-primary');
var locationItem = $$('.header__location-modal-select');

function getLocation() {
    for(var i = 0; i < locationItem.length; i++) {
        locationItem[i].onclick = function() {
            locationSelect.innerHTML = `${this.innerHTML}`;
        }
    }
}

getLocation();


//  Slider
window.addEventListener('load', function() {
    const slider = $('.slider');
    const sliderMain = $('.slider__main');
    const nextBtn = $('.slider__next-btn');
    const prevBtn = $('.slider__prev-btn');
    const sliderItems = $$('.slider__item');
    const dotItems = $$('.slider__dot-item')
    const sliderItemWidth = sliderItems[0].offsetWidth;
    const sliderLength = sliderItems.length;
    const sliderInfoItems = $$('.slider-footer__info-item');

    let positionX = 0;
    let index = 0;
    nextBtn.addEventListener('click', function() {
        handleChangeSlide(1);
    });
    
    prevBtn.addEventListener('click', function() {
        handleChangeSlide(-1);
    });

    [...dotItems].forEach((item) => item.addEventListener('click', function(e) {
        [...dotItems].forEach((el) => el.classList.remove('active'));
        e.target.classList.add('active');
        const slideIndex = parseInt(e.target.dataset.index);
        index = slideIndex;
        positionX = -1 * index * sliderItemWidth;
        sliderMain.style = `transform: translateX(${positionX}px)`;

        [...sliderInfoItems].forEach((el) => el.classList.remove('border--actived'));
        sliderInfoItems[index].classList.add('border--actived');
    }));

    [...sliderInfoItems].forEach((item) => item.addEventListener('click', function(e) {
        [...sliderInfoItems].forEach((el) => el.classList.remove('border--actived'));
        e.target.classList.add('border--actived');
        const sliderIndex = parseInt(e.target.dataset.index);
        index = sliderIndex;
        positionX = -1 * index * sliderItemWidth;
        sliderMain.style = `transform: translateX(${positionX}px)`;

        [...dotItems].forEach((el) => el.classList.remove('active'));
        dotItems[index].classList.add('active');
    }));

    function handleChangeSlide(direction) {
        if(direction === 1) {
            index++;
            if(index >= sliderLength) {
                index = sliderLength - 1;
                return;
            }
            positionX -= sliderItemWidth;
            sliderMain.style = `transform: translateX(${positionX}px)`;
            
        } else if(direction === -1) {
            index--;
            if(index < 0) {
                index = 0;
                return;
            }
            positionX += sliderItemWidth;
            sliderMain.style = `transform: translateX(${positionX}px)`;
        }

        [...dotItems].forEach((el) => el.classList.remove('active'));
        dotItems[index].classList.add('active');

        [...sliderInfoItems].forEach((el) => el.classList.remove('border--actived'));
        sliderInfoItems[index].classList.add('border--actived');
        
    }
})

// Slider 3
window.addEventListener('load', function() {
    const slider3 = $('.slider-3');
    const sliderMain3 = $('.slider-3-main');
    const prevBtn3 = $('.slider-3-prev-btn');
    const nextBtn3 = $('.slider-3-next-btn');
    const sliderItems3 = $$('.slider-3-item');
    const sliderItemWidth3 = sliderItems3[0].offsetWidth;
    const sliderLength3 = sliderItems3.length;

    let positionX = 0;
    let index = 0;

    nextBtn3.addEventListener('click', function() {
        handleChangeSlide(1);
        // console.log(index);
        
    });
    prevBtn3.addEventListener('click', function() {
        handleChangeSlide(-1);
        // console.log(index);
    });

    function handleChangeSlide(direction) {
        if(direction === 1) {
            index++;
            if(index > sliderLength3 - 3) {
                index = sliderLength3 - 3;
                return;
            }
            positionX -= sliderItemWidth3 + 20;
            sliderMain3.style = `transform: translateX(${positionX}px)`;
        } 
        else if(direction === -1) {
            index--;
            if(index < 0) {
                index = 0;
                return;
            }
            positionX += sliderItemWidth3 + 20;
            sliderMain3.style = `transform: translateX(${positionX}px)`;
        }
    }
})

// Fetch HomePage Mobile 
var mobileAPI = 'http://localhost:3000/products'

function start() {
    getMobile(renderMobile);
}

start();

//function
function getMobile(callback) {
    fetch(mobileAPI)
    .then(function(response) {
        return response.json();
    })
    .then(callback);
}

function renderMobile(mobiles) {
    var listMobileBlock = $('.mobile-category-list');

    var filterMobile = mobiles.filter(function(mobile) {
        return mobile.id <= 11;
    })

    // console.log(filterMobile);

    var htmls = filterMobile.map(function(mobile) {
        var price = formatNumber(mobile.price);
        var marketPrice = formatNumber(mobile.marketPrice);
        
        return`
            <li class="mobile-category-item category-item">
                <div class="mobile-img category-img">
                    <img src="${mobile.thumbnail}">
                </div>
                <div class="mobile-name category-name">
                    ${mobile.name}
                </div>
                <div class="mobile-new-price category-new-price">
                    <span>${price}</span> ??
                </div>
                <div class="mobile-old-price category-old-price">
                    <span>${marketPrice}</span> ??
                </div>
            </li>
        `
    })

    // console.log(htmls);

    listMobileBlock.innerHTML = htmls.join('');


}

// Number formatting
function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }