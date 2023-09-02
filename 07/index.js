const email = "luccas@.gmail.com";

const indiceArroba = email.indexOf("@");
let emailValido = false;
let somaArroba = 0;
let somaPonto = 0;

for (let i = 0; i < email.length; i++) {
    if (email[i] === "@") {
        somaArroba += 1
    } else if (email[i] === ".") {
        somaPonto += 1
    }
}

for (let i = 0; i < email.length; i++) {
    if (email[0] === "." || email[email.length - 1] === "." || email[0] === "@" || email[email.length - 1] === "@" || email[indiceArroba + 1] === "." || email[indiceArroba - 1] === ".") {
        emailValido = false;
   } else if (somaArroba === 1 && somaPonto >= 1) {
        emailValido = true;
   }
}


if (emailValido)  {
    console.log("EMAIL VÁLIDO");
} else {
    console.log("EMAIL INVÁLIDO");
}


