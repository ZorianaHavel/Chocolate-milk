const cleanPage = (root) => {
    while (root.firstChild) {
        root.removeChild(root.lastChild);
    }
}