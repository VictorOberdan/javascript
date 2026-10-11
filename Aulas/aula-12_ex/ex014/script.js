function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    // var hora = 17
    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos`
    if (hora >= 0 && hora < 12) {
        // BOM DIA
        img.src = 'img/manhã.png'
        document.body.style.background = '#E3DCD2'
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE
        img.src = 'img/tarde.png'
        document.body.style.background = '#FEAC00'
    } else {
        // BOA NOITE
        img.src = 'img/noite.png'
        document.body.style.background = '#1F2227'
    }
}