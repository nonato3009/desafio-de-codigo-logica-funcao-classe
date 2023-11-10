class hero{
    constructor(nome, idade, tipo, poder, especial){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
        this.poder = poder
        this.especial = especial
    }

    atacar(){
        console.log(`O ${this.tipo} ${this.nome} atacou usando ${this.poder}`)
    }

    habilidadeEspecial(){
        console.log(`${this.nome} tem uma habilidade especial: ${this.especial}`)
    }
}

let guerreiro = new hero("Gon Freecss", 12, "Guerreiro", "Força bruta", "Pedra, papel e tesoura!")
let mago = new hero("Dr. Estranho", 50, "Mago", "magia", "Conjurar portais e Viajar entre diferentes dimensões.")

guerreiro.atacar()
guerreiro.habilidadeEspecial()
console.log()
mago.atacar()
mago.habilidadeEspecial()

// console.log()
// console.log(guerreiro)
// console.log(mago)
// console.log()
// console.log("Qual a idade de "+ guerreiro.nome + "? " + guerreiro.idade + " anos")
// console.log("Qual a idade de "+ mago.nome + "? " + mago.idade + " anos")
