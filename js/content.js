const content = (root) => {
    const content = document.createElement('div');
    content.className = 'content';
    root.appendChild(content);

    const content_login=document.createElement('div');
    content_login.className='content_login';
    content_login.innerHTML='My Profile';
    content.appendChild(content_login);
     //login_windov
    const login_windov=document.createElement('div');
    login_windov.className='login_windov';
    content.appendChild(login_windov);
    //photo
    const photo=document.createElement('div');
    photo.className='photo';
    login_windov.appendChild(photo);
    const hedaer_photo=document.createElement('h4')
    hedaer_photo.innerHTML='Photo';
    photo.appendChild(hedaer_photo);
    //user_photo
    const user_photo=document.createElement('div');
    user_photo.className='user_photo';
    photo.appendChild(user_photo);
    //btn UPLOAD PHOTO
    const btnUploadphoto=document.createElement('button');
    btnUploadphoto.innerHTML='UPLOAD PHOTO';
    user_photo.appendChild(btnUploadphoto);
    // btn REMOVE
    const btnremove=document.createElement('button');
    btnremove.innerHTML='REMOVE';
    user_photo.appendChild(btnremove);




}
