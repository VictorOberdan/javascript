function contar() {
    var txtinicio = document.querySelector('#inicio')
    var txtfim = document.querySelector('#fim')
    var txtpasso = document.querySelector('#passo')
    var res = document.querySelector('#res')

   
    if (txtinicio.value.length == 0 || txtfim.value.length == 0 || txtpasso.value.length == 0) {
        res.innerHTML = 'Impossível contar'
    } else {
        var inicio = Number(txtinicio.value)
        var fim = Number(txtfim.value)
        var passo = Number(txtpasso.value)

        if (passo <= 0) {
        window.alert('Passo inválido! Considerando PASSO 1')
        passo = 1
        } 
        
        res.innerHTML = 'Contando... <br>'
        
        if (inicio < fim) {
            for (var c = inicio; c <= fim; c += passo) {
                res.innerHTML += `${c} &#x1F449; `
            }
        } else {
            for (var c = inicio; c >= fim; c -= passo) {
            res.innerHTML += `${c} &#x1F449; `
            }
        }
        res.innerHTML += `&#x1F3C1;`
    }

}

