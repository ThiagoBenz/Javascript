let tipoDeDado = (dado) => {
    if (typeof dado === "number") {
        return "É um número!";
    } else if (typeof dado === "string") {
        return "É uma string!";
    } else if (typeof dado === "boolean") {
        return "É um booleano!";
    } else if (typeof dado === "function") {
        return "É uma função!";
    } else if (typeof dado === "object") {
        return "É um objeto!";
    } else {
        return "É um tipo não identificado!";
    }
}

console.log(tipoDeDado(10));
console.log(tipoDeDado("10"));
console.log(tipoDeDado(true));
console.log(tipoDeDado(() => {}));
console.log(tipoDeDado({}));
console.log(tipoDeDado([]));