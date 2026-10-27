function tabuada() {
    var txtnumber = document.querySelector('#inumero')
    var isec = document.querySelector('#isec') 
    if (txtnumber.value.length == 0) {
        window.alert("Por favor, digite um número!")
    } else {
        var numero = Number(txtnumber.value)
        isec.innerHTML = ''
        for (var c = 1; c <= 10; c++) {
            var item = document.createElement('option')
            item.text = `${numero} X ${c} = ${numero*c}`
            item.value = `tab${c}`
            isec.appendChild(item)
        }
    }

}