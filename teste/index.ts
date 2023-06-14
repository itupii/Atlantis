import Cliente from "../modelos/clienteModelo";
import Endereco from "../modelos/enderecoModelo";
import Telefone from "../modelos/telefoneModelo";

let cliente = new Cliente()
cliente.nome = `ian machado`
cliente.nomeSocial = `indio`
cliente.dataCadastro = new Date(2012, 6, 23)
cliente.dataNascimento = new Date(2004, 19, 2)

let telefone = new Telefone()
telefone.ddd = "012"
telefone.numero = "12988899743"
cliente.telefones.push(telefone)

let telefone2 = new Telefone()
telefone2.ddd = "012"
telefone2.numero = "39051008"
cliente.telefones.push(telefone2)

let endereco = new Endereco()
endereco.rua = `Rua pureza alves dos santos`
endereco.bairro = `são josé dos campos`
endereco.pais = `Brasil`
endereco.codigoPostal = `12247120`
cliente.endereco = endereco

let dependente = new Cliente()
dependente.nome = `Ian Ferreira`
dependente.nomeSocial = `ian indio`
dependente.dataCadastro = new Date(2010, 10, 12)
dependente.dataNascimento = new Date(2004, 2, 19)
dependente.endereco = (cliente.endereco.clonar() as Endereco)
dependente.telefones = (cliente.telefones.map(telefone => telefone.clonar()) as Telefone[])
dependente.titular = cliente
cliente.dependentes.push(dependente)

console.log("\nCLIENTE\n-----------------------------------");
console.log(cliente);

console.log("\nDADOS\n-----------------------------------");
console.log(dependente);