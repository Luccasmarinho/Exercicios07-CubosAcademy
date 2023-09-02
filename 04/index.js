let identificador = "12123";
let nome = "AnA cLARa maRiNHo da sIlva olivEIRA";
let email = "      jose@email.com  ";

let identificadorFormatado = identificador.padStart(6, 0);
let emailFormatado = email.trim();
let nomeArray = nome.split(" "); //transformei o nome(string) para um array

let arrayDeNome = [];
for (let i = 0; i < nomeArray.length; i++) {
    const letraInicialMaiuscula = nomeArray[i][0].toUpperCase();  //transformei em maiúsculas todas as iniciais do meu array de nome
    const restoDoNome = nomeArray[i].slice(1).toLowerCase(); //resto do nome sem as iniciais e em minúsculo
    arrayDeNome.push(letraInicialMaiuscula + restoDoNome)
}

const nomeFormatado = arrayDeNome.join(" ");

console.log(identificadorFormatado);
console.log(emailFormatado);
console.log(nomeFormatado);


