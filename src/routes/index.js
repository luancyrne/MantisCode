const express = require('express');
const app = express();
const cheerio = require('cheerio');
const request = require('request');

app.get('/vagas', (req, res) => {
  request(`https://programathor.com.br/jobs-city/remoto`, (err, response, body) => {
    const $ = cheerio.load(body)
    let vagas = []
    let vagasLink = []
    let allVagas = []
    $('.cell-list').find('h3').each((index, element) => {
      vagas.push({ nome: $(element).text() })
    })
    $('.cell-list').find('a').each((index, element) => {
      vagasLink.push({ link: "https://programathor.com.br" + element.attributes[0].value })
    })

    for (let index = 0; index < vagas.length; index++) {
      allVagas.push({ nome: vagas[index].nome, link: vagasLink[index].link, Site:"ProgramaThor" })
    }

    res.send(allVagas)
  })
})

app.get('/vagas/:page', (req, res) => {
  request(`https://programathor.com.br/jobs-city/remoto?page=${req.params.page}`, (err, response, body) => {
    const $ = cheerio.load(body)
    let vagas = []
    let vagasLink = []
    let allVagas = []
    $('.cell-list').find('h3').each((index, element) => {
      vagas.push({ nome: $(element).text() })
    })
    $('.cell-list').find('a').each((index, element) => {
      vagasLink.push({ link: "https://programathor.com.br" + element.attributes[0].value })
    })

    for (let index = 0; index < vagas.length; index++) {
      allVagas.push({ nome: vagas[index].nome, link: vagasLink[index].link, Site:"ProgramaThor" })
    }

    res.send(allVagas)
  })
})

module.exports = app