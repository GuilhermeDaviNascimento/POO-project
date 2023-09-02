const prompt = require ('prompt-sync') ({sigint: true});
class Contato{
    constructor(nome, telefone, email){
        this.id = id
        id++
        this.nome = nome
        this.telefone = telefone
        this.email = email
        agenda.agendar(this)
    }
}
class Agenda{
    constructor(){
        this.agenda = []
    }
    //1. Adicionar novo contato com informações como nome, telefone, e-mail, etc.
    agendar(contato){
        this.agenda.push(contato)
    }
    //2. Visualizar a lista de contatos cadastrados de forma organizada
    visualizar(){
        this.agenda.forEach(contato => {
            return console.log(`ID: ${contato.id} \nNome: ${contato.nome}\nTelefone: ${contato.telefone} \nEmail: ${contato.email} \n`)
        });
    }
    //3. Editar os detalhes de um contato existente
    editar(contato){
        let resposta = Number(prompt('O que você deseja editar? \n 0 - Tudo \n 1 - Nome \n 2- Telefone \n 3 - Email \n'))
        if (resposta === 0){
            contato.nome = prompt(`Digite o novo nome: `)
            contato.telefone = prompt(`Digite o novo telefone: `)
            contato.email = prompt(`Digite o novo email: `)
        } else if (resposta === 1){            
            contato.nome = prompt(`Digite o novo nome: `)
        } else if (resposta === 2){            
            contato.telefone = prompt(`Digite o novo telefone: `)
        } else if (resposta === 3){            
            contato.email = prompt(`Digite o novo email: `)
        } else{
            return console.log('Digite um número válido')
        }
        return console.log('Editado com sucesso')
    }
    //4. Excluir um contato da lista
    deletar(contato){
        this.agenda.splice(this.agenda.indexOf(contato), 1);
    }
    //5. Pesquisar contatos por nome
    pesquisarNome(nome){
        return console.log(this.agenda.find((contato) => contato.nome === nome))
    }
}
// --------------------------------------------------------------
let agenda = new Agenda;
let resposta = -1
let id = 0
while(resposta !== 0) {
    resposta = Number(prompt('0 - Sair do Programa \n1 - Criar Contato \n2 - Visualizar Agenda \n3 - Editar Contato \n4 - Deletar Contato \n5 - Pesquisar por Contato \n'))
    if (resposta === 1) {
        let nome = prompt('Digite o nome: ')
        let telefone = prompt('Digite o telefone: ')
        let email = prompt('Digite o email: ')
        let contato = new Contato(nome, telefone, email)
    } else if (resposta === 2){
        agenda.visualizar()
    } else if (resposta === 3){
        agenda.visualizar()
        let resposta = Number(prompt('Digite o ID do contato que deseja editar: '))
        agenda.editar(Contato[resposta])
    }   else if (resposta === 4){
        agenda.visualizar()
        let resposta = Number(prompt('Digite o ID do contato que deseja deletar: '))
        agenda.deletar(Contato[resposta])
    }
}
