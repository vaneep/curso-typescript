//string
let nome: string = 'João'
console.log(nome)
// nome = 25

//numbers
let idade: number = 27
// idade = 'Ana'
console.log(idade)


//boolean
let possuiHobbies: boolean = false;
// possuiHobbies = 1
console.log(possuiHobbies);

//tipos explícitos
let minhaIdade: number
minhaIdade = 27
console.log(typeof minhaIdade);
// minhaIdade = '27'
// console.log(typeof minhaIdade);

//array
let hobbies: any[] = ["cozinhar", "Praticar esportes"]
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [100, 200, 300]
// hobbies = 100
console.log(hobbies);

// tuplas
let endereco: [string, number, string] = ['Av principal', 99, '']
console.log(endereco)

endereco = ['rua importante', 1260, 'Bloco A']
console.log(endereco)

// enum
enum Cor {
    Cinza, //0
    Verde = 100, //1
    Azul = 10, //2
    Laranja,
    Amarelo,
    Vermelho = 100

}
let minhaCor: Cor = Cor.Verde
console.log(minhaCor)
console.log(Cor.Azul)
console.log(Cor.Laranja, Cor.Amarelo)
console.log(Cor.Verde, Cor.Vermelho) //duplicado, é possível

// any
let carro: any = 'BMW'
console.log(carro)
carro = { marca: 'BMW', ano: 2021 }
console.log(carro)

//funcao
function retornaMeuNome(): String {
    return nome
}
console.log(retornaMeuNome())

function digaOi(): void {
    console.log('Oi')
}

digaOi()

function multiplicar(numA: number, numB: number): number {
    return numA * numB
}
console.log(multiplicar(2.8, 5))

//tipo função
let calculo: (x: number, y: number) => number
// let calculo = digaOi
// calculo()
calculo = multiplicar
console.log(calculo(5, 6))

//objetos

let usuario: { nome: string, idade: number } = {
    nome: 'João',
    idade: 27
}
console.log(usuario)
// usuario = {}

// usuario = {
//     name: 'Maria',
//     age: 31
// }

usuario = {
    idade: 31,
    nome: 'Maria',
}

console.log(usuario)

//Desafio
// Criar um objeto funcinário com:
//     -array de strings com nomes dos supervisores
//     -função de bater ponto que recebe a hora (num) e retorna uma string
//         -> Ponto normal (<=8)
//         ->Fora do horário (>8)

// EXERCICIO BY VANESSA
let funcionarios: string[] = ['Vanessa', 'Ana', 'Júlia']

function baterPonto(hora: number): any {
    if (hora <= 8) {
        console.log(hora, 'Ponto normal')
    } else if (hora > 8) {
        console.log(hora, 'Fora do horário')
    }
}

baterPonto(7)

// EXERCICIO PROFESSOR

let funcionario: {
    supervisores: string[],
    baterPontos: (horas: number) => string
} = {
    supervisores: ['Ana', 'Fernando'],
    baterPontos(horario: number): string {
        if (horario <= 8) {
            return 'Ponto normal'
        } else {
            return 'Fora do horário'
        }
    }
}

console.log(funcionario.supervisores)
console.log(funcionario.baterPontos(8))
console.log(funcionario.baterPontos(9))