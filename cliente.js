const Contato = require('./contato.js')
const prompt = require('prompt-sync')({ sigint: true });

class Cliente extends Contato {
    constructor(nome, telefone, email, empresa) {
        super(nome, telefone, email)
        this._empresa = empresa
    }
    toString(){
        return super.toString() + this._empresa;
    }
    raname(){
        super.rename();
        this._empresa = prompt(`Digite o novo empresa: `)
    }
}

module.exports = Cliente;