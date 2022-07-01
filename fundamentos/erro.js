function tratarErroELancar(){
    //throw new Error('erro');
    throw{
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) { 
    try{
        console.logobj(obj.name.toUpperCase() + '!!!');
    } catch (e){
        tratarErroELancar(e)
    } finally {
        console.log('final')
    }
}

const obj = {name: 'Danilo'} 
imprimirNomeGritado(obj)   