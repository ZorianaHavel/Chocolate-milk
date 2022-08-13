const nav_array = [
    {
        iElement: 'bx bx-home-alt',
        spanElement: 'links_name',
        text: 'Home',
        callback: function (root) {
            contentHome_myvideo_learning(root);
        }
    },
    {
        iElement: 'bx bx-book-open',
        spanElement: 'links_name',
        text: 'Courses',
        callback: function (root) {
            contentCourses_video(root);
        }
    },
    {
        iElement: 'bx bx-party',
        spanElement: 'links_name',
        text: 'New Ivent',
        callback: function (root) {
            new_ivent(root);
        }
    },
    {
        iElement: 'bx bx-heart',
        spanElement: 'links_name',
        text: 'Saved',
        callback: function (root) {
            saved(root);
        }
    },
    {
        iElement: 'bx bx-user',
        spanElement: 'links_name',
        text: 'My Profile',
        callback: function (root) {
            contentUsers(root);
        }
    },
    {
        iElement: 'bx bxl-telegram',
        spanElement: 'links_name',
        text: 'Mail',
        callback: function (root) {

        }
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
    const icon_logo = document.createElement('im');
    icon_logo.className = 'img_logo';
    // icon_logo.icon_logo='img.png';
    icon_logo.className = 'bx bxs-dashboard';
    logo_content.appendChild(icon_logo);
    const logo_name = document.createElement('div');
    logo_name.className = 'logo_name';
    logo_name.innerHTML = 'ChocolateMilk';
    logo_content.appendChild(logo_name);
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
        list.className = el.text;
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

    const naw_list = Array.from(document.querySelectorAll('.naw_list>li'));

    naw_list.forEach(el => {
        el.addEventListener('click', () => {
            cleanContent();
            const element = nav_array.find((obj) => {
                return obj.text === el.className;
            });
            element.callback(root);
        });
    });
}



