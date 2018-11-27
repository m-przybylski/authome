import * as express from 'express';
import * as bodyParser from 'body-parser'
import * as http from 'http';
import * as WebSocket from 'ws';
import { echoController } from './controllers/home';
import { AuthController } from './controllers/auth';

const app = express()
const server = http.createServer(app);
const wss = new WebSocket.Server({server})
const port = process.argv[2] || 8080
const a = new AuthController();
wss.on('connection', (ws) => {
  console.log('connection is up');
  console.log('start listening for messages');
  ws.send('Hello world!');

  ws.on('message', (msg) => {
    console.log('message receiver: ', msg);
  })
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text())


app.get('/', (req, res) => res.send('welcome to API'))

app.post('/echo', echoController)

server.listen(port, () => console.log(`Example app listening on port ${port}!`))

console.log('hi')