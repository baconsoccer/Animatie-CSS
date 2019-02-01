const knop = document.getElementById('knop');
let vlak = document.querySelector('.vlak');
let vlak2 = document.querySelector('.vlak2');
let vlak3 = document.querySelector('.vlak3');



const schuif = () => {
    vlak.classList.toggle('vlak--schuif-uit');
    vlak2.classList.toggle('vlak2--schuif-uit');
    vlak3.classList.toggle('vlak3--schuif-uit');
}

knop.addEventListener('click', schuif);