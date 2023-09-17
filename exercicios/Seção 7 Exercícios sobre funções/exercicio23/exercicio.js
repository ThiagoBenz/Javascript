let text = (string) => {
    if(string.length > 10) {
        return "Texto muito longo";
    } else {
        return "Texto dentro do limite";
    }
}

console.log(text("Thiago"));
console.log(text("Texto muito longo"));