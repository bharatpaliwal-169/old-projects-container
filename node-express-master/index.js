//EXPRESS SERVER

const express = require('express');
const http = require('http');

const hostname = 'localhost';
const port = 3000;

const morgan = require('morgan');
const app = express();

const bodyParser = require('body-parser');

const dishRouter = require('./routes/dishRouter');
const promoRouter = require('./routes/promoRouter');
const leaderRouter = require('./routes/leaderRouter');


app.use('/dishes', dishRouter);
app.use('/dishes/:dishId',dishRouter);

app.use('/promotions',promoRouter);
app.use('/promotions/:promoId',promoRouter);

app.use('/leaders',leaderRouter);
app.use('/leaders/:leaderId',leaderRouter);


app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());


// app.use((req,res,next)=> {
//     //console.log(res.headers);
//     res.statusCode = 200;
//     res.setHeader('Content-Type','text/html');
//     res.end('<html><body><h1> This is EXPRESS Server!!</h1></body></html>');
// });

app.all('/dishes',(req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
});

app.get('/dishes',(req,res,next)=>{
    res.end('Will send all the dishesto you!');
});

app.post('/dishes',(req,res,next)=>{
    res.end('will add the dish : ' + req.body.name + 'with Details : ' + req.body.description);
});
app.put('/dishes',(req,res,next)=>{
    res.statusCode = 403;
    res.end('PUT : operation does not support this dishes!');
})

app.delete('/dishes',(req,res,next)=>{
    res.end('Deleting all dishes!' +  'Its a Dangerous operation.');
});


//for a DISH ID......
//here put will work and post will not work..........

app.get('/dishes/:dishId', (req,res,next) => {
    res.end('Will send details of the dish: ' + req.params.dishId +' to you!');
});

app.post('/dishes/:dishId', (req, res, next) => {
  res.statusCode = 403;
  res.end('POST operation not supported on /dishes/'+ req.params.dishId);
});

app.put('/dishes/:dishId', (req, res, next) => {
  res.write('Updating the dish: ' + req.params.dishId + '\n');
  res.end('Will update the dish: ' + req.body.name + 
        ' with details: ' + req.body.description);
});

app.delete('/dishes/:dishId', (req, res, next) => {
    res.end('Deleting dish: ' + req.params.dishId);
});



const server = http.createServer(app);

server.listen(port,hostname,()=>{
    console.log(`Server  is Running at http://${hostname}:${port}/`);
});
