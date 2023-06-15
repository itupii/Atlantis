import Menu from "../interfaces/menu";

export default class MenuTipoList implements Menu {
    mostrar(): void {
        console.clear()
        console.log(`****************************`)
        console.log(`| Qual o tipo de listagem quer acessar? `)
        console.log(`----------------------`)
        console.log(`| 1 - Todos os titulares`)
        console.log(`| 2 - Todos os dependentes`)
        console.log(`| 3 - Todos os dependentes de um titular `)
        console.log(`| 4 - O titular de um dependente`)
        console.log(`----------------------`)
    }
}