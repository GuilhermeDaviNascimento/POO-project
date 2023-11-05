class Agenda {
    constructor() {
        this._agenda = []
    }
    //1. Adicionar novo contato com informações como nome, telefone, e-mail, etc.
    agendar(contato) {
        this._agenda.push(contato)
    }
    //2. Visualizar a lista de contatos cadastrados de forma organizada
    visualizar(classe) {
        if (classe === 0) {
            this._agenda.forEach(contato => {
                console.log(contato.toString())
            });
        }
        if (classe === 1) {
            this._agenda.forEach(contato => {
                if (contato.constructor.name === 'Contato') {
                    console.log(contato.toString())
                }
            });
        } else if (classe === 2) {
            this._agenda.forEach(contato => {
                if (contato.constructor.name === 'Cliente') {
                    console.log(contato.toString())
                }
            });
        } else if (classe === 3) {
            this._agenda.forEach(contato => {
                if (contato.constructor.name === 'Amigo') {
                    console.log(contato.toString())
                }
            });
        } else if (classe === 4){
            this._agenda.forEach(contato => {
               if (contato.constructor.name === 'Colega') {
                console.log(contato.toString())
               }
            });
       }
    }
    //3. Editar os detalhes de um contato existente\
    editar(id) {
        this._agenda.forEach(contato => {
            if (contato.id === id) {
                if (contato.constructor.name === 'Contato') {
                    contato.rename()
                } else if (contato.constructor.name === 'Cliente') {
                    contato.rename()
                } else if (contato.constructor.name === 'Amigo') {
                    contato.rename()
                } else if (contato.constructor.name === 'Colega') {
                    contato.rename()
                }
            }
        })
    }
    //4. Excluir um contato da lista
    deletar(idresponse) {
        this._agenda.forEach(contato => {
            if (contato.id === idresponse) {
                this._agenda.splice(this._agenda.indexOf(contato), 1)
            }
        });
    }
    //5. Pesquisar contatos por nome
    pesquisarNome(nome) {
        console.log(this._agenda.find((contato) => contato.nome === nome))
    }
}

module.exports = Agenda