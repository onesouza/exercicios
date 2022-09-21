var agora = new Date()
var data = agora.getHours()

console.log(`Agora são ${data} horas`)
if(data < 6){
    console.log('Boa Madrugada')
}
else if (data < 12){
    console.log('Bom dia')
}
else if(data >= 12 && data < 18){
    console.log('Boa tarde')
}
else {
    console.log('Boa noite')
}