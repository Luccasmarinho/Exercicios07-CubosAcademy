const cpf = "123.234.123-09";





function removerPontuacao(numeroDeCpf) {
    const removePrimeiroPonto = numeroDeCpf.replace(".", "")
    let removeSinal = removePrimeiroPonto.replace("-", "")
    let temPonto = removeSinal.includes(".");
    
    for (let i = 0; i < numeroDeCpf.length; i++) {
        if (temPonto) {
            const arrayCPF = removeSinal.split(".")
            const cpfFormatado = arrayCPF[i] + arrayCPF[i + 1]
            return cpfFormatado
        }
    }
}

console.log(removerPontuacao(cpf));