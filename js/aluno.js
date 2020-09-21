class Aluno{
    constructor(nome,idade){
        this.nome = nome;
        this.idade=idade;
    }
};

class GerenciadorAluno{
    constructor(){
        this.arrAlunos =[];
    }
    cadastrarAluno(aluno){
        this.arrAlunos.push(aluno);
    };
    maiorIdade(){        
        let idade=0;
        let alunoMaior={};
        this.arrAlunos.forEach(aluno => {            
            if(aluno.idade>idade){
                alunoMaior=aluno;
                idade=aluno.idade;
            }
        });
        return alunoMaior;
    };
    menorIdade(){        
        let idade=200;
        let alunoMenor={};
        this.arrAlunos.forEach(aluno => {            
            if(aluno.idade<idade){
                alunoMenor=aluno;
                idade=aluno.idade;
            }
        });
        return alunoMenor;
    }
};

class ControllerAluno{
    constructor(){
        this.gerenciadorAluno = new GerenciadorAluno();
    }
    lerDados(){
        let nome = document.getElementById("nome").value;
        let idade = document.getElementById("idade").value;
        return new Aluno(nome,idade);
    }
    cadastrarAluno(){
        let aluno = this.lerDados();
        if (aluno.nome==""|| aluno.idade=="") {
            //alert("Todos os campos são obrigatóios");
            this.showAlert(msgDanger);
            return false;
        }
        let alunoCadastrado = this.gerenciadorAluno.cadastrarAluno(aluno);
        document.getElementById("btnNovo").disabled = false;
        document.getElementById("btnVelho").disabled = false;
        this.limparCampos();
        this.showAlert(msgSuccess);

    };
    limparCampos(){
        document.getElementById("nome").value="";
        document.getElementById("idade").value="";
    };
    exibirAlunoMaisVelho(){
        let strHtml = "";
        let aluno = this.gerenciadorAluno.maiorIdade();
        strHtml = `
        <div class="alert alert-info">
            <center>Aluno mais velho </center>
            <hr>
            Nome : ${aluno.nome}<br>
            Idade : ${aluno.idade} anos
        </div>
        `
        if (aluno.nome==""|| aluno.idade=="") {
            return false;
        }
        document.getElementById("resultado").innerHTML = strHtml; 
    }
    exibirAlunoMaisNovo(){
        let strHtml = "";
        let aluno = this.gerenciadorAluno.menorIdade();
        strHtml = `
        <div class="alert alert-info">
           <center> Aluno mais novo </center>
            <hr>
            Nome : ${aluno.nome}<br>
            Idade : ${aluno.idade} anos
        </div>

        `
        
            document.getElementById("resultado").innerHTML = strHtml; 
        
        
    };
       
    showAlert(tipo){
        $(tipo).show();
        setTimeout(function () {            
            $(tipo).hide(); 
        }, 3000);
    }
};

var controllerAluno = new ControllerAluno();