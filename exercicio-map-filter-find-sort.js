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

function mediasAlunas(medias) {
  let mediaAluna = medias.map((aluna) => {
    let media =
      ((aluna.prova.p1 + aluna.prova.p2 + aluna.prova.p3) / 3).toFixed(1) * 1
    return ({
      media: media,
      nome: aluna.nome,
      aprovadas: media >= 7
    })
  })
  return mediaAluna.filter((aluna) => aluna.media)
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

function arrayObjetos(alunas) {
  let medias = mediasAlunas(alunas).filter((alunas) => {
    if (alunas.media >= 7) {
      let aprovadas =
      {
        nome: alunas.nome,
        media: alunas.media,
        aprovadas: alunas.aprovadas
      }
      console.log(aprovadas)
    } else {
      let reprovadas =
      {
        nome: alunas.nome,
        media: alunas.media,
        aprovadas: alunas.aprovadas
      }
      console.log(reprovadas)
    }
  })
  return medias
}


//5) Fazer uma função que retorne o nome da aluna com maior nota

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


//console.log(mediasAlunas(alunas))
//console.log(nomesAprovadas(alunas))
// console.log(nomesReprovadas(alunas))
console.log(arrayObjetos(alunas))
//console.log(maiorNota(alunas))