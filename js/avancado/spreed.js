// Spreed

// const arr1 = [1,2,3,4,5]
// const arr2 = [6,7,8,9,10]

// const resul = [...arr1,...arr2]
// console.log(resul)

// const pessoa = {
//     nome : 'Bewno',
//     idade : 20,
//     profissao : 'Back-end'
// }

// const breno ={
//     ...pessoa,
//     salario : 220.00,
//     experienca : 2
// }

// console.log(breno)



//Rest Operator

function ListaNome(...nomes){
    const valor = Math.floor(Math.random(nomes) * nomes.length)
    console.log(`${valor},bem vindo.`)
    console.log(`${nomes[valor]}`)

}

const nome = ListaNome(1,3,4,5,7,8,9,12,12,5,7)
console.log(nome)