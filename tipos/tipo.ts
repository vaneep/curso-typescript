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

