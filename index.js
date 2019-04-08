/*

const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => { 
	console.log("connected") 

	// create connection object ready to authenticate
	
	socket.on()



});
 
server.listen(3000, () => {
	console.log("listening at port 3000");
}

*/

const uWS = require('uWebSockets.js');

/* Non-SSL is simply uWS.App() */
uWS.App().ws('/*', {
  /* For brevity we skip the other events */
  message: (ws, message, isBinary) => {
    let ok = ws.send(message, isBinary);
  }
}).any('/*', (res, req) => {
  /* Let's deny all Http */
  res.end('Nothing to see here!');
}).listen(9001, (listenSocket) => {
  if (listenSocket) {
    console.log('Listening to port 9001');
  }
});