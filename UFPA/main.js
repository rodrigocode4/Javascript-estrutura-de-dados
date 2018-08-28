//import { ContaCorrente } from './1-Banco/contaCorrente';
import { ContaPoupanca} from './Banco/contaPoupanca';
//mport { question } from 'readline-sync';



const user = new ContaPoupanca();
console.log('Seu saldo é de R$ ' + user.mostrarSaldo);
user.depositar = 20;
console.log('Seu saldo é de R$ ' + user.mostrarSaldo);
user.depositar = 20;
console.log('Seu saldo é de R$ ' + user.mostrarSaldo);