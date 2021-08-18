export class Disciplina{
    private nome: string; 
    private cargaHoraria: number;

    constructor(nome:string){
        this.nome = nome;
    }

    // metado para acessar o nome da disciplina
    getNome(){
        return this.nome;
    }
    
}
