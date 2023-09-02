const nomeArquivo = 'Foto da Familia.pdf';

function validarArquivos(nomeArquivo) {
    const indicePonto = nomeArquivo.indexOf(".");
    const copiaArquivo = nomeArquivo.slice(indicePonto + 1);
    
    if (copiaArquivo === "jpg" || copiaArquivo === "jpeg" || copiaArquivo === "gif" || copiaArquivo === "png") {
        return "Arquivo válido"
    } else {
        return "Arquivo inválido"
    }
}

console.log(validarArquivos(nomeArquivo));