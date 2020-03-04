const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        //Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate links
        navLinks.forEach((link, index) => {
            link.style.animation = (link.style.animation) ? '' : `navLinkFade .5s ease forwards ${index / 7 + .8}s`;
        })

        //Burger animation
        burger.classList.toggle('toggle');
    })
}

navSlide();