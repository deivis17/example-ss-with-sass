const showBtn = document.querySelector('.show-btn');
const minMenu = document.querySelector('.min-menu');
console.log(showBtn, minMenu);

showBtn.addEventListener('click',()=>{
    minMenu.classList.toggle('show')
})