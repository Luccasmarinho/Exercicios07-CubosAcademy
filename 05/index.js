const numeroCartao = '9689620980730721';

const primeirosDigitos = numeroCartao.slice(0, 4);
const ultimosDigitos = numeroCartao.slice(12).padStart(12, "*");
const numeroFormatado = primeirosDigitos + ultimosDigitos;


if (numeroCartao.length === 16) {
    console.log(numeroFormatado);
} else {
    console.log("Digite um número de cartão válido!")
}
