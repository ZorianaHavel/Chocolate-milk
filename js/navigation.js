const nav_array = [
    {
        iElement: 'bx bx-home-alt',
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
    {
        iElement: 'bx bxl-telegram',
        spanElement: 'links_name',
        text: 'Mail'
    },
    {
        iElement: 'bx bx-party',
        spanElement: 'links_name',
        text: 'New Ivent'
    },
    {
        iElement: 'bx bx-heart',
        spanElement: 'links_name',
        text: 'Saved'
    },

];

const navigation = (root) => {
    const navigation = document.createElement('naw');
    navigation.className = 'navigation';
    root.appendChild(navigation);
    // created navigation_content
    const logo_content = document.createElement('div');
    logo_content.className = 'logo_content';
    navigation.appendChild(logo_content);
    //icon_logo
    const icon_logo = document.createElement('i');
    icon_logo.className = 'bx bxs-dashboard';
    logo_content.appendChild(icon_logo);
    const logo_name = document.createElement('div');
    logo_name.className = 'logo_name';
    logo_name.innerHTML = 'chocolate-milk';
    logo_content.appendChild(logo_name);
    //menu
    const menu = document.createElement('i');
    menu.className = 'bx bx-menu';
    menu.id = 'btn';
    logo_content.appendChild(menu);
    //svg
    // const img_logo_svg = document.createElement('svg');
    // img_logo_svg.innerHTML= 'chocolate-milk'
    // logo.appendChild(img_logo_svg);
    // img_logo.appendChild(img_logo_svg);

    //naw_dashboard
    const nav_dashboard = document.createElement('div');
    nav_dashboard.className = 'naw_dashboard';
    navigation.appendChild(nav_dashboard);
    //naw_dashboard//naw_list
    const nav_list = document.createElement('ul');
    nav_list.className = 'naw_list';
    nav_dashboard.appendChild(nav_list);

    nav_array.forEach(el => {
        // naw_list//li
        const list = document.createElement('li');
        nav_list.appendChild(list);
        //naw_list//li//a
        const link = document.createElement('a');
        link.setAttribute('href', '#');
        list.appendChild(link);
        //list_icon
        const list_icon = document.createElement('i');
        list_icon.className = el.iElement;
        link.appendChild(list_icon);
        //links_name
        const links_name = document.createElement('span');
        links_name.className = el.spanElement;
        links_name.innerHTML = el.text;
        link.appendChild(links_name);
    });

// menu vupluvashka(((
    // const btn = document.querySelector('#btn');
    // btn.onclick=function(){
    //     navigation.classList.add('active')
    // }

    // btn.onclick=function(){
    //     navigation.classList.add('active')
    // }

   

}



