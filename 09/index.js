const nome = 'Luccas Marinho10';

function geradorDeNick(nome) {
    const qtdCaracteres = 13;
    const nomeSemEspaco = nome.replace(" ", "");
    const nomeFormatado = nomeSemEspaco.slice(0, qtdCaracteres);
    
    let somaEspaco = 0;
    for (let espaco of nome) {
        if (espaco === " ") {
            somaEspaco += 1  
        }
    }
    
    if (somaEspaco > 1) {
        console.log("O nickname não deve conter espaços.");
    } else if(nomeSemEspaco.length >= 0 && nomeSemEspaco.length < 4){
        console.log("Nickname INVÁLIDO! O seu nickname deve conter pelo menos 4 caracteres.");
    } else if (nomeSemEspaco.length >= 4 && nomeSemEspaco.length <= qtdCaracteres){
        console.log(`@${nomeSemEspaco}`);
    } else {
        console.log(`@${nomeFormatado}`);
    }
}

geradorDeNick(nome.toLowerCase());