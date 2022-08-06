const contentUsers = (root) => {
    const contentUsers = document.createElement('div');
    contentUsers.className = 'content';
    root.appendChild(contentUsers);

    const content_myprofile = document.createElement('div');
    content_myprofile.className = 'content_myprofile';
    content_myprofile.innerHTML = 'My Profile';
    contentUsers.appendChild(content_myprofile);
    //login_windov
    const login_windov = document.createElement('div');
    login_windov.className = 'login_windov';
    contentUsers.appendChild(login_windov);
    //photo
    const photo = document.createElement('div');
    photo.className = 'photo';
    login_windov.appendChild(photo);
    const hedaer_photo = document.createElement('h4')
    hedaer_photo.innerHTML = 'Photo';
    photo.appendChild(hedaer_photo);
    const info_photo = document.createElement('div');
    info_photo.className = 'info_photo';
    login_windov.appendChild(info_photo);

    //user_photo
    const user_photo = document.createElement('img');
    user_photo.className = 'user_photo';
    info_photo.appendChild(user_photo);
    //btn UPLOAD PHOTO
    const btnUploadphoto = document.createElement('button');
    btnUploadphoto.className = 'btnstyle';
    btnUploadphoto.innerHTML = 'UPLOAD PHOTO';
    info_photo.appendChild(btnUploadphoto);
    // btn REMOVE
    const btnremove = document.createElement('button');
    btnremove.className = 'btnremove';
    btnremove.innerHTML = 'REMOVE';
    info_photo.appendChild(btnremove);
    //Personal info
    const userinfo = document.createElement('div');
    userinfo.className = 'userinfo';
    (userinfo);
    login_windov.appendChild(userinfo);
    const infoprofile = document.createElement('h4');
    infoprofile.innerHTML = 'Personal info';
    userinfo.appendChild(infoprofile);
    //form
    const form = document.createElement('div');
    form.className = 'form';
    userinfo.appendChild(form);

    //full name
    const fullname = document.createElement('div');
    fullname.className = 'style';
    fullname.innerText = 'Full Name';
    form.appendChild(fullname);
    //Username inpun
    const username = document.createElement('input');
    username.type = 'text';
    username.placeholder = 'User name';
    form.appendChild(username);

    //fone
    const fone = document.createElement('div');
    fone.className = 'style';
    fone.innerText = 'Phone number';
    form.appendChild(fone);
    //fonenumberinpun
    const fonenumber = document.createElement('input');
    fonenumber.type = 'text';
    fonenumber.placeholder = '+380XXXXXXXXX';
    form.appendChild(fonenumber);

    //mail
    const mail = document.createElement('div');
    mail.className = 'style';
    mail.innerText = 'Email';
    form.appendChild(mail);
    //useremail
    const useremail = document.createElement('input');
    useremail.type = 'text';
    useremail.placeholder = 'steve.jobs@gmail.com';
    form.appendChild(useremail);

    //btn  updateinfo
    const btnupdateinfo = document.createElement('button');
    btnupdateinfo.className = 'btn';
    btnupdateinfo.innerHTML = 'Update Info';
    form.appendChild(btnupdateinfo);



   






}
