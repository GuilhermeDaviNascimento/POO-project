var prompt = require('prompt-sync')();
class Contato{
    constructor(nome, telefone, email){
        this.nome = nome
        this.telefone = telefone
        this.email = email
        this.agendar()
    }
    agendar(){
        minha_agenda.push(this)
    }
    deletar(){
        minha_agenda.splice(minha_agenda.indexOf(this), 1);
    }
    editar(){
        let n1 = Number(prompt('1 - Nome \n2 - Telefone \n3 - Email \nO que você quer editar? '))
        if (n1 === 1){
            this.nome = prompt('Novo nome: ')
        } else if (n1 === 2){
            this.telefone = prompt('Novo telefone: ')
        } else if (n1 === 3){
            this.email = prompt('Novo email: ')
        }
    }
}
let minha_agenda = []
let contato1 = new Contato('Gui', 985649307, 'gdsn1')
let contato2 = new Contato('Ana', 985649307, 'adns1')
let contato3 = new Contato('Cleiton', 985649307, 'adns1')
contato1.editar()
console.log(minha_agenda)
