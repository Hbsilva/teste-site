// controllers.js

class LoginController {
    static realizarLogin(nome, senha) {
        const usuario = Usuario.obterUsuario();
        if (usuario && usuario.nome === nome && usuario.senha === senha) {
            sessionStorage.setItem('usuarioLogado', nome);
            location.href = 'home.html';
        } else {
            alert('Nome ou senha inválidos!');
        }
    }
}

class UsuarioController {
    static cadastrarUsuario(nome, sobrenome, senha, dataNascimento, endereco) {
        const novoUsuario = new Usuario(nome, sobrenome, senha, dataNascimento, endereco);
        Usuario.salvarUsuario(novoUsuario);
        alert('Usuário cadastrado com sucesso!');
        location.href = 'index.html';
    }

    static carregarUsuarioLogado() {
        const usuarioLogado = sessionStorage.getItem('usuarioLogado');
        View.atualizarBemVindo(usuarioLogado);
    }
}

class AtividadeController {
    static carregarAtividades() {
        const atividades = Atividade.obterAtividades();
        View.renderizarAtividades(atividades);
    }

    static adicionarAtividade(tipo, data, horario, local, convidados, duracao) {
        const novaAtividade = new Atividade(tipo, data, horario, local, convidados, duracao);
        Atividade.adicionarAtividade(novaAtividade);
        this.carregarAtividades();
    }

    static removerAtividade(index) {
        const atividades = Atividade.obterAtividades();
        atividades.splice(index, 1);
        Atividade.salvarAtividades(atividades);
        this.carregarAtividades();
    }

    static concluirAtividade(index) {
        alert(`Atividade ${index + 1} concluída!`);
    }
}
