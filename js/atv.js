let nome = "Ana";
let idade = 17;
let curso = "Informática";
//document.body.innerHTML = `<p>Meu nome é <b>${nome}</b> tenho ${idade} anos e estudo ${curso}</p>`;

//Verificar dia
let dia = 3
switch(dia){
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda");
        break;
    case 3:
        console.log("Terça");
        break;
    case 4:
        console.log("Quarta");
        break;
    case 5:
        console.log("Quinta");
        break;
    case 6:
        console.log("Sexta");
        break;
    case 7:
        console.log("Sabádo");
        break;
    default:
        console.error("Dia é inválido")
}

//Verificar idade

idade = 18
if(idade<12){
    console.log("É criança");
}else if(idade<18){
    console.log("É adolescente");
}else{
    console.log("É adulto")
}

//Verficar nota

let nota = 3
if(nota < 6){
    console.log("Reprovado");
}else if(nota < 7){
    console.log("Ragular");
}else if(nota < 9){
    
}else{
    console.log("Excelente");
}

console.clear();

for(let i= 0; i < 10; i++){
    console.log(`Contando ${i} segundos`);
}
//while
console.clear();
let j=10
while(j>=0){
    console.log(`Contando ${j} segundos`);
    j--
}

//for

for(i = 1; i <= 100; i++){
    console.log(i);
}

//media
console.clear();
let nota1 = 10
let nota2 = 3
function media(nota1,nota2){
    return((nota1+nota2)/2)
}

//Soma
let soma = (a,b) => {return a+b}
console.log(`Soma ${soma(10,20)}`)