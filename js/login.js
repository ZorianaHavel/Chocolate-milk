
const login = (root) => {
    const form = document.createElement('form');
    const h = document.createElement('h1');
    const userName = document.createElement('input');
    const password = document.createElement('input');
    const login = document.createElement('input');

    form.className = 'box';
    // form.classList.add('box')
    root.appendChild(form);

    form.appendChild(h);
    h.innerHTML = 'LOGIN';

    userName.type = 'text';
    userName.placeholder = 'Username';
    form.appendChild(userName);

    password.type = 'password';
    password.placeholder = 'Password';
    form.appendChild(password);

    login.type = 'submit';
    login.value = 'Login';
    form.appendChild(login);

    login.addEventListener('click', () => {
        users.forEach(el => {
            if (el.username === userName.value && el.password === password.value) {
                cleanPage(root);
                header(root);
                navigation(root);
                contentUsers(root);
            }
        });
    });
}

