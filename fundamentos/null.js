/* 
    null vs undefined

    atribuição por valor -> variaveis do tipo primitivo fazem copia por valor semdo assim,
    cada variavel tem uma copia do valor independentemente.

    atribuição por referência -> trata de um apontamento entre a referencia do item na memória
    ex : atribuição de valores de um objeto para duas constantes diferentes, ambas teram 
    a mesma refencia por tanto receberão o mesmo elemento.
*/

let valor // não inicializada
console.log(valor)

valor = null // ausencia de valor 
console.log(valor)
//console.log(valor.toString()) // ERROR!

/*
nunca deixar uma variavel como undefined, não é uma boa praticar, 
setar como null sempre que possivel e necessario quando precisar zerar umna variavel
*/

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evitar atribuir undefined
console.log(!!produto.preco)
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)

/*
    uma variavel que esta nula não pode acessar nenhuma função
*/
