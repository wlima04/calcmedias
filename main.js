const form = document.getElementById('form')
const txtAtiv = document.getElementById('txtAtiv')
const txtNota = document.getElementById('txtNota')
const spanRes = document.getElementById('res')
const imgAprovado = '<img src="./images/aprovado.png" alt="Imagem Aprovado"></img>'
const imgReprovado = '<img src="./images/reprovado.png" alt="Imagem Reprovado"></img>'
const atividades = []
const notas = []

let linhas = ''

form.addEventListener('submit', function(e){
    e.preventDefault()

    addLinha()
    atualizaTabela()
    atualizaMediaFinal()
})

function addLinha() {
    if (atividades.includes(txtAtiv.value)) {
        alert('[ERRO] A atividade já foi inserida, tente novamente!')
    } else {
        let linha = '<tr>'
        linha += `<td>${txtAtiv.value}</td>`
        linha += `<td>${txtNota.value}</td>`
        linha += `<td>${txtNota.value >= 6 ? imgAprovado : imgReprovado}</td>`
        linha += `</tr>`
        linhas += linha
    }
    
    atividades.push(txtAtiv.value)
    notas.push(Number(txtNota.value))

    txtAtiv.value = ''
    txtNota.value = ''
}

function atualizaTabela() {
    const corpoTabela = document.getElementById('corpoTabela')
    corpoTabela.innerHTML = linhas
}

function atualizaMediaFinal() {
    const media = calcMediaFinal()

    const mediaF = document.getElementById('mediaF')
    mediaF.innerHTML = `${media.toFixed(2)}`
    
    document.getElementById('res').innerHTML = media >= 6 ? 'Aprovado' : 'Reprovado'
}

function calcMediaFinal() {
    let somaDasNotas = 0
    
    for (let i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i]
    }
    
    return somaDasNotas / notas.length
}