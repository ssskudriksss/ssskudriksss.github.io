const navigation = document
    .getElementById('menu_nav');

function toggleNav () {
    navigation
        .classList
        .toggle('show');
}

function closeNav () {
    navigation
        .classList
        .remove('show');
}

window.addEventListener('load', () => {
    const navItems = Array.from(document
        .querySelectorAll('.menu_item a'));

    navItems.forEach(function (i) {
        i.addEventListener('click', closeNav);
    });

    document
        .getElementById('navOpen')
        .addEventListener('click', toggleNav);

    document
        .getElementById('navClose')
        .addEventListener('click', toggleNav);
});