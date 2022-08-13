const cleanPage = (root) => {
    while (root.firstChild) {
        root.removeChild(root.lastChild);
    }
}

const cleanContent=() => {
    const root=document.querySelector('.root');
    const content = root.querySelector('#content');
    if (content != undefined) {
        root.removeChild(content);
    }
}