const alunas = [
  { nome: "Ashley", prova: { p1: 5.6, p2: 6.7, p3: 9 } },
  { nome: "Sabrina", prova: { p1: 6.3, p2: 7.5, p3: 10 } },
  { nome: "Samantha", prova: { p1: 8, p2: 9.2, p3: 7 } },
  { nome: "Andreia", prova: { p1: 9, p2: 8, p3: 10 } },
  { nome: "Raquel", prova: { p1: 10, p2: 9.7, p3: 5 } },
  { nome: "Amanda", prova: { p1: 2, p2: 4.6, p3: 9.9 } },
  { nome: "Pietra", prova: { p1: 8.3, p2: 3.1, p3: 9.8 } },
  { nome: "Jaqueline", prova: { p1: 3.4, p2: 7.2, p3: 6.8 } },
  { nome: "Alessandra", prova: { p1: 1.4, p2: 2.7, p3: 6.9 } },
  { nome: "Jane Kelly", prova: { p1: 7, p2: 5.5, p3: 9.1 } }
]

// 1) Fazer uma função que retorne um array de todas as médias

function mediasNotas(nota) {
  let notas = mediasAlunas(nota)
  let mediaNota = notas.map(notas => notas.media)
  return mediaNota
}

// 2) Fazer uma função que retorne um array de nomes das aprovadas

function nomesAprovadas(alunas) {
  //return mediasAlunas(alunas).filter(aluna => aluna.media >= 7).map(aluna => aluna.nome)

  let nomeAlunas = mediasAlunas(alunas).filter((aluna) => {
    if (aluna.media >= 7) {
      return aluna.nome
    }
  })
  return nomeAlunas.map((aluna) => aluna.nome)
}

//3) Fazer uma função que retorne um array de nome das reprovadas

function nomesReprovadas(alunas) {
  let nomeAlunas = mediasAlunas(alunas).filter((aluna) => {
    if (aluna.media < 7) {
      return aluna.nome
    }
  })
  return nomeAlunas.map((aluna) => aluna.nome)
}

//4) Fazer uma função que retorne um array de objetos

function mediasAlunas(medias) {
  let mediaAluna = medias.map((aluna) => {
    let media =
      ((aluna.prova.p1 + aluna.prova.p2 + aluna.prova.p3) / 3).toFixed(1) * 1
    return ({
      nome: aluna.nome,
      media: media,
      aprovadas: media >= 7
    })
  })
  return mediaAluna.filter((aluna) => aluna.media)
}

//6) Fazer uma função que retorne o nome da aluna com maior nota

function maiorNota(alunas) {
  let funcaoMedia = mediasAlunas(alunas)
  let mediaAlunas = funcaoMedia.map((alunas) => alunas.media)

  let mediaMax = mediaAlunas.reduce(function (a, b) {
    return Math.max(a, b)
  })

  let notaMaior = funcaoMedia.filter((aluna) => {
    if (aluna.media == mediaMax) {
      return aluna.nome
    }
  })
  return notaMaior
}

//7) Fazer uma função que retorne o nome da aluna com menor nota

function menorNota(alunas) {
  let funcaoMedia = mediasAlunas(alunas)
  let mediaAlunas = funcaoMedia.map((alunas) => alunas.media)

  let mediaMin = mediaAlunas.reduce(function (a, b) {
    return Math.min(a, b)
  })

  let notaMenor = funcaoMedia.filter((aluna) => {
    if (aluna.media == mediaMin) {
      return aluna.nome
    }
  })
  return notaMenor
}

//8) Fazer uma função que retorne a media de toda a turma

function mediaTotal(medias) {
  let mediaTurma = mediasAlunas(medias)
  let mediaAlunas = mediaTurma.map((media) => media.media)
  let mediaTotal = mediaAlunas.reduce((a, b) => a + b, 0)
  return (mediaTotal / mediaAlunas.length).toFixed(1)
}

// 1) Fazer uma função que retorne um array de todas as médias
console.log(mediasNotas(alunas))
// 2) Fazer uma função que retorne um array de nomes das aprovadas
console.log(nomesAprovadas(alunas))

// 3) Fazer uma função que retorne um array de nome das reprovadas
console.log(nomesReprovadas(alunas))

// 4) Fazer uma função que retorne um array de objetos:
console.log(mediasAlunas(alunas))

//6) Fazer uma função que retorne o nome da aluna com maior nota
console.log(maiorNota(alunas))

//7) Fazer uma função que retorne o nome da aluna com menor nota
console.log(menorNota(alunas))

//8) Fazer uma função que retorne a media de toda a turma
console.log(mediaTotal(alunas))
