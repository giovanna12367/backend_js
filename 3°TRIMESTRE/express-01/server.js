import express from 'express'
import path from 'path'
const PORT = process.env.PORT || 3000
const app = express()
const baseDir = import.meta.dirname
//middleware(guardião)

app.use(express.static(path.join(baseDir, 'public')))

app.get('/servicos', (req, res) => { //callback ou retorno
  res.send('<h3>Serviços pet</>')
})


app.listen(PORT, () => { console.log('Servidor Vivo!')})