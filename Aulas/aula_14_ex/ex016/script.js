function contar() {
    var inicio = document.querySelector('#inicio')
    var fim = document.querySelector('#fim')
    var passo = document.querySelector('#passo')
    while (inicio <= fim) {
        res.innerHTML = inicio
        inicio = inicio + passo
    }
}