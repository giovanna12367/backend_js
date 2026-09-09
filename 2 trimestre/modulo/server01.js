const http = require('node:http')
const path = require('node:path')
const fs = require('node:fs')
const porta = 8081

const home = path.join(__dirname, 'pages/index.html')
const sobre = path.join(__dirname, 'pages/sobre.html')
const error = path.join(__dirname, 'pages/404.html')

const Server = http.createServer((req, res) => {
    const novaUrl = new URL(req.url, `http://${req.headers.host}`)
    const caminhoUrl = novaUrl.pathname
    if (caminhoUrl === '/public/index.js') {
        res.statusCode = '200'
        res.setHeader('content-Type', 'text/html; charset=utf8')
        return res.end(fs.readFileSync(home, 'utf-8'))
    } 
    if (caminhoUrl === '/image/azulrosa.jpg') {
        res.statusCode = '200'
        res.setHeader('content-Type', 'text/html; charset=utf8')
        return res.end(fs.readFileSync(sobre, 'utf-8'))
    }
     if (caminhoUrl === '/public/estilo.css') {
        res.statusCode = '200'
        res.setHeader('content-Type', 'text/html; charset=utf8')
        return res.end(fs.readFileSync(error, 'utf-8'))
    }  if (caminhoUrl === '/pages/image/mo') {
        res.statusCode = '200'
        res.setHeader('content-Type', 'text/html; charset=utf8')
        return res.end(fs.readFileSync(error, 'utf-8'))
    }else {
        res.statusCode = '401'
        res.setHeader('content-Type', 'text/html; charset=utf8')
        res.end('<h3>401 NÃO AUTORIZADO</h3>')
    }
})

Server.listen(porta, () => {
    console.log(`Servidor rodando na porta http://localhost:${porta}`)
})
