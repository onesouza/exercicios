/*switch(expressão) case valor; case valor2; default;
dentro de cada comando é necessário um break para quebrar a regra case*/

var agora = new Date()
var diasem = agora.getDay()


console.log(diasem)

switch(diasem){
    case 0:
        console.log('O dia da semana é Domingo')
    break
    case 1:
        console.log('O dia da semana é Segunda')
    break
    case 2:
        console.log('O dia da semana é Terça')
    break
    case 3:
        console.log('O dia da semana é Quarta')
        break
    case 4:
        console.log('O dia da semana é Quinta')
        break
    case 5:
        console.log('O dia da semana é Sexta')
        break
    default:
        console.log('o dia da semana é sabado')
        break
}