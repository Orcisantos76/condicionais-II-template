console.log("28/03")
// Você foi contratado para criar um programa para o Labank. Vamos verificar se o dependente do usuário tem entre 13 e 17 anos para aprovar a solicitação de cartão de crédito vinculado. 
// Faremos de duas formas:
// Caso a idade esteja entre 13 e 17, imprima: 
// “A pessoa dependente já pode ter um cartão de crédito vinculado ao seu!”
// Caso a idade não esteja entre 13 e 17, imprima:
// “Consulte outras possibilidades do Labank.”

//     a. Utilizando ifs aninhados
const idadeDependente = 14//prompt('Idade do dependente')
if (idadeDependente >= 13) {
    if (idadeDependente <= 17) {
        console.log('O dependente pode ter o cartão vinculado ao seu')
    } else {
        console.log("O dependente tem idade maior que 17, consulte opçoes do banco")
    }
} else {
    console.log('O dependente tem menos de 13 anos e ainda nao pode ter o cartao.')

}
//b. Utilizando um operador lógico para unir duas operações relacionais.
if (idadeDependente >= 13 && idadeDependente <= 17) {
    console.log('O dependente pode ter o cartão vinculado ao seu')
} else {
    console.log("O dependente tem idade maior que 17, consulte opçoes do banco")
}

// If ternário
// Agora o Labank pediu para que seja criada uma nova funcionalidade:
// Pergunte ao usuário se ele possui conta
// Caso a resposta seja “sim”, imprima uma mensagem de boas vindas
// Caso seja diferente de “sim”, solicite que o usuário faça um cadastro
// Utilize um if ternário para resolver.

const resposta = 'sim'//prompt('Ja possui conta no nosso banco')
//confere se resposta é === sim, ai será true, executa a primeira parte, se for false executa a segunda parte após os :, pode deixar tudo na mesma linha ou quebrar pra ficar mais visual
resposta.toLowerCase === 'sim' ? // condiçao
    console.log('boas vindas') : // acontece quando a condiçao é verdadeira
    console.log('Abra sua conta')// acontece se for falso


// A Labank gostou muito do seu trabalho e quer implementar um serviço de escolha do cartão pelo ramal telefônico:
// 1 para ‘Fácil’
// 2 para ‘Black’
// 3 /para ‘Platinum’
// 4 para ‘Master Gold’
// E caso não seja nenhuma dessas opções a mensagem deve ser ‘Escolha umas das quatro opções disponíveis’

const respostaTel = Number(prompt("Escolha seu cartao:\n - 1 para 'Cartão facil' \n - 2 para 'Cartão black' \n - 3 para 'Cartão Master Gold'"))
switch (respostaTel) {
    case 1: console.log('Cartão facil'); break
    case 2: console.log('Cartão black'); break
    case 3: console.log('Cartão Master Gold'); break
    default: console.log('Escolha uma das opções')
}
// 1. Crie um código que receba um número por prompt e verifique se esse número é divisível por 2 E por 3. Faça isso:
//  Utilizando ifs aninhados
// Utilizando um operador lógico para unir duas operações relacionais

const n = Number(prompt('Insira um numero: '))
if (n % 2 === 0 && n % 3 === 0) {
    console.log('Sim o número é divisivel por dois e tres')
} else {
    console.log('O numero nao é divisivel por 2 e 3')
}

console.log('-=-=-=-=-=Aninhado-=-=-=-=-=-')

if (n % 2 === 0) {
    if (n % 3 === 0) {
        console.log("O numero é divisivel por 2 e 3")
    } else {
        console.log('O numero é divisivel somente por 2')
    }
} else {
    console.log('Numero nao divisivel por dois ou tres')
}

console.log('-=-=-=-=-=Ternario-=-=-=-=-=-')
// Agora vamos alterar apenas o if em que utilizamos o operador lógico!
// 2. Dentro do if anterior, crie um if ternário que verifica se o número escolhido é 30:
// Caso o número seja 30, imprima no console “UFA, ACERTEI!”
// Caso não seja 30, imprima "Não foi dessa vez :( "

n === 30 ? console.log(`Sim o numero é igual a 30`) : console.log(`O número é ${n} diferente de 30`)

console.log('-=-=-=-=-=-switchCase=-=-=-=-=-')
switch (n) {
    case 6: console.log("Numero é seis"); break
    case 12: console.log('Numero é 12'); break
    case 18: console.log('Numero é 18'); break
    case 24: console.log('Numero é 24'); break
    case 30: console.log('Numero é 30'); break
    default: console.log("Nenhuma das opçoes")

}