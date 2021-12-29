var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

var btnLogin = $('.login-btn1');
var btnRegister = $('.signup-btn2');

var formLoginAndRegister = $('.login-and-register-form');
var password = $('input[type="password"]');
var formLogin = $('#form-login');
var formRegister = $('#form-register');

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
    handleLoginUser();
    handleCreateUser();
}

start();

//Get All Products
function getMobile(callback) {

}

function createUser(data, callback) {
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
    };
    fetch(userAPI, options)
    .then(function(response) {
        response.json();
    })
    .then(callback);
}

function authUser(data, callback){
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
    };
    fetch("http://localhost:3000/auth/login", options)
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        document.cookie = `token=${response.access_token}`;
        window.location.href= 'http://127.0.0.1:5502/index.html';
    })
    .catch(function(error) {

    });
}

// Render 
function renderMobile(mobiles) {

}

function handleLoginUser() {
    formLogin.onsubmit = function(e) {
        e.preventDefault();
        var email = $('.login-email').value;
        var password = $('.login-password').value;
        var formData = {
            email: email,
            password: password
        }
        authUser(formData);
    }
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