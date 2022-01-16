const menu = document.getElementById("menu")



console.log(menu)

const handleMenuClick = (e) => {
    const bars = menu.getElementsByTagName("div")

    for (i = 0; i < bars.length; i++){
        bars[i].classList.toggle('icon__menu--x');
    }
}

menu.addEventListener('click', handleMenuClick);

