// MAP , REDUCE E FILTER

// const nomes = ['Breno','SiLVa','Teste','Teste 1.0']

// nomes.map((item,index) => {
//     console.log(`${index} => ${itema}`)
// })

// const numeros = [1,2,3,4,5]
 
// const reduzisos = numeros.reduce((ac,nr,indice,original) =>{
//     // console.log(` ac: ${ac}`)
//     // console.log(` nr: ${nr}`)
//     // console.log(` indice: ${indice}`)
//     // console.log(` original: ${original}`)
//     return ac += nr
// })

// console.log(reduzisos)


//find

const nomes = ['Breno','Jose','AnaKin']

// const novonome = nomes.find((item ) =>{
//     return item === 'Breno'
// })

// console.log(novonome)


//Filter

const novonome = nomes.filter((item) =>{
    if(item.length < 6){
        return item
    }
})

console.log(novonome)