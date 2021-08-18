import {Disciplina} from './disciplina'
import {Curso} from './curso'

// instanciando um objeto
const web = new Disciplina("programação web")
const ESF = new Disciplina("Engenharia de software")
const ads = new Curso('ADS')

// adcionando as disciplinas no curso ads
ads.adicionaDisciplina(web)
ads.adicionaDisciplina(ESF)

console.log('Cusro ',ads.getNome())
console.log('Disciplinas',ads.getDisciplinas())
