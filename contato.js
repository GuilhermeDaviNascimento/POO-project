const prompt = require('prompt-sync')({ sigint: true });

class Contato {
    static id = 1
    constructor(nome, telefone, email) {
        this.id = Contato.id
        Contato.id++
        this._nome = nome
        this._telefone = telefone
        this._email = email
    }

    toString(){
        return `
        ID: ${this.id} \n
        Nome: ${this._nome}\n
        Telefone: ${this._telefone} \n
        Email: ${this._email} \n
        `
    }
    rename(){
        this._nome = prompt(`Digite o novo nome: `)
        this._telefone = prompt(`Digite o novo telefone: `)
        this._email = prompt(`Digite o novo email: `)
    }
}

module.exports = Contato;