document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) {
            navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
        } else {
            navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
        }
    });

    const navLinks = navbar.getElementsByTagName('a');

    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener('mouseover', function () {
            navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
        });

        navLinks[i].addEventListener('mouseout', function () {
            if (window.scrollY > 100) {
                navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
            } else {
                navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
            }
        });
    }
});