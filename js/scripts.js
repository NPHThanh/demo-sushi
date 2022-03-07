const burger = document.querySelector('#burger-icon')
const navMenu = document.querySelector('.burger-menu')
const largeSearch = document.querySelector('#large-search-icon')
const smallSearch = document.querySelector('#small-search-icon')
const largeSearchInput = document.querySelector('#search-box')
const smallSearchInput = document.querySelector('#search-box-mini')
burger.addEventListener("click",()=>{
    navMenu.classList.toggle("active")
})


document.querySelectorAll('burger-menu-list').forEach(
        item =>
            item.addEventListener("click",()=>{
                navMenu.classList.toggle("active")
            })
        
    )


