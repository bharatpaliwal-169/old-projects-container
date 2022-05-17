const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send all the info about our LEADERS to you!');
})
.post((req, res, next) => {
    res.end('Will add the Leader: ' + req.body.name + ' with Id: ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /dishes');
})
.delete((req, res, next) => {
    res.end('Deleting all dishes');
});


leaderRouter.route('/:leaderId')
.get( (req,res,next) => {
    res.end('Will send details of this Leader: ' + req.params.leaderId +' to you!');
})

.post( (req, res, next) => {
  res.statusCode = 403;
  res.end('POST operation not supported on /Leaders/'+ req.params.leaderId);
})

.put( (req, res, next) => {
  res.write('Updating this Leader: ' + req.params.leaderId + '\n');
  res.end('Will update the Leader info: ' + req.body.name + 
        ' with details: ' + req.body.description);
})

.delete( (req, res, next) => {
    res.end('Deleting leader: ' + req.params.leaderId);
});

module.exports = leaderRouter;

