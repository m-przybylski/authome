const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = process.argv[2] || 8080

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text())

app.get('/', (req, res) => res.send('welcome to API'))

app.post('/echo', (req, res) => {
  return res.send(req.body)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))