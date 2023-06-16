import Processo from "../abstração/processos";
import CadastroAcomodacoes from "../processos/cadastroAcomod";
import Principal from "../processos/principal";

console.clear();
console.log(`Bem-vinde ao Atlantis:`);

let processos: Processo;
let execucao: boolean = true;

processos = new CadastroAcomodacoes();
processos.processar();

while (execucao) {
  if (processos instanceof Principal) {
    processos.processar();
    execucao = processos.Execucao;
  } else {
    
    break; 
  }
}
