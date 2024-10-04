//// Comentarios em js

let idade = 20
let nome = "Pedro"
let logado = false
 
//Laços if 
if (idade >= 18){
    console.log ("voce é maior de idade")
}
if (nome=="Pedro"){
    console.log ("Especial")}
    else{
        console.log ("Normal")
    }
//loop
let lista = [10,20,30,40]

for (let item of lista){
    console.log("esse é o numero " + item)
}










// array e objetos 

//let ingrediente1 = "agua"
//let ingrediente2 = "massa"
//let ingrediente3 = "corante"

ingredientes = ["agua", "massa", "corante", "açucar"]

// objetos
let personagem = {
    nome: "Cabo",
    nivel: 10,
    forca: 800,
    magia: 200,
    vida: 1000,
    mana: 200
}

//funçao
// Input - Processa - Output

function sum(a, b){
    let resultado = a + b;
    return resultado 
}

let x = sum(3,4)

