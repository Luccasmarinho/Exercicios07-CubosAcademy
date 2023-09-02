const cpf = "12345678900";
const cnpj = "1234567800000";

const parteUmCPF = cpf.slice(0, 3);
const parteDoisCPF = cpf.slice(3, 6);
const parteTresCPF = cpf.slice(6, 9);
const parteQuatroCPF = cpf.slice(9);
const cpfFormatado = parteUmCPF + parteDoisCPF.padStart(4, ".") + parteTresCPF.padStart(4, ".") + parteQuatroCPF.padStart(3, "-")

if (cpf.length === 11) {
    console.log(cpfFormatado);
} else {
    console.log("CPF inválido!")
}

const parteUmCnpj = cnpj.slice(0, 2);
const parteDoisCnpj = cnpj.slice(2, 5);
const parteTresCnpj = cnpj.slice(5, 8);
const parteQuatroCnpj = cnpj.slice(8, 12);
const parteCincoCnpj = cnpj.slice(12);
const cnpjFormatado = parteUmCnpj + parteDoisCnpj.padStart(4, ".") + parteTresCnpj.padStart(4, ".") + parteQuatroCnpj.padStart(5, "/") + parteCincoCnpj.padStart(3, "-");


if (cnpj.length === 14) {
    console.log(cnpjFormatado);
} else {
    console.log("CNPJ inválido!")
}


