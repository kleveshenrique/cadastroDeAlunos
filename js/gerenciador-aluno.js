class GerenciadorAluno{
    constructor(){
        this.arrAlunos =[];
    }
    cadastrarAluno(aluno){       
        this.arrAlunos.push(aluno);
    };
    todosAlunos(){
        return this.arrAlunos;
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
    };
    somaIdades(){
        let somaIdades=0;
        this.arrAlunos.forEach(aluno => {
            somaIdades += aluno.idade;
        });
        return parseInt(somaIdades);
    };
    mediaDasIdades() {
        let qtdAlunos = parseInt(this.arrAlunos.length);
        let somaIdades = this.somaIdades();
        if (qtdAlunos==0) {
            return 0;
        }else{
            return ( somaIdades/qtdAlunos );
        }
        
    };
    todosHomens() {
       let arrHomens=[];       
       this.arrAlunos.forEach(aluno => {
           if (aluno.sexo=="M") {
               arrHomens.push(aluno);
           }
       });
       return arrHomens;
    };
    todasMulheres() {
        let arrMulheres=[];       
        this.arrAlunos.forEach(aluno => {
            if (aluno.sexo=="F") {
                arrMulheres.push(aluno);
            }
        });
        return arrMulheres;
     };
    todosIdosos(){
        let arrIdosos=[];       
        this.arrAlunos.forEach(aluno => {
            if (aluno.idade>60) {
                arrIdosos.push(aluno);
            }
        });
        return arrIdosos;
    }
    
};