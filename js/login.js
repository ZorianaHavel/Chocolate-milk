
const login = document.querySelector('[type="submit"]');

const userName = document.querySelector('[type="text"]');
const password = document.querySelector('[type="password"]');

login.addEventListener('click', () => {
    users.forEach(el => {
        if (el.username === userName.value && el.password === password.value) {
            
        }
    });
});


