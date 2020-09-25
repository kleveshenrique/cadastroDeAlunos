class ControllerAluno{
    constructor(){
        this.gerenciadorAluno = new GerenciadorAluno();
    }
    lerDados(){
        let nome = document.getElementById("nome").value;
        let idade = document.getElementById("idade").value;
        let sexo = document.getElementById("sexo").value;
        return new Aluno(nome,idade,sexo);
    }
    cadastrarAluno(){
        
        let aluno = this.lerDados();
       
        if (aluno.nome==""|| aluno.idade=="") {
            //alert("Todos os campos são obrigatóios");
            this.showAlert(msgDanger);
            this.exibirAlunos("todos");
            return false;
        }
        let alunoCadastrado = this.gerenciadorAluno.cadastrarAluno(aluno);        
        document.getElementById("btnNovo").disabled = false;
        document.getElementById("btnVelho").disabled = false;
        document.getElementById("btnHomens").disabled = false;
        document.getElementById("btnMulheres").disabled = false;
        document.getElementById("btnIdosos").disabled = false;
        this.exibirAlunos("todos");
        this.limparCampos();
        
        this.showAlert(msgSuccess);

    };
    mediaDasIdades() {
       return this.gerenciadorAluno.mediaDasIdades();
    };
    todosAlunos(){
        return this.gerenciadorAluno.todosAlunos();
    };
    todosHomens(){
        return this.gerenciadorAluno.todosHomens();
    };
    todasMulheres(){
        return this.gerenciadorAluno.todasMulheres();
    };
    todosIdosos(){
        return this.gerenciadorAluno.todosIdosos();
    };
    menorIdade(){
        return this.gerenciadorAluno.menorIdade();
    };
    maiorIdade(){
        return this.gerenciadorAluno.maiorIdade();
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
            Idade : ${aluno.idade} anos <br>
            Sexo : ${aluno.sexo}
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
            Idade : ${aluno.idade} anos <br>
            Sexo : ${aluno.sexo}
        </div>

        `
        
            document.getElementById("resultado").innerHTML = strHtml; 
        
        
    };
    exibirAlunos(strTipoAluno){
        let arrTipo =[];
        document.getElementById("resultado").innerText="";
        
        let arrHomens = this.todosHomens();
        let arrMulheres = this.todasMulheres();
        let arrAlunos = this.todosAlunos();
        let arrIdosos = this.todosIdosos();
        let mediaIdades = this.mediaDasIdades();
        let maisNovo = [this.menorIdade()];
        let maisVelho =[this.maiorIdade()];
        let tblAlunos="";
        let strLinhas="";
        let Titulo = "Alunos Cadastrados";
        // Definindo qual o array percorrer
        if (strTipoAluno=="homens") {
            arrTipo = arrHomens;
        } else if (strTipoAluno=="mulheres") {
            arrTipo = arrMulheres;
        }else if (strTipoAluno=="idosos") {
            arrTipo = arrIdosos;
        }else if (strTipoAluno=="maisNovo") {
            arrTipo = maisNovo;
        }else if(strTipoAluno=="maisVelho"){
            arrTipo = maisVelho;
        }else if(strTipoAluno=="todos"){
            arrTipo = arrAlunos;
        }
        //montando as linhas dda tabela
        arrTipo.forEach(aluno => {
            strLinhas+=
            `
                <tr class="text-center"><td>${aluno.nome}</td><td>${aluno.idade}</td><td>${aluno.sexo}</td></tr>      
            `
        });
        strLinhas += `
            <tr class="text-center text-light bg-dark "><td colspan="2"><b>Qtd Mulheres</b></td><td>${arrMulheres.length}</td></tr>
            <tr class="text-center text-light bg-dark "><td colspan="2"><b>Qtd Homens</b></td><td>${arrHomens.length}</td></tr>
            <tr class="text-center text-light bg-dark"><td colspan="2"><b>Qtd Idosos</b></td><td>${arrIdosos.length}</td></tr>
            <tr class="text-center text-light bg-dark"><td colspan="2"><b>Média Idades</b></td><td>${mediaIdades}</td></tr>
        `
        
        // tabela de alunos
        tblAlunos=`
        
        <table class="table table-striped table-bordered">                     
          <tr class="text-center bg-info ">
            <th>Nome</th>
            <th>Idade</th>
            <th>Sexo</th>
          </tr>
      
        <tbody>
        `+
            strLinhas
        +`   
                   
        </tbody>
      </table>

        `
        document.getElementById("resultado").innerHTML = tblAlunos;

    }
       
    showAlert(idAlert){
        $('.alert').hide();
        $(idAlert).show();
        if (idAlert==msgDanger) {
            setTimeout(function () {            
                $(idAlert).hide(); 
            }, 10000);    
        }else{
            setTimeout(function () {            
                $(idAlert).hide(); 
            }, 3000);
        }        
        
    }
};

var controllerAluno = new ControllerAluno();