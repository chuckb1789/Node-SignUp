var express = require('express')

app = express();

app.get('/', function(req, res, next){
    res.send("<form method='post' action='/formsubmit'><input name='email' type='email'> <input type='submit'></form>");
    next();
})

app.post('/formsubmit', function(req, res, next){
    res.redirect('/success');
    next();
})

app.get('/success', function (req, res, next) {
    res.send('Success!');
})

var PORT = process.env.PORT || 8080;

app.listen(PORT, function () {
  console.log("server is up and listening to port", PORT);
})
