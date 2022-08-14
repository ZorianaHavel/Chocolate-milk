const email = (root) => {
    const email = document.createElement('div');
    email.className = 'email';
    email.id = 'content';
    root.appendChild(email);
    //No Mail
    const email_info = document.createElement('h2');
    email_info.innerText = 'My mail';
    email.appendChild(email_info);
    const nomail = document.createElement('h3');
    nomail.innerHTML='No new mail...';
    email.appendChild(nomail);
}