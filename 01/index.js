const comentario = "Essa pOrRa é muito perigosa!";
const palavrasProibidas = ["covid", "pandemia", "porra", "caralho", "buceta"]; // array com palavras proibidas
const comentarioMinusculo = comentario.toLowerCase();    //pegando o comentario e tornando ele minusculo
const arrayComentario = comentarioMinusculo.split(" ");    //transformo o comentario já minusculo em um array
let contemComentarioInadequeado = false;    //nao sabemos se contem ainda comentarios inadequeados, por isso começo com false

for (let i = 0; i < arrayComentario.length; i++) {
    for (let j = 0; j < palavrasProibidas.length; j++) {
        if(arrayComentario[i] === palavrasProibidas[j]) {
            contemComentarioInadequeado = true
            console.log("Comentário bloqueado por conter palavras proibidas.");
            break
        }
    } 
}

if(!contemComentarioInadequeado) {
    console.log("Comentário liberado!");
}
