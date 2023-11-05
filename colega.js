const Contato = require('./contato.js')
const prompt = require('prompt-sync')({ sigint: true });

class Colega extends Contato {
    constructor(nome, telefone, email, departamento) {
        super(nome, telefone, email)
        this._departamento = departamento
    }
    toString(){
        return super.toString() + this._departamento;
    }
    raname(){
        super.rename();
        this._departamento = prompt(`Digite o novo departamento: `)
    }
}

module.exports = Colega;