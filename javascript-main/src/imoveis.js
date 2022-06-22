let imoveis = [
    {
        tipo: 'casa',
        bairro: 'botafogo',
        quartos: 2,
        vagas: 2,
        suites: 2,
        comdominio: 100
    },
    {
        tipo: 'casa',
        bairro: 'sao cristovao',
        quartos: 3,
        vagas: 2,
        suites: 1,
        comdominio: 50
    },
    {
        tipo: 'apartamento',
        bairro: 'copacabana',
        quartos: 1,
        vagas: 2,
        suites: 2,
        comdominio: 400
    },
    {
        tipo: 'Quitinete',
        bairro: 'centro',
        quartos: 2,
        vagas: 1,
        suites: 1,
        comdominio: 150
    },
    {
        tipo: 'apartamento',
        bairro: 'ipanema',
        quartos: 3,
        vagas: 2,
        suites: 2,
        comdominio: 600
    }
]
function getImoveis(){
    return imoveis
}

export default getImoveis()