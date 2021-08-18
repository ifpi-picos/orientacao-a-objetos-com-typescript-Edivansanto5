"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const disciplina_1 = require("./disciplina");
const curso_1 = require("./curso");
// instanciando um objeto
const web = new disciplina_1.Disciplina("programação web");
const ESF = new disciplina_1.Disciplina("Engenharia de software");
const ads = new curso_1.Curso('ADS');
// adcionando as disciplinas no curso ads
ads.adicionaDisciplina(web);
ads.adicionaDisciplina(ESF);
console.log('Cusro ', ads.getNome());
console.log('Disciplinas', ads.getDisciplinas());
