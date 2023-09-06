const prompt = require ('prompt-sync') ({sigint: true});
let id = 0
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
            return console.log(`
            ----------------------------------- \n
            ID: ${contato.id} \n
            Nome: ${contato.nome}\n
            Telefone: ${contato.telefone} \n
            Email: ${contato.email} \n
            ----------------------------------- \n`)
        });
    }
    //3. Editar os detalhes de um contato existente
    editar(contato){
        console.log('-----------------------------------')
        console.log('0 - Tudo')
        console.log('1 - Nome')
        console.log('2 - Email')
        console.log('3 - Telefone')
        console.log('O que você deseja editar?')
        console.log('-----------------------------------')
        let resposta = Number(prompt(': '))
        if (resposta === 0){
            this.agenda[contato].nome = prompt(`Digite o novo nome: `)
            this.agenda[contato].telefone = prompt(`Digite o novo telefone: `)
            this.agenda[contato].email = prompt(`Digite o novo email: `)
        } else if (resposta === 1){            
            this.agenda[contato].nome = prompt(`Digite o novo nome: `)
        } else if (resposta === 2){            
            this.agenda[contato].telefone = prompt(`Digite o novo telefone: `)
        } else if (resposta === 3){            
            this.agenda[contato].email = prompt(`Digite o novo email: `)
        } else{
            return console.log('Digite um número válido')
        }
        console.log('Editado com sucesso')
        prompt('Digite qualquer coisa para continuar: ')
    }
    //4. Excluir um contato da lista
    deletar(contato){
        this.agenda.splice(contato, 1);
    }
    //5. Pesquisar contatos por nome
    pesquisarNome(nome){
        return console.log(this.agenda.find((contato) => contato.nome === nome))
    }
}
// --------------------------------------------------------------
let agenda = new Agenda;
let resposta = -1

while(resposta !== 0) {
    console.log('-----------------------------------')
    console.log('0 - Sair do Programa')
    console.log('1 - Criar Contato')
    console.log('2 - Visualizar Agenda')
    console.log('3 - Editar Contatos')
    console.log('4 - Deletar Contato')
    console.log('5 - Pesquisar por nome')
    console.log('-----------------------------------')
    resposta = Number(prompt(': '))
    if (resposta === 1) {
        let nome = prompt('Digite o nome: ')
        let telefone = prompt('Digite o telefone: ')
        let email = prompt('Digite o email: ')
        let contato = new Contato(nome, telefone, email)
    } else if (resposta === 2){
        agenda.visualizar()
        prompt('Digite qualquer coisa para continuar: ')
    } else if (resposta === 3){
        agenda.visualizar()
        let resposta = Number(prompt('Digite o ID do contato que deseja editar: '))
        agenda.editar(resposta)
    }   else if (resposta === 4){
        agenda.visualizar()
        let resposta = Number(prompt('Digite o ID do agenda que deseja deletar: '))
        agenda.deletar(resposta)
    } else if(resposta === 5){
        let resposta = prompt(`Qual nome deseja procurar na agenda?`)
        agenda.pesquisarNome(resposta)
    } else if (resposta === 0){
        console.log('Até a proxima!')
    } else {
        console.log('Digite uma opção válida')
    }
    }
    
