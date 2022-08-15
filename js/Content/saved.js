 const saved=(root)=>{
    const contentCourses_seved = document.createElement('div');
    contentCourses_seved.className = 'contentCourses_video';
    contentCourses_seved.id = 'content';
    root.appendChild(contentCourses_seved);
    //My seved Courses
    const coursesheader = document.createElement('h2');
    coursesheader.innerText = 'My seved Courses';
    //like
    contentCourses_seved.appendChild(coursesheader);
    const allcourses=document.createElement('div');
    allcourses.className='allcoursesII';

    savedList.forEach(el=>{
      allcourses.appendChild(el);
    });

    contentCourses_seved.appendChild(allcourses);
 }

// шоб в дужках 'Saved(2)' показувало ск курсів збережено