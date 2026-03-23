// Serve para tomada decisão (se/senão)
let idadePessoa = 18

if (idadePessoa > 100){
   console.log("favor apresentar acompanhante")
} else if (idadePessoa >= 17 && idadePessoa <= 100){
   console.log("Pode entrar, seja bem-vindo")
   console.log("festa sugerida > balada!!")
}else {
   console.log("Desculpe, você não idade suficiente para entrar")
}