/**
 * Crie um programa que simule as operações de uma conta corrente,
 * onde o cliente deve poder fazer o seguinte:
 * - Consultar saldo,
 * - Fazer um depósito,
 * - Fazer um saque
 * - Imprimir um extrato.
 * Utilize estruturas de dados em memória
 * para armazenar as informações da conta e
 * das operações feitas pela conta.
 */

import Scanner from "@codeea/scanner";

let scanner: Scanner

type Conta = {
    nomeCliente: string
    numero: number
    agencia: number
    saldo: number
}

type Transacao = {
    id: string;
    valor: number
    tipo: TipoTransacao
}

type TipoTransacao = "E" | "S"

type TipoOPeracao = "SAQ" | "DEP" | "TRANSF" | "PIX"


//informar a operação 
async function main() {
    let operacao = 0

    do {
        imprimeMenu()
        operacao = parseInt(await scanner.question("Informe a operacao:"))

        if (operacao === 0) {
            console.log("OBRIGADO POR UTILIZAR NOSSO SERVIÇO")
            break;
        }
    } while (true)
}

////// funcao imprimir menu
function imprimeMenu() {
    const menu = `
    1 - CONSULTAR SALDO 
    2 - DEPÓSITO
    3 - SACAR
    4 - EXTRATO
    0 - SAIR
    `
    console.log(menu)
}


(async () => {
    scanner = new Scanner()
    await main()
    scanner.close()
})();
