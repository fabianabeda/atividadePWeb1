let contaController = new ContaController();

contaController.listar();

const c1 = new Conta('1', -100);
const c2 = new Conta('2', -200);
const p1 = new Poupanca('3', 100);
const cb1 = new ContaBonificada('4', 0);
const cE1 = new Conta ('5', 300);
const ce1 = new contaEspecial('5', 200);

// Cliente

const cli1 = new Cliente('joao', '123', c1);
const cli2 = new Cliente('maria', '124', c2);
const cli3 = new Cliente('pedro', '125', p1);


const clientes = new Clientes();
clientes.inserir(cli1);
clientes.inserir(cli2);
clientes.inserir(cli3);

const cliPesquisado = clientes.pesquisarPorCPF('124');
console.log(cliPesquisado.nome);

const clientesNegativados = clientes.pesquisarClientesNegativados();

console.log('Clientes Negativados:');

clientesNegativados.forEach(cliente => console.log(cliente.nome));

const cliPesquisado2 = clientes.pesquisarPorCPF('555');
if (cliPesquisado2) {
    console.log(cliPesquisado2.nome);
} else {
    console.log('Cliente com cpf 555 não encontrado!');
}
const contaFabiana = new Conta('700', 400); 
const contaEspecialFabiana = new contaEspecial('5', 200);
const clienteEspecial = new ClienteEspecial('fabiana', '001.751.761-31', contaFabiana, contaEspecialFabiana);
console.log(clienteEspecial);
console.log(`Saldo total da cliente Fabiana Oliveira é de: ${contaFabiana.saldo + contaEspecialFabiana.saldo} reais`);

