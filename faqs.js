const navChanger = document.querySelector('.navbar');
const topSection = document.querySelector('.hero');

const navObserver = new IntersectionObserver((entries, observer) => {
    const entry = entries[0];
    if(!entry.isIntersecting) {
        navChanger.classList.add('navbar-changer');
    } else{
        navChanger.classList.remove('navbar-changer');
    }
}, {
    threshold: 0.5
});

navObserver.observe(topSection); 

const goTopBtn = document.querySelector('.scroll-top-btn');

window.addEventListener('scroll', checkHeight);


function checkHeight() {
    if(window.scrollY > 200){
        goTopBtn.classList.add('scroll');
    } else{
        goTopBtn.classList.remove('scroll');
    }
}

goTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0
    })
})