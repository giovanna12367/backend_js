// Funções de retotno exigma a
// Claúsula/termo 'return', Isso permite fazer operações
// Sequenciais com o resultado, armanzenar funções em varíaveis
 
function sobraDoSalario(meuSalario){
    const contaDeLuz = 150.0
    const aluguel = 1400.0
    const resto = meuSalario - (contaDeLuz+aluguel)
    return ' O que restou no fim do mês ${resto.toFixed(2).reaplace(',',')}'

}
const minhasSobras = sobraDoSalario(1700.0)
//teste - experimento
console.log(sobraDoSalario(5000.0))