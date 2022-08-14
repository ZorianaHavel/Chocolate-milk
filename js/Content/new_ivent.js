const new_ivent = (root) => {
    const new_ivent = document.createElement('div');
    new_ivent.className = 'new_ivent';
    new_ivent.id = 'content';
    //No New Ivents
    const ivent_info = document.createElement('h2');
    ivent_info.innerText = 'New Events';
    new_ivent.appendChild(ivent_info);
    const noivent = document.createElement('h3');
    noivent.innerHTML='No new Events...';
    new_ivent.appendChild(noivent);
    root.appendChild(new_ivent);
}