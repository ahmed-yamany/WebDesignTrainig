const selectElement = (s) => document.querySelector(s);
// open
selectElement('.open').addEventListener('click', () => {
    selectElement('.nav-right-list').classList.add('active');
});

selectElement('.close').addEventListener('click', () => {
    selectElement('.nav-right-list').classList.remove('active');
});