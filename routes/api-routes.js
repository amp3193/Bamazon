var db = require("../models");

module.exports = function(app) {

  // all products
  app.get("/api/products/", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Product.findAll({})
    .then(function(dbProducts) {
      // We have access to the todos as an argument inside of the callback function
      res.json(dbProducts);
    });
  });

//find one product by id
  app.get("/api/products/:id", function(req, res) {
    db.Product.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbProduct) {
        res.json(dbProduct);
      });
  });

  //examples in case I need
  // // POST route for saving a new todo
  // app.post("/api/todos", function(req, res) {
  //   // create takes an argument of an object describing the item we want to
  //   // insert into our table. In this case we just we pass in an object with a text
  //   // and complete property
  //   db.Todo.create({
  //     text: req.body.text,
  //     complete: req.body.complete
  //   }).then(function(dbTodo) {
  //     // We have access to the new todo as an argument inside of the callback function
  //     res.json(dbTodo);
  //   });
  // });



  // // PUT route for updating todos. We can get the updated todo data from req.body
  // app.put("/api/todos", function(req, res) {
  //   // Update takes in an object describing the properties we want to update, and
  //   // we use where to describe which objects we want to update
  //   db.Todo.update({
  //     text: req.body.text,
  //     complete: req.body.complete
  //   }, {
  //     where: {
  //       id: req.body.id
  //     }
  //   }).then(function(dbTodo) {
  //     res.json(dbTodo);
  //   });
  // });

};



//**********************
// TODO fill in with bamazon stuff