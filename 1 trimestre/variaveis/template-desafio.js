// crie um perfil profissional que 
// interpole uma frase e um objeto com
// as características do profissional a sua escolha.

//criar um objeto profissional

// criar variavel com interpolação(template)

//imprimir perfilProfissional

const profissional ={
    nome: 'Isabella',
    idade: 28,
    profissão: 'atriz',
    cidade: 'Rio de Janeiro'
    caracteristicas:['criativa',' bilingue','perfeccionista', 'dedicada']
}

const perfilProfissional = `Olá, meu nome é ${profissional.nome}, tenho ${profissional.idade} anos, sou ${profissional.profissão} e moro em ${profissional.cidade}. Minhas características são: ${profissional.caracteristicas.join(', ')}.`
console.log(perfilProfissional)