let x = ''
console.log(x)
x = 'oi'

//* DECLARAÇÃO DE FUNÇÃO

// 1 - declara a função
//       nome        string parâmetro
function imprimeTexto(texto){
    console.log(texto)
}

// 2- executa a função (1 ou + vezes)

imprimeTexto('oi')
imprimeTexto('outro texto')


function soma(){
    // const resultado = 2 + 2
    return 2 + 2
}

console.log(soma())

imprimeTexto(soma())