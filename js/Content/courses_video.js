const contentCourses_video = (root) => {
    const contentCourses_video = document.createElement('div');
    contentCourses_video.className = 'contentCourses_video';
    contentCourses_video.id = 'content';
    root.appendChild(contentCourses_video);
    //Courses
    const coursesheader = document.createElement('h4');
    coursesheader.innerText = 'Courses';
    contentCourses_video.appendChild(coursesheader);
    //coursesheader
    const courses = document.createElement('div');
    courses.className = 'allcoursesII';
    contentCourses_video.appendChild(courses);
    
    video.forEach(el=> {
        //video
        const courses_video = document.createElement('div');
        courses_video.className ='courses_video';
        courses.appendChild(courses_video);
        //courses_video_list
        const courses_video_list = document.createElement('img');
        courses_video_list.src=el.img;
        courses_video.appendChild(courses_video_list);
        const namecourses = document.createElement('h3');
        namecourses.innerHTML = el.namecourses;
        courses_video.appendChild(namecourses);
        //courses_video_save
        const courses_video_like = document.createElement('i');
        courses_video_like.className = 'bx bx-heart';
        courses_video.appendChild(courses_video_like);
    });

    const coursesList = Array.from(document.querySelectorAll('.courses_video'));

    coursesList.forEach(el=>{
        el.addEventListener('click', ()=>{
            savedList.push(el);
        });
    });
        
 /////////////TO VIDEO//////////////////
//  const courses_video = document.createElement('div');
//  courses_video.className = 'courses_video';
//  courses.appendChild(courses_video);
//  //courses_video_list
//  const courses_video_list = document.createElement('video');
//  courses_video.appendChild(courses_video_list);
//  const courses_video_list_source = document.createElement('source');
//  courses_video_list_source.src = 'el.video';
//  courses_video_list_source.type = 'video/mp4';
//  courses_video_list.appendChild(courses_video_list_source);
//  //namecourses
//  const namecourses = document.createElement('h3');
//  namecourses.innerText = 'el.namecourses';
//  courses_video.appendChild(namecourses);
//  //courses_video_save
//  const courses_video_like = document.createElement('i');
//  courses_video_like.className = 'bx bx-heart';
//  courses_video.appendChild(courses_video_like)
/////////////////////////////////////////////////////

};