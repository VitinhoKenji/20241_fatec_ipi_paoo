require('dotenv').config()
const axios = require ('axios')
// const APPID =process.env.APPID
// const Q =process.env.Q
// const UNITS = process.env.UNITS
const {
    APPID,
    Q,
    UNITS,
    IDIOM,
    CNT,
    URL_BASE
} = process.env

const url = `${URL_BASE}?appid=${APPID}&q=${Q}&units=${UNITS}&lang=${IDIOM}&cnt=${CNT}`
const exercicioAsyncAwait = async () => {
    const resultado = await axios.get(url)
    const data = resultado.data
    const list = data.list
    list.forEach(e => {
        console.log(e)
        console.log('******************************')
    })
    list.forEach((e) => {
        console.log(e['main']['temp_min'] <=27 ? e['weather'][0]['description'] : '')
    })
}
exercicioAsyncAwait()
// axios.get(url)
// .then(res => {
//     console.log('data')
//     console.log(res.data)
//     console.log('******************************')
//     return res.data
// })
// .then(outroNome =>{
//     console.log('cnt')
//     console.log(outroNome.cnt)
//     console.log('******************************')
//     return outroNome
// })
// .then(res => {
//     console.log('list')
//     console.log(res.list)
//     console.log('******************************')
//     return res
// })
// .then(res => {
//     console.log('temp min do primeiro')
//     console.log(res.list[0].main['temp_min'])
//     console.log('******************************')
//     return res
// })
// .then(res=> {
//     const list = res['list']
//     for(let previsao of list){
//         const main = previsao.main
//         const temp_min = main.temp_min
//         const temp_max = main.temp_max
//         const humidity = main.humidity
//         console.log(`
//             Temp min: ${temp_min},
//             Temp min: ${temp_max},
//             Temp min: ${humidity}`
//         )
//     }
//     console.log('******************************')
//     return res
// })
// .then(res=> {
//     for(let i=0; i<res.list.length;i++){
//         console.log(`
//         Description: ${res.list[i].weather[0]['description']}`
//         )
//     }
//     console.log('******************************')
//     return res
// })
// .then(res=> {
//     let resultado
//     if (resultado = res.list.find(e=>e.main.feels_like<25))
//         console.log(`Sim: ${resultado.main.feels.like}`)
//     else    
//         console.log('Não tem')
// console.log('******************************')

// })

