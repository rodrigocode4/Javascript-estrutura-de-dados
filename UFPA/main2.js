import { ContaPoupanca} from './1-Banco/contaPoupanca';
import { question } from 'readline-sync';



const user = new ContaPoupanca();
console.log('Seu saldo é de R$ ' + user.mostrarSaldo);
user.depositar = 20;
console.log('Seu saldo é de R$ ' + user.mostrarSaldo);
user.depositar = 20;
console.log('Seu saldo é de R$ ' + user.mostrarSaldo);