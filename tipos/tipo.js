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
//alias
// type funcionario = {
//     supervisores: string[],
//     baterPonto: (horas: number) => string
// }
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
var funcionario2 = {
    supervisores: ['Bia', 'Carlos'],
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
//union types
var nota = 10;
console.log("Minha nota \u00E9 " + nota + "!");
nota = '10';
console.log("Minha nota \u00E9 " + nota + "!");
//Checando tipos
var valor = 10;
if (typeof valor === "number") {
    console.log("é um valor number");
}
else {
    console.log((typeof valor));
}
//tipo never 
function falha(msg) {
    throw new Error(msg);
}
var produto = {
    nome: 'Sabão',
    preco: 4,
    validarProduto: function () {
        if (!this.nome || this.nome.trim().length === 0) {
            falha("Precisa ter um nome");
        }
        if (this.preco <= 0) {
            falha("Preço inválido");
        }
    }
};
produto.validarProduto();
//valores opcionais
var altura = 12;
var alturaOpcional = 12;
alturaOpcional = null;
var contato1 = {
    nome: 'Fulano',
    tel1: '4546446',
    tel2: null
};
console.log(contato1.nome);
console.log(contato1.tel1);
console.log(contato1.tel2);
// let podeSerNulo: null = null //nao faz sentido deixar valor padrao nulo
var podeSerNulo = null; //nao faz sentido deixar valor padrao nulo
podeSerNulo = 12;
console.log(podeSerNulo);
podeSerNulo = 'abc';
console.log(podeSerNulo);
var contaBancaria = {
    saldo: 3456,
    depositar: function (valor) {
        this.saldo += valor;
    }
};
var correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['5466546546', '456465465']
};
correntista.contaBancaria.depositar(3000);
console.log(correntista);
//# sourceMappingURL=tipo.js.map