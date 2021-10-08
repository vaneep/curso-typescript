"use strict";
//string
var nome = 'João';
console.log(nome);
// nome = 25
//numbers
var idade = 27;
// idade = 'Ana'
console.log(idade);
//boolean
var possuiHobbies = false;
// possuiHobbies = 1
console.log(possuiHobbies);
//tipos explícitos
var minhaIdade;
minhaIdade = 27;
console.log(typeof minhaIdade);
// minhaIdade = '27'
// console.log(typeof minhaIdade);
//array
var hobbies = ["cozinhar", "Praticar esportes"];
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [100, 200, 300];
// hobbies = 100
console.log(hobbies);
// tuplas
var endereco = ['Av principal', 99, ''];
console.log(endereco);
endereco = ['rua importante', 1260, 'Bloco A'];
console.log(endereco);
// enum
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 10] = "Azul";
    Cor[Cor["Laranja"] = 11] = "Laranja";
    Cor[Cor["Amarelo"] = 12] = "Amarelo";
    Cor[Cor["Vermelho"] = 100] = "Vermelho";
})(Cor || (Cor = {}));
var minhaCor = Cor.Verde;
console.log(minhaCor);
console.log(Cor.Azul);
console.log(Cor.Laranja, Cor.Amarelo);
console.log(Cor.Verde, Cor.Vermelho); //duplicado, é possível
// any
var carro = 'BMW';
console.log(carro);
carro = { marca: 'BMW', ano: 2021 };
console.log(carro);
//funcao
function retornaMeuNome() {
    return nome;
}
console.log(retornaMeuNome());
function digaOi() {
    console.log('Oi');
}
digaOi();
function multiplicar(numA, numB) {
    return numA * numB;
}
console.log(multiplicar(2.8, 5));
//tipo função
var calculo;
// let calculo = digaOi
// calculo()
calculo = multiplicar;
console.log(calculo(5, 6));
//objetos
var usuario = {
    nome: 'João',
    idade: 27
};
console.log(usuario);
// usuario = {}
// usuario = {
//     name: 'Maria',
//     age: 31
// }
usuario = {
    idade: 31,
    nome: 'Maria',
};
console.log(usuario);
//Desafio
// Criar um objeto funcinário com:
//     -array de strings com nomes dos supervisores
//     -função de bater ponto que recebe a hora (num) e retorna uma string
//         -> Ponto normal (<=8)
//         ->Fora do horário (>8)
// EXERCICIO BY VANESSA
var funcionarios = ['Vanessa', 'Ana', 'Júlia'];
function baterPonto(hora) {
    if (hora <= 8) {
        console.log(hora, 'Ponto normal');
    }
    else if (hora > 8) {
        console.log(hora, 'Fora do horário');
    }
}
baterPonto(7);
// EXERCICIO PROFESSOR
var funcionario = {
    supervisores: ['Ana', 'Fernando'],
    baterPontos: function (horario) {
        if (horario <= 8) {
            return 'Ponto normal';
        }
        else {
            return 'Fora do horário';
        }
    }
};
console.log(funcionario.supervisores);
console.log(funcionario.baterPontos(8));
console.log(funcionario.baterPontos(9));
