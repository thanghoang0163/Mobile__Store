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
    const sliderInfo = $$('.slider-footer__info-item');

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

        [...sliderInfo].forEach((el) => el.classList.remove('border--actived'));
        sliderInfo[index].classList.add('border--actived');
        
    }
})


