const pessoa = {
    nome: 'Danilo',
    idade: 22,
    endereco: {
        rua: 'ABC', 
        numero: 53
    }
}

const {nome, idade} = pessoa
console.log(nome, idade)   


const { nome: n, idade: i } = pessoa
console.log(n, i)


const {sobrenome, bemHumorado = true} = pessoa
console.log(sobrenome, bemHumorado)


const { endereco: { rua, numero, cep } } = pessoa 
console.log(rua, numero, cep)
