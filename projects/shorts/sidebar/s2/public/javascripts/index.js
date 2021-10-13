const list = window.document.querySelectorAll('#list');
list.forEach((item) => {
    item.addEventListener('click', function () {
        list.forEach((item) => {
            item.classList.remove('active');
        });
        this.classList.add('active');
    });
});