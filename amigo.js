const Contato = require('./contato.js')
const prompt = require('prompt-sync')({ sigint: true });

class Amigo extends Contato {
    constructor(nome, telefone, email, aniversario) {
        super(nome, telefone, email)
        this._aniversario = aniversario
    }
    toString(){
        return super.toString() + this._aniversario;
    }
    raname(){
        super.rename();
        this._aniversario = prompt(`Digite o novo aniversario: `)
    }
}

module.exports = Amigo;