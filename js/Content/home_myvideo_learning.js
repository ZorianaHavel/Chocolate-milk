const contentHome_myvideo_learning = (root) => {
    const contentHome_myvideo_learning = document.createElement('div');
    contentHome_myvideo_learning.id = 'content';
    contentHome_myvideo_learning.className = 'contentHome_myvideo_learning';
    root.appendChild(contentHome_myvideo_learning);
    //Courses
    const coursesheader = document.createElement('h2');
    coursesheader.innerText = 'My courses list';
    contentHome_myvideo_learning.appendChild(coursesheader);
    //coursesheader
    const courses = document.createElement('div');
    courses.className = 'allcourses';
    contentHome_myvideo_learning.appendChild(courses);

    home_video.forEach(el => {
        const courses_video = document.createElement('div');
        courses_video.className = 'courses_video';
        courses.appendChild(courses_video);
        //courses_video_list
        const courses_video_list_source = document.createElement('iframe');
        courses_video_list_source.src = el.video;
        courses_video_list_source.width='316';
        courses_video_list_source.height='148';
        courses_video_list_source.allowFullscreen='true';
        // courses_video_list_source.type = el.video_mp4;
        courses_video.appendChild(courses_video_list_source);
        //namecourses
        const namecourses = document.createElement('h3');
        namecourses.innerText = el.namecourses;
        courses_video.appendChild(namecourses);
        //courses_video_save
        const courses_video_like = document.createElement('i');
        courses_video_like.className = 'bx bx-heart';
        courses_video.appendChild(courses_video_like);

    });



};