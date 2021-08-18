"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Curso = void 0;
class Curso {
    constructor(nome) {
        this.nome = nome;
        this.disciplinas = [];
    }
    adicionaDisciplina(disciplinas) {
        this.disciplinas.push(disciplinas);
    }
    // metado para acessar as disciplina
    getDisciplinas() {
        return this.disciplinas;
    }
    // metado para acessar o nome das disciplinas 
    getNome() {
        return this.nome;
    }
    removeDisciplina() {
    }
}
exports.Curso = Curso;
