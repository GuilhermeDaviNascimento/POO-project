const prompt = require('prompt-sync')({ sigint: true });
const Contato = require('./contato.js')
const Colega = require('./colega.js')
const Amigo = require('./amigo.js')
const Cliente = require('./cliente.js')
const Agenda = require('./agenda.js')

// --------------------------------------------------------------
function main(){
    let agenda = new Agenda;
    let resposta = -1
    while (resposta !== 0) {
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
            console.log(' 1 - Contato Padrão \n 2 - Contato de um Cliente \n 3 - Contato de um Amigo \n 4 - Contato de um Colega de Trabalho')
            let r = Number(prompt("Qual tipo de contato deseja criar?"))
            if (r === 1) {
                let nome = prompt('Digite o nome: ')
                let telefone = prompt('Digite o telefone: ')
                let email = prompt('Digite o email: ')
                let contato = new Contato(nome, telefone, email)
                agenda.agendar(contato)
            } else if (r === 2) {
                let nome = prompt('Digite o nome: ')
                let telefone = prompt('Digite o telefone: ')
                let email = prompt('Digite o email: ')
                let empresa = prompt('Digite a empresa: ')
                let contato = new Cliente(nome, telefone, email, empresa)
                agenda.agendar(contato)
            } else if (r === 3) {
                let nome = prompt('Digite o nome: ')
                let telefone = prompt('Digite o telefone: ')
                let email = prompt('Digite o email: ')
                let aniversario = prompt('Digite a Data de Aniversário: ')
                let contato = new Amigo(nome, telefone, email, aniversario)
                agenda.agendar(contato)
            } else if (r === 4) {
                let nome = prompt('Digite o nome: ')
                let telefone = prompt('Digite o telefone: ')
                let email = prompt('Digite o email: ')
                let departamento = prompt('Digite o departamento: ')
                let contato = new Colega(nome, telefone, email, departamento)
                agenda.agendar(contato)
            } else {
                console.log('Digite uma opção válida')
            }
        } else if (resposta === 2) {
            console.log(`Como deseja visualizar a agenda? \n 
            0 - Tudo \n
            1 - Contatos Normais \n
            2 - Clientes \n
            3 - Amigo \n
            4 - Colegas \n
            `)
            let id = Number(prompt(":"))
            agenda.visualizar(id)
            prompt('Digite qualquer coisa para continuar: ')
        } else if (resposta === 3) {
            agenda.visualizar(0)
            let resposta = Number(prompt('Digite o ID do contato que deseja editar: '))
            agenda.editar(resposta)
        } else if (resposta === 4) {
            agenda.visualizar()
            let resposta = Number(prompt('Digite o ID do contato que deseja deletar: '))
            agenda.deletar(resposta)
        } else if (resposta === 5) {
            let resposta = prompt(`Qual nome deseja procurar na agenda?`)
            agenda.pesquisarNome(resposta)
        } else if (resposta === 0) {
            console.log('Até a proxima!')
        } else {
            console.log('Digite uma opção válida')
        }
    }
}

main();