const celular = 9990918088;

function formatarNumero(numero) {
    let numeroFormatado;

    if (numero.length === 10) {
        numeroFormatado = `(${numero.slice(0, 2)}) 9 ${numero.slice(2, 6)}-${numero.slice(6)}`
        console.log(numeroFormatado)
    } else if (numero.length === 8) {
        numeroFormatado = `9 ${numero.slice(0, 4)}-${numero.slice(4)}`;
        console.log(numeroFormatado)
    } else {
        console.log("Número inválido")
    }
}

formatarNumero(String(celular))