const personagem = document.querySelector('.personagem');
const feno = document.querySelector('.feno');

const jump = () =>{
    personagem.classList.add('jump');

    setTimeout(() =>{
       
        personagem.classList.remove('jump');

    },500);
}

const loop = setInterval(() => {

    const fenoPosition = feno.offsetLeft;
    const personagemPosition = +window.getComputedStyle(personagem).bottom.replace('px', '');
    
    if (fenoPosition <= 120 && fenoPosition >0 && personagemPosition < 80) {

        feno.style.animation = 'none';
        feno.style.left = `${fenoPosition}px`;
    }
}, 10)

document.addEventListener('keydown', jump)