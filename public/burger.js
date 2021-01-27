const display = () => {
    const burger = document.querySelector('.burger')
    const navlinks = document.querySelector('.menu')

    burger.addEventListener('click', () => {

        navlinks.classList.toggle('navlinks-active')

    });
}

display();