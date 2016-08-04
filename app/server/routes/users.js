var
  input,
  add, del,
  list, single,
  login, register;

// Put your own APIs here

input = function (req, res, next){
  res.render('users', { title: 'Hello Beans!' });

};

// Add one new user into the database
//
add = function (req, res, next){
  console.log('add test ----------');
  console.log(req.body);

  //addUser(req, res, next);
  res.json({ status: true });
};

// Delete one user from the list
//
del = function (req, res, next) {
  console.log(req.body);
};

// List down all available users
//
list = function (req, res, next){

};

// Display a single user info
single = function (req, res, next){

};


module.exports = {
  input: input,
  single: single,
  list: list,
  add: add,
  del: del,
  login: login,
  register: register,
};
