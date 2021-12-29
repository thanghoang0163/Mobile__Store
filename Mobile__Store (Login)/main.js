var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

var btnLogin = $('.login-btn1');
var btnRegister = $('.signup-btn2');
var formLoginAndRegister = $('.login-and-register-form');
var password = $('input[type="password"]');

function register() {
    formLoginAndRegister.style = `transform: translateX(-400px)`;
}

function login() {
    formLoginAndRegister.style = `transform: translateX(0px)`;
}

var userAPI = 'http://localhost:3000/user/register'

// Start
function start() {
    getMobile(renderMobile);

    handleCreateUser();
}

start();

//Get All Products
function getMobile(callback) {
    fetch(userAPI)
    .then(function(response) {
        return response.json();
    })
    .then(callback);
}

function createUser(data, callback) {
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify(data)
    };
    fetch(userAPI, options)
    .then(function(response) {
        response.json();
    })
    .then(callback);
}

// Render 
function renderMobile(mobiles) {

}

function handleCreateUser() {
    btnRegister.onclick = function() {
        var lastName = $('.last-name');
        var firstName = $('.first-name');
        var email = $('.email');
        var password = $('.password');

        var formData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        }

        createUser(formData);
    }
}