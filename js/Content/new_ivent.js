const new_ivent = (root) => {
    const new_ivent = document.createElement('div');
    new_ivent.className = 'new_ivent';
    new_ivent.id = 'content';
    root.appendChild(new_ivent);
    //No New Ivents
    const ivent_info = document.createElement('h4');
    ivent_info.innerText = 'No New Ivents';
    new_ivent.appendChild(ivent_info);
    const allcourses = document.createElement('div');
    allcourses.className = 'allcoursesII';
}