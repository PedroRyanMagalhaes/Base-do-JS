function aviso(){
    alert("CURIOSO")
}

let botao = document.querySelector("#botao")

botao.addEventListener("mouseover",() =>(
    aviso()
))

let usdInput = document.querySelector("#usd")
let brlInput = document.querySelector("#brl")

usdInput.addEventListener("keyup", () =>{
    console.log("apertou no campo usd")
})
brlInput.addEventListener("keyup", () =>{
    console.log("apertou no campo brl")
})
