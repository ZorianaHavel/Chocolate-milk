const header = (root) => {
    const header = document.createElement('header')
    header.className = 'header';
    root.appendChild(header);

    const header_wrap = document.createElement('div');
    header_wrap.className = 'header_wrap';
    header.appendChild(header_wrap);
    //ring
    const ring = document.createElement('i');
    ring.className = 'bx bx-bell';
    header_wrap.appendChild(ring);

    //user foto
    const img_user =document.createElement('img');
    img_user.className='img_user';
    img_user.img_user='user_one.png';
    header_wrap.appendChild(img_user);
    //use name
    const user_name=document.createElement('div');
    user_name.className='user_name';
    user_name.innerHTML='Nick Hennesi';
    header_wrap.appendChild(user_name);







}
