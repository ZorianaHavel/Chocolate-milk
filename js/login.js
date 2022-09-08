
const button = document.querySelector('button');

const userName = document.querySelector('[type="text"]');
const password = document.querySelector('[type="password"]');


function onClick() {
    users.forEach(el => {
        if (el.username === userName.value && el.password === password.value) {
         window.open('index.html'); 
        }
    });
};


