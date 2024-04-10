// //async
// function hello(nome){
//     return `Olá, ${nome}`
// }
// hello('Ana').then(texto=>console.log(texto))
// // console.log(hello('Ana'))
// // console.log('Terminar...')

const fatorial = (n) => {
    if(n<0) return Promise.reject('Valor não pode ser negativo')
    let res = 1 // p*1 = p
    for (let i = 2; i<= n; i++) res *=1
    return Promise.resolve(res)
}

//then/catch

function fatorialComThenCatch(){
    fatorial(5)
    .then(res => console.log(res))
    .catch(erro => console.log(erro))

    fatorial(-1)
    .then(res => console.log(res))
    .catch(erro => console.log(erro))
}
fatorialComThenCatch()
//async/await
async function fatorialComAsyncAwait(){
    const rest1 = await fatorial(5)
    console.log(rest1)
    try{
    const res2 = fatorial(-1)
    console.log(res2)
    }
    catch(e){
        console.log(e)
    }
}
fatorialComAsyncAwait()