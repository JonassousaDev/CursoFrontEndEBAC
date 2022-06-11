// import months from './months.js'
import imoveis from './imoveis.js'

// Filtra imoveis
const filteredImoveis = imoveis.filter( (imoveis)=> {
    return imoveis.tipo === 'casa'
})
console.log(filteredImoveis)
 let toPrint = ''

filteredImoveis.forEach(tipo => {
   toPrint = tipo.tipo

})

// suites

let sumSuite = filteredImoveis.reduce( (prev, next) => {
    return {suites: prev.suites + next.suites}
})


// soma dos comdominios
let sumCondominios = filteredImoveis.reduce( (prev, next) => {
    return {comdominio: prev.comdominio + next.comdominio}
})

// soma dos vagas
let sumVagas = filteredImoveis.reduce( (prev, next) => {
    return {vagas: prev.vagas + next.vagas}
})


document.getElementById('main').innerHTML = 
    toPrint + 
    '<br> Soma dos comdominio dos imoveis selecionados: ' + 'R$' + sumCondominios.comdominio + 
    '<br> Soma das suites selecionados: ' + sumSuite.suites + ' Suites ' +
    '<br> Soma das vagas selecionados: ' + sumVagas.vagas + ' vagas '