// Header Location Choose
var $ = document.querySelector.bind(document)
var $$ = document.querySelectorAll.bind(document)

var locationSelect = $('.header__location-select-primary')
var locationItem = $$('.header__location-modal-select')

function getLocation() {
    for(var i = 0; i < locationItem.length; i++) {
        locationItem[i].onclick = function() {
            locationSelect.innerHTML = `${this.innerHTML}`
        }
    }
}

getLocation()
 


