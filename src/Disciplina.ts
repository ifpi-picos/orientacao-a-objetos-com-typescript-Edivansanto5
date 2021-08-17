export class Disciplina{
    private nome: String; 

    construct (nome:String){
        this.nome = nome;
    }
    getNome(){
        return this.nome;
    }
}
