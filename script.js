function carregar(){


var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`

if (hora >=0 && hora < 12) {
    img.src = 'manhap.png'
    document.body.style.background = '#bb7794'

} else if (hora >= 12 && hora <= 18) {
    img.src = 'tardep.png'
    document.body.style.background = '#619fb6'


} else {
    img.src = 'noitep.png'
    document.body.style.background = '#052133'

}


}