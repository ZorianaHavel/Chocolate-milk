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
        text: 'New Event',
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
            email(root);
        }
    },
];
const root = document.querySelector('.root');
const naw_list = Array.from(document.querySelectorAll('.naw_list>li'));

cleanContent();
contentHome_myvideo_learning(root);

naw_list.forEach(el => {
    el.addEventListener('click', () => {
        cleanContent();
        const element = nav_array.find((obj) => {
            return obj.text === el.className;
        });
        element.callback(root);
    });
});



