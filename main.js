const form = document.getElementById('form')
const imgAprovado = '<img src="./images/aprovado.png" alt="Imagem Aprovado"></img>'
const imgReprovado = '<img src="./images/reprovado.png" alt="Imagem Reprovado"></img>'
const atividades = []
const notas = []

let linhas = ''

form.addEventListener('submit', function(e){
    e.preventDefault()

    addLinha()
    atualizaTabela()
    mediaFinal()
})

function addLinha() {
    const txtAtiv = document.getElementById('txtAtiv')
    const txtNota = document.getElementById('txtNota')

    atividades.push(txtAtiv.value)
    notas.push(Number(txtNota.value))

    let linha = '<tr>'
    linha += `<td>${txtAtiv.value}</td>`
    linha += `<td>${txtNota.value}</td>`
    linha += `<td>${txtNota.value >= 6 ? imgAprovado : imgReprovado}</td>`
    linha += `</tr>`
    linhas += linha

    txtAtiv.value = ''
    txtNota.value = ''
}

function atualizaTabela() {
    const corpoTabela = document.getElementById('corpoTabela')
    corpoTabela.innerHTML = linhas
}

function mediaFinal() {
    
}