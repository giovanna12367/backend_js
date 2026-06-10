// Crie um array que contenha 3 frutas
// Adicione 4 frutas com o metodo .push(<nomeFruta>)
// remova 1 fruta ccom .pop()
// faça um loop for que remova todas as frutas
// verifique, se todas as frutas foram removidas
// imprima, "Nenhuma fruta encontrada"
const frutas = ['banana', 'manga','caja']
console.log(frutas)
frutas.push('caqui')
frutas.push('maracuja')
frutas.push('melancia')
frutas.push('mamão')
console.log(frutas)
for (const fruta of frutas)
    // console.log(frutas)
    console.log(frutas.length) // comprimento desse array
while (frutas.length > 0) {
    frutas.pop()
    if(frutas.length == 0){
        console.log("Não há frutas para vender!!!")
    }
}
console.log(frutas)
console.log(frutas.length)
    
