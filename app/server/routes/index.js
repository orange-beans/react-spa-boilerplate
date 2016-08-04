var
  index,
  users = require('./users');

index = function (req, res) {
  console.log(res.app.locals);
  console.log(req.cookies);
};

module.exports = {
  index : index,
  users : users,
};
