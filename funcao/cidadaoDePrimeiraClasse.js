// Função em JS é First-Class object
// Higher order function

// Criar de forma literal 
function func1() { }

// Armazenar em uma variavel 
const func2 = function() { }

// Armazenar em uma array
const array = [function (a, b) { return a + b }, func1, func2 ]
console.log(array[0](2, 3))

// Armazenar um atributo em um objeto
const obj = {}
obj.falar = function () { return 'Opa'}
console.log(obj.falar())    

// Passar uma função como param 
function run (fun) {
    fun()
}

run(function () { console.log('executando')})

// uma função pode retornar/conter uma função
function soma(a,b){
    return function (c){
        console.log(a + b + c)
    }
}

soma(2, 3)(4)