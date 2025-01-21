const itemExtra = document.getElementById('itemExtra');
const menu = document.getElementById('menuItems');
const exitMenu = document.getElementById('exitMenuIcons');
const exitMenuSvg = document.getElementById('exitMenuSvg');

// MEMBUKA MENU SAAT HAMBURGER MENU DIKLIK
itemExtra.addEventListener('click', () => {
    menu.classList.remove('hide');

    const exitMenuSvg = document.getElementById('exitMenuSvg');
    setTimeout(() => {
        exitMenuSvg.style.transform = 'rotate(90deg)';
    }, 50);
})

// MENUTUP MENU SAAT EXIT ICON DIKLIK
exitMenu.addEventListener('click', () => {
    menu.classList.add('hide');
    exitMenuSvg.style.transform = 'rotate(0deg)';
})

// MENUTUP MENU ITEMS SAAT USER SCROLL
window.addEventListener('scroll', function(){
    menu.classList.add('hide');
    exitMenuSvg.style.transform = 'rotate(0deg)';
})

// MENAMBAHKAN KONDISI MENUTUP MENU ITEM SECARA OTOMATIS SELAMA BUKAN MENU, NAVBAR, YANG DIKLIK
document.addEventListener('click', function(e){
    if(!menu.contains(e.target) && !document.querySelector('nav').contains(e.target)) {
        menu.classList.add('hide');
        exitMenuSvg.style.transform = 'rotate(0deg)';
    }
  }
)