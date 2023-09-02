const texto = "Aprenda a programar do zero com a Cubos Academy"; 
const textoMinusculo = texto.toLowerCase(); //transformo o texto em minúsculo
const arrayTexto = textoMinusculo.split(" "); // crio um array desse texto e divido a partir dos espaços

//meu índice começa com 1, pois quero pegar a partir do meu 2°  do array
for (let i = 1; i < arrayTexto.length; i++) {  
    arrayTexto.splice(i, 1, "-" + arrayTexto[i]); //a partir do índice, faço uma concatenação do "-" + array na posição do índice
}

const textoFormatado = arrayTexto.join(""); //transformo meu array numa string
console.log(textoFormatado);
