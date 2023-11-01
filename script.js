const prompt = require('prompt-sync')({ sigint: true });
let id = 1
class Contato {
    constructor(nome, telefone, email) {
        this.id = id
        id++
        this.nome = nome
        this.telefone = telefone
        this.email = email
    }
}
class Cliente extends Contato {
    constructor(nome, telefone, email, empresa) {
        super(nome, telefone, email)
        this._empresa = empresa
    }
}

class Amigo extends Contato {
    constructor(nome, telefone, email, aniversario) {
        super(nome, telefone, email)
        this._aniversario = aniversario
    }
}

class Colega extends Contato {
    constructor(nome, telefone, email, departamento) {
        super(nome, telefone, email)
        this._departamento = departamento
    }

}
class Agenda {
    constructor() {
        this.agenda = []
    }
    //1. Adicionar novo contato com informações como nome, telefone, e-mail, etc.
    agendar(contato) {
        this.agenda.push(contato)
    }
    //2. Visualizar a lista de contatos cadastrados de forma organizada
    visualizar() {
        this.agenda.forEach(contato => {
            if (contato.constructor.name === 'Contato') {
                return console.log(`
                ----------------------------------- \n
                ID: ${contato.id} \n
                Nome: ${contato.nome}\n
                Telefone: ${contato.telefone} \n
                Email: ${contato.email} \n
                ----------------------------------- \n`)
            } else if (contato.constructor.name === 'Cliente') {
                return console.log(`
                ----------------------------------- \n
                ID: ${contato.id} \n
                Nome: ${contato.nome}\n
                Telefone: ${contato.telefone} \n
                Email: ${contato.email} \n
                Empresa: ${contato._empresa} \n
                ----------------------------------- \n`)
            } else if (contato.constructor.name === 'Amigo') {
                return console.log(`
                ----------------------------------- \n
                ID: ${contato.id} \n
                Nome: ${contato.nome}\n
                Telefone: ${contato.telefone} \n
                Email: ${contato.email} \n
                Aniversário: ${contato._aniversario} \n
                ----------------------------------- \n`)
            } else if (contato.constructor.name === 'Colega') {
                return console.log(`
                ----------------------------------- \n
                ID: ${contato.id} \n
                Nome: ${contato.nome}\n
                Telefone: ${contato.telefone} \n
                Email: ${contato.email} \n
                Departamento: ${contato._departamento} \n
                ----------------------------------- \n`)
            }
        });
    }
    //3. Editar os detalhes de um contato existente\
    editar(id){
        this.agenda.forEach(contato => {
            if (contato.id === id){
                if (contato.constructor.name === 'Contato') {
                    contato.nome = prompt(`Digite o novo nome: `)
                    contato.telefone = prompt(`Digite o novo telefone: `)
                    contato.email = prompt(`Digite o novo email: `)
                } else if (contato.constructor.name === 'Cliente') {
                    contato.nome = prompt(`Digite o novo nome: `)
                    contato.telefone = prompt(`Digite o novo telefone: `)
                    contato.email = prompt(`Digite o novo email: `)
                    contato._empresa = prompt(`Digite o novo empresa: `)
                } else if (contato.constructor.name === 'Amigo'){
                    contato.nome = prompt(`Digite o novo nome: `)
                    contato.telefone = prompt(`Digite o novo telefone: `)
                    contato.email = prompt(`Digite o novo email: `)
                    contato._aniversario = prompt(`Digite o novo aniversário: `)
                } else if (contato.constructor.name === 'Colega') {
                    contato.nome = prompt(`Digite o novo nome: `)
                    contato.telefone = prompt(`Digite o novo telefone: `)
                    contato.email = prompt(`Digite o novo email: `)
                    contato._departamento = prompt(`Digite o novo departamento: `)
                }
            }
        })
    }
    //4. Excluir um contato da lista
    deletar(idresponse) {
        this.agenda.forEach(contato => {
            if (contato.id === idresponse) {
                this.agenda.splice(this.agenda.indexOf(contato), 1)
            }
        });
    }
    //5. Pesquisar contatos por nome
    pesquisarNome(nome) {
        return console.log(this.agenda.find((contato) => contato.nome === nome))
        prompt('Digite qualquer coisa para continuar: ')
    }
}
// --------------------------------------------------------------
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
        agenda.visualizar()
        prompt('Digite qualquer coisa para continuar: ')
    } else if (resposta === 3) {
        agenda.visualizar()
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
