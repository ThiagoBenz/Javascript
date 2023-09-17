const idade = 18;
const cnh = true;

if (idade >= 18 && cnh) {
  console.log("Pode dirigir");
}else if (idade >= 18 && !cnh) {
  console.log("Não pode dirigir, mas pode tirar a CNH");
}else { 
    console.log("Não pode dirigir e nem tirar a CNH");
}   