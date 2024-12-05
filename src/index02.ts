import { console } from "inspector";
import Scanner from "@codeea/scanner";

async function main() {
    const scanner = new Scanner();
    const menu = `
    0 - SAIR
    1 - SOMA
    2 - SUBTRACAO
    3 - DIVISAO
    4 - MULTIPLICACAO
    5 - POTENCIACAO
    6 - CHECA SE NUMERO É PAR
  `;

    let operacao = 0;


    do {
        console.log(menu);
    operacao = parseInt(await scanner.question("Informe a operação: "));
        switch (key) {
            case value:

                break;

            default:
                break;
        }
    } while (operacao !== 0)
    scanner.close

}

main();