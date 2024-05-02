var teclado = require("prompt-sync")();
console.clear();
var opcao = "";
var enter = "";
var dataAtual = new Date;
var dataDia = dataAtual.getDate();
var dataMes = dataAtual.getMonth();
var mesAjustado = dataMes + 1;
var dataAno = dataAtual.getFullYear();
var tenteDia = 0;
var tenteMes = 0;
var tenteAno = 0;
menuComeco();
function menuComeco() {
    console.clear();
    console.log("----------------------------------------");
    console.log("---       JOGO DO CALEND\u00C1RIO         ---");
    console.log("---  TENTE A ACERTAR A DATA DE HOJE  ---");
    console.log("---         digite em n\u00FAmeros        ---");
    console.log("---    aperte enter para continuar   ---");
    console.log("----------------------------------------");
    enter = teclado("");
    tenteDia = parseInt(teclado("Digite que dia \u00E9 hoje? "));
    tenteMes = parseInt(teclado("Digite que m\u00EAs \u00E9 hoje? "));
    tenteAno = parseInt(teclado("Digite que ano \u00E9 hoje? "));
    console.log("----------------------------------------");
    console.log("---    aperte enter para continuar   ---");
    console.log("----------------------------------------");
    enter = teclado("");
    funcaoDataDia(tenteDia);
}
function funcaoDataDia(tenteDia) {
    console.clear();
    if (tenteDia === dataDia) {
        console.log("Voc\u00EA acertou o dia de hoje!");
    }
    if (tenteDia != dataDia) {
        console.log("Voc\u00EA errou o dia de hoje!");
    }
    funcaoDataMes(tenteMes);
}
function funcaoDataMes(tenteMes) {
    if (tenteMes === mesAjustado) {
        console.log("Voc\u00EA acertou o m\u00EAs de hoje!");
    }
    if (tenteMes != mesAjustado) {
        console.log("Voc\u00EA errou o m\u00EAs de hoje!");
    }
    funcaoDataAno(tenteAno);
}
function funcaoDataAno(tenteAno) {
    if (tenteAno === dataAno) {
        console.log("Voc\u00EA acertou o ano de hoje!");
    }
    if (tenteAno != dataAno) {
        console.log("Voc\u00EA errou o ano de hoje!");
    }
    if (tenteDia === dataDia && tenteMes === mesAjustado && tenteAno === dataAno) {
        menuVencedor();
    }
    if (tenteDia !== dataDia || tenteMes !== mesAjustado || tenteAno != dataAno) {
        menuGameOver();
    }
}
function menuGameOver() {
    console.log("--------------------------------------------------------");
    console.log("---                    GAME OVER                     ---");
    console.log("--------------------------------------------------------");
    enter = teclado();
    console.log("--------------------------------------------------------");
    console.log("---              Deseja continuar jogando            ---");
    console.log("---              Digite 1 para contiunar...          ---");
    console.log("---  Digite 0 para terminar e saber a data atual...  ---");
    console.log("--------------------------------------------------------");
    opcao = (teclado("Digite a op\u00E7\u00E3o --> "));
    switch (opcao) {
        case "0":
            console.clear();
            ;
            console.log("A data total do dia \u00E9 ".concat(dataDia, "/").concat(mesAjustado, "/").concat(dataAno, "!!"));
            console.log("Programa finalizado");
            break;
        case "1":
            menuComeco();
            break;
        default:
            console.log("Digte algo v\u00E1lido");
            enter = teclado("");
            menuGameOver();
            break;
    }
}
function menuVencedor() {
    enter = teclado("");
    console.clear();
    console.log("--------------------------------------------------------");
    console.log("--------------------------------------------------------");
    console.log("Parab\u00E9ns voc\u00EA acertou! A data total do dia \u00E9 ".concat(dataDia, "/").concat(mesAjustado, "/").concat(dataAno, "!!"));
    console.log("--------------------------------------------------------");
    console.log("--------------------------------------------------------");
}
