import { Disciplina } from "./disciplina";
export class Curso{
    private nome: string;
    private disciplinas: Disciplina[]
    
    constructor(nome: string) {
        this.nome = nome
        this.disciplinas = []
    }

    adicionaDisciplina(disciplinas: Disciplina){
        this.disciplinas.push(disciplinas)

    }
     // metado para acessar as disciplina
    getDisciplinas(){
        return this.disciplinas
    }
     // metado para acessar o nome das disciplinas 
    getNome(){
        return this.nome
    }
    removeDisciplina(){
        
    }
   
}

    
