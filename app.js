const mongoose = require('mongoose');
const http=require('http')
const fs =require('fs')
//
mongoose.connect('mongodb+srv://abbu1999:abbu1999@cluster8-coih1.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('MongoDb connected');
});
 
const fileContend = fs.readFileSync('index.html')
const server = http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'});
    res.end(fileContend)
})
server.listen(3000, '127.0.0.1',()=>{
    console.log('listening on port 3000')
})