const mainMenu = document.querySelector('.mainMenu')
const openMenu = document.querySelector('.openMenu')
const closeMenu = document.querySelector('.closeMenu')
const menuItems = document.querySelector('.menuItems')

openMenu.addEventListener('click', show)
closeMenu.addEventListener('click', close)

// close menu when you click on a menu item 
menuItems.forEach(item => {
    item.addEventListener('click', function() {
        close();
    })
})

function show() {
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}

function close() {
    mainMenu.style.top = '-100%';
}