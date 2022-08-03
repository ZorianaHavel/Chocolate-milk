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

    const nav_array = [
        {
            fotoElement: 'bx bx-home-alt',
            spanElement: 'links_name',
            text: 'Home'
        },
        {
            iElement: 'bx bx-book-open',
            spanElement: 'links_name',
            text: 'Courses'
        },
        {
            iElement: 'bx bx-user',
            spanElement: 'links_name',
            text: 'Users'
        },
        
    ]

    //user foto
    const img_user =document.createElement('img');
    img_user.className='img_user';
    img_user.img_user='user_one.png';
    header_wrap.appendChild(img_user);






}
