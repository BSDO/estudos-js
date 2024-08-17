const nomes = ['breno','teste']


console.log(nomes)
nomes.map((item) =>{
    console.log(`ola ${item}`)
})

const breno = nomes.find((item) => item === 'teste1')
console.log(breno || 'Nao existe')
nomes.push('teste1')
nomes.push('teste2')
nomes.push('teste3')
nomes.push('teste4')
nomes.push('teste5')
console.log(nomes)


//shift remove o primeiro elemento
console.log('Removendo um item: ',nomes.shift())
//pop o ultimo item da lista
console.log('Removendo ultimo item ',nomes.pop())
// join separa a listar de acordo com parametro que passar em texto
console.log('Removendo ultimo item ',nomes.join('----'))
console.log(nomes)

//split separa um texto em array

var monthString = "Jan,Fev,Mar,Abr,Mai,Jun,Jul,Ago,Set,Out,Nov,Dez";
const teste = monthString.split('')
console.log(teste)