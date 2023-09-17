let autoescola = (idade) => {
    if (idade >= 18) {
        return "Pode entrar na autoescola!";
    } else {
        return "Não pode entrar na autoescola!";
    }
}

console.log(autoescola(18));
console.log(autoescola(15));