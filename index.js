//1. if / else / else if: Crie uma variável idade. Escreva um bloco condicional que imprima
//'Não' se a idade for menor que 16, '16-17' se for entre 16 e 17, e 'Pode' se for maior ou
//igual a 18.
//2. Operador Ternário: Refatore a verificação simples de maioridade (idade >= 18) do
//exercício anterior utilizando o Operador Ternário, salvando o resultado ('Pode' ou 'Não')
//em uma variável mensagem.
//3. switch: Crie uma variável color com o valor 'vermelho'. Use um switch para imprimir
//'Pare' se for vermelho, 'Atenção' se for amarelo e 'Siga' se for verde. Lembre-se do break.
//4. if / else: Escreva um código que receba um número e verifique se ele é par ou ímpar
//utilizando if / else e o operador de módulo (%).
//5. Combinação Condicional: Crie um sistema simples de notas. Use if / else if para
//classificar uma nota de 0 a 10 (A: 9-10, B: 7-8, C: 5-6, D: abaixo de 5).

//-> let idade = 18;

// if (idade < 16) {
//     console.log('Não');
// } else if (idade >= 16 && idade <= 17) {
//     console.log('16-17');
// }   
// else {
//     console.log('Pode');
// }

//2-> let idade = 18;

// let mensagem = idade >= 18 ? 'Pode' : 'Não';
// console.log(mensagem);

//3-> let color = 'vermelho';

// switch (color) {
//     case 'vermelho':
//         console.log('Pare');
//         break;
//     case 'amarelo':
//         console.log('Atenção');
//         break;  
//     case 'verde':
//         console.log('Siga');
//         break;  
//     default:
//         console.log('Cor inválida');
//         break;
// }

//4-> let numero = 5;

// if (numero % 2 === 0) {
//     console.log('O número é par');
// }       
// else {
//     console.log('O número é ímpar');
// }  

//5-> let nota = 8;

// if (nota >= 9 && nota <= 10) {  

//     console.log('A');
// } else if (nota >= 7 && nota < 9) {
//     console.log('B');
// }
// else if (nota >= 5 && nota < 7) {
//     console.log('C');
// }
// else if (nota < 5) {
//     console.log('D');
// }

// 6. for clássico: Escreva um laço for (let i = 0; i < 5; i++) que imprima os números de 0 a 4
// no console.
// 7. for...of: Crie um array frutas = ['uva', 'pera', 'maçã']. Use o laço for...of para imprimir o
// nome de cada fruta individualmente.
// 8. while: Inicialize uma variável j = 0. Crie um laço while (j < 3) que imprima o valor de j e
// incremente a variável a cada iteração.
// 9. for com condição: Usando um laço for de 0 a 20, imprima apenas os números que são
// múltiplos de 3.
// 10. while regressivo: Faça um laço while que crie uma contagem regressiva de 10 até 0.

//6->let i = 0;
// for (i = 0; i < 5; i++) {
//     console.log(i);
// }

//7->let frutas = ['uva', 'pera', 'maçã'];

// for (let fruta of frutas) {
//     console.log(fruta);
// }

//8->let j = 0;
// while (j < 3) {
//     console.log(j);
//     j++;
// }

//9->let k = 0;
// for (k = 0; k <= 20; k++) {
//     if (k % 3 === 0) {
//         console.log(k);
//     }
// }

//10->let count = 10;
// while (count >= 0) {
//     console.log(count);
//     count--;
// }

// 11. map() (Transformação): Dado o array de números [1, 2, 3, 4], use o método .map() para
// criar um novo array contendo o triplo de cada número.
// 12. filter() (Seleção): Dado o array de idades [12, 17, 18, 22, 15, 30], use .filter() para gerar
// um novo array contendo apenas as idades maiores ou iguais a 18.
// 13. reduce() (Acúmulo): Crie um array representando os preços de produtos no carrinho
// [10, 20.5, 30]. Use .reduce() para calcular o valor total da compra.
// 14. forEach() (Execução): Tenha um array de nomes ['Ana', 'Carlos', 'João']. Use .forEach()
// para imprimir a frase "Olá, [nome]!" para cada item do array.
// 15. Encadeamento de Métodos: Crie um array de números de 1 a 10. Primeiro, use .filter()
// para pegar apenas os números pares e, em seguida, encadeie com .map() para
// multiplicar esses pares por 5.


//11->let numeros = [1, 2, 3, 4];

// let triplo = numeros.map(function(numero) {
//     return numero * 3;
// });

// console.log(triplo); 

//12->let idades = [12, 17, 18, 22, 15, 30];

// let maioresDeIdade = idades.filter(function(idade) {
//     return idade >= 18;
// });

//console.log(maioresDeIdade);

//13->let precos = [10, 20.5, 30];

// let total = precos.reduce(function(acumulador, preco) {
//     return acumulador + preco;
// }, 0);

// console.log(total);

//14->let nomes = ['Ana', 'Carlos', 'João'];

// nomes.forEach(function(nome) {
//     console.log(`Olá, ${nome}!`);
// });  

//15->let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let resultado = numeros  
//     .filter(function(numero) {
//         return numero % 2 === 0;
//     })
//     .map(function(numeroPar) {
//         return numeroPar * 5;
//     });

// 16. Spread Operator em Arrays: Crie dois arrays: a = [1, 2] e b = [3, 4]. Use o spread
// operator (...) para combiná-los em um novo array chamado c.
// 17. Desestruturação de Objetos: Crie um objeto user = { nome: 'Ana', idade: 30, cidade:
// 'Rio de Janeiro' }. Use a desestruturação para extrair apenas o nome e a idade para
// variáveis independentes.
// 18. Desestruturação de Arrays: Dado o array cores = ['azul', 'verde', 'amarelo'], use a
// desestruturação de arrays para atribuir 'azul' à variável cor1 e 'verde' à variável cor2.
// 19. Spread Operator em Objetos: Crie um objeto configPadrao = { tema: 'escuro', volume:
// 50 }. Use o spread operator para criar um novo objeto configUsuario que mantenha essas
// configurações, mas adicione idioma: 'pt-BR'.
// 20. Desafio Integrado: Crie um array de objetos alunos, cada um com nome e nota. Use
// .filter() para encontrar alunos com nota maior que 7 e use .map() com desestruturação de
// objeto para retornar apenas um array com os nomes dos aprovados.


//16->let a = [1, 2];
// let b = [3, 4];

// let c = [...a, ...b];

//17->let user = { nome: 'Ana', idade: 30, cidade: 'Rio de Janeiro' };

// let { nome, idade } = user;

//18->let cores = ['azul', 'verde', 'amarelo'];

// let [cor1, cor2] = cores;

//19->let configPadrao = { tema: 'escuro', volume: 50 };

// let configUsuario = { ...configPadrao, idioma: 'pt-BR' };

//20->let alunos = [
//     { nome: 'João', nota: 8 },
//     { nome: 'Maria', nota: 6 },
//     { nome: 'Pedro', nota: 9 },
//     { nome: 'Ana', nota: 5 }
// ];

// let aprovados = alunos
//     .filter(function(aluno) {
//         return aluno.nota > 7;
//     })
// ).map(function({ nome }) {
//     return nome;
// });

// console.log(aprovados);

