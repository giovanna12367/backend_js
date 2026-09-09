import express from 'express'

const PORT = 3000
const app = express()

app.get('/', (req, res) => { // calback ou retorno
    res.send('<h3>Hello Pet!</h3>')
})
app.get('/servicos', (req, res) => { //callback ou retorno
  res.send('<h3>Serviços pet</>')
})


app.listen(PORT, () => { console.log('Servidor Vivo!')})