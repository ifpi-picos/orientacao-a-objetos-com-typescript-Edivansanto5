import {Disciplina} from './Disciplina'
export class Curso{
    private nome: string;
    private disciplina: Disciplina[]

    construct(nome:string){
        this.nome = nome

    }
    getNome(){
        return this.nome
    }
}

    
