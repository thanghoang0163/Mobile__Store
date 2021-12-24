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
    

}


// Number formatting
function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }