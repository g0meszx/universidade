class BankAccount {
    constructor(numeroConta, titularConta, saldoInicial) {
      this.numeroConta = numeroConta;
      this.titularConta = titularConta;
      this.saldo = saldoInicial;
    }
  
    depositar(valor) {
      if (valor > 0) {
        this.saldo += valor;
        console.log(`${valor} depositados na conta de ${this.titularConta}. Saldo atual: ${this.saldo}`);
      } else {
        console.log("Valor de depósito inválido!");
      }
    }
  
    sacar(valor) {
      if (valor > 0 && valor <= this.saldo) {
        this.saldo -= valor;
        console.log(`${valor} sacados da conta de ${this.titularConta}. Saldo atual: ${this.saldo}`);
      } else {
        console.log("Saldo insuficiente ou valor inválido!");
      }
    }
  
    transferir(valor, contaDestino) {
      if (valor > 0 && valor <= this.saldo) {
        this.saldo -= valor;
        contaDestino.saldo += valor;
        console.log(`${valor} transferidos da conta de ${this.titularConta} para a conta de ${contaDestino.titularConta}.`);
      } else {
        console.log("Saldo insuficiente ou valor inválido para transferência!");
      }
    }
  }
  
  const conta1 = new BankAccount(101, "Jao", 1000);
  const conta2 = new BankAccount(102, "Gomes", 500);
  
  conta1.depositar(200); 
  conta1.sacar(150); 
  conta1.transferir(300, conta2); 
  conta2.depositar(400); 
  conta2.sacar(100); 