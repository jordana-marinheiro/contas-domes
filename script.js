let numeroContas = 0
let valorTotal = 0
let lista = ''

function registrarConta() {
    let inDescricao = document.getElementById('inDescricao')
    let inValor = document.getElementById('inValor')
    let outLista = document.getElementById('outLista')
    let outTotal = document.getElementById('outTotal')

    let descricao = inDescricao.value
    let valor = Number(inValor.value)

    numeroContas++
    valorTotal = valorTotal + valor

    lista += `${descricao} - R$: ${valor.toFixed(2)}\n`

    outLista.innerHTML = `${lista}----------------`
    outTotal.innerHTML = `${numeroContas} Conta(s) - Total R$: ${valorTotal.toFixed(2)}`

}
let btRegistrar = document.getElementById('btRegistrar')
btRegistrar.addEventListener('click', registrarConta)