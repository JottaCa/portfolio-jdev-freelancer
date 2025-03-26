const btnBack = document.getElementById('btn-back');
const btnAdvance = document.getElementById('btn-advance');
const projects = document.getElementsByClassName('project-images');
let currentPorject = 0;

btnAdvance.addEventListener('click', () => {
    projects[currentPorject].classList.remove('active');

    if(currentPorject !== 2) {
        currentPorject++;
    } else {
        currentPorject = 0;
    }

    projects[currentPorject].classList.add('active');   
})

btnBack.addEventListener('click', () => {
    projects[currentPorject].classList.remove('active');

    if(currentPorject !== 0) {
        currentPorject--;
    } else {
        currentPorject = projects.length-1;
    }

    projects[currentPorject].classList.add('active');   
})

// function slider() {
//     currentPorject++;
//     console.log('Olá');
    
// }

// setInterval(slider, 3000)