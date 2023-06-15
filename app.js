var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var teste1 = require("./teste1");
var teste2 = require("./teste2");
var teste3 = require("./teste3");
var teste4 = require("./teste4");
var teste5 = require("./teste5");
var teste6 = require("./teste6");

app.set('view engine', 'jade');

app.use(function (req, res, next) {
  req.user = {
    id: 1,
    name: 'Testador Master',
    permission: [
      'delete',
      'update'
    ]
  };

  next();
});

app.use(express.json());
app.use(express.urlencoded());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.send(`get user/ </br>
  get users/ </br>
  post users/ </br>
  delete users/ </br>
  put users/ </br>
  `);
});

app.get("/user", teste1.getUserByName);
app.get("/users", teste1.getUsers);
app.post("/users", teste2.registerUser)
app.delete("/users", teste6.validatePermissions(['delete']), teste3.deleteUserByName)
app.put("/users", teste6.validatePermissions(['update']), teste4.updateUserData)
app.get("/users/access", teste5.getUserReadCount);


const port = 3000;
app.listen(port, function () {
  console.log('Express server listening on port ' + port);
});