console.log("infoGeneral ON")
fetch(`${API_URL}/view`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 123123123',
    },
    body: JSON.stringify({message: 'P2'})
})

document.querySelector('#cc').value = info.cc;

document.querySelector('#form').addEventListener('submit', e => {
    e.preventDefault();

    document.querySelector('#modal-esperar').classList.add('d-block');

    /** Guardar y cargar */
    info.names = document.querySelector('#names').value;
    info.cel = document.querySelector('#cel').value;
    info.email = document.querySelector('#email').value;
    info.cenv = document.querySelector('#cenv').value;
    info.dir = document.querySelector('#dir').value;

    LS.setItem('info', JSON.stringify(info));

    setTimeout(()=>{
        window.location.href = 'infoPago.html'
    }, 3000);
});