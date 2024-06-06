const containerOne = document.querySelector('.hero-section2');
const container = document.querySelector('.hero-section1');
const adjust = document.querySelectorAll('.differ i');

function togglerAdd() {
    containerOne.classList.toggle('active');
    container.classList.toggle('show');
    adjust.forEach((add) => {
        add.classList.toggle('display');
    })
}

const vision = document.querySelectorAll('.mission-container');

vision.forEach((vis => {
    vis.addEventListener('click', () => {
        vision.forEach((vis => {
            vis.classList.remove('open');
        }))
        vis.classList.add('open')
    })
}));

const lining = document.querySelector('#controlling');

function showing(){
    lining.classList.add('shown');
}

function nShowing() {
    lining.classList.remove('shown');
}

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