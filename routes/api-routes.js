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

    // Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update
  app.put("/api/products", function(req, res) {
    db.Product.update({
      stock_quantity: req.body.stock_quantity,
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(dbProduct) {
      res.json(dbProduct);
    });
  });

};