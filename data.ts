const teclado = require(`prompt-sync`) ();
console.clear();

let opcao : string = ``;
let enter : string = ``;
let dataAtual = new Date;
let dataDia = dataAtual.getDate();
let dataMes: number = dataAtual.getMonth();
let mesAjustado: number = dataMes + 1;
let dataAno: number = dataAtual.getFullYear();
let tenteDia: number = 0;
let tenteMes: number = 0;
let tenteAno: number = 0;

menuComeco();

function menuComeco():void{
    console.clear();
    console.log(`----------------------------------------`);
    console.log(`---       JOGO DO CALENDÁRIO         ---`);
    console.log(`---  TENTE A ACERTAR A DATA DE HOJE  ---`);
    console.log(`---         digite em números        ---`);
    console.log(`---    aperte enter para continuar   ---`);
    console.log(`----------------------------------------`);
    enter = teclado(``);
    tenteDia = parseInt(teclado(`Digite que dia é hoje? `));
    tenteMes = parseInt(teclado(`Digite que mês é hoje? `));
    tenteAno = parseInt(teclado(`Digite que ano é hoje? `));
    console.log(`----------------------------------------`);
    console.log(`---    aperte enter para continuar   ---`);
    console.log(`----------------------------------------`);
    enter = teclado(``);
    funcaoDataDia(tenteDia);
}

function funcaoDataDia(tenteDia: number): void{
    console.clear();

    if(tenteDia === dataDia){
        console.log(`Você acertou o dia de hoje!`);
    }
    if (tenteDia != dataDia){
        console.log(`Você errou o dia de hoje!`);
    }
    funcaoDataMes(tenteMes); 
}

function funcaoDataMes(tenteMes: number): void{
    
    if(tenteMes === mesAjustado){
        console.log(`Você acertou o mês de hoje!`);
    }
    if (tenteMes != mesAjustado){
        console.log(`Você errou o mês de hoje!`);
    }
    funcaoDataAno(tenteAno);
}

function funcaoDataAno(tenteAno: number): void{

    if(tenteAno === dataAno){
        console.log(`Você acertou o ano de hoje!`);
    }
    if (tenteAno != dataAno){
        console.log(`Você errou o ano de hoje!`);
    }
    if(tenteDia === dataDia && tenteMes === mesAjustado && tenteAno === dataAno){
        menuVencedor();
    }
    if (tenteDia !== dataDia || tenteMes !== mesAjustado || tenteAno != dataAno){
    menuGameOver();
    }
}

function menuGameOver() :void{
    console.log(`--------------------------------------------------------`);
    console.log(`---                    GAME OVER                     ---`)
    console.log(`--------------------------------------------------------`);
    enter = teclado()
    console.log(`--------------------------------------------------------`);
    console.log(`---              Deseja continuar jogando            ---`)
    console.log(`---              Digite 1 para contiunar...          ---`)
    console.log(`---  Digite 0 para terminar e saber a data atual...  ---`)
    console.log(`--------------------------------------------------------`);
    opcao = (teclado(`Digite a opção --> `));

    switch(opcao){
        case `0` : console.clear(); ;console.log(`A data total do dia é ${dataDia}/${mesAjustado}/${dataAno}!!`); console.log(`Programa finalizado`); break;
        case `1` : menuComeco(); break;
        default: console.log(`Digte algo válido`); enter = teclado(``); menuGameOver(); break
    }
}

function menuVencedor() :void{
    enter = teclado (``)
    console.clear()
    console.log(`--------------------------------------------------------`);
    console.log(`--------------------------------------------------------`);
    console.log(`Parabéns você acertou! A data total do dia é ${dataDia}/${mesAjustado}/${dataAno}!!`);
    console.log(`--------------------------------------------------------`);
    console.log(`--------------------------------------------------------`);
}
