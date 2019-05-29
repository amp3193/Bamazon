var db = require("../models");

module.exports = function (app) {

  // all products
  app.get("/api/products/", function (req, res) {
    db.Product.findAll({})
      .then(function (dbProducts) {
        res.json(dbProducts);
      });
  });

  //find one product by id
  app.get("/api/products/:id", function (req, res) {
    db.Product.findOne({
        where: {
          id: req.params.id
        }
      })
      .then(function (dbProduct) {
        res.json(dbProduct);
      });
  });

  // Updates the total quantities
  app.put("/api/products/:id", function (req, res) {
    db.Product.findOne({
      where: {
        id: req.params.id
      }
    })
    .then(function (result) {
      db.Product.update({
        stock_quantity: result.stock_quantity - req.body.quantity
      }, {
        where: {
          id: req.params.id
        }
      }).then(function (dbProduct) {
        res.json({
          status: true,
        });
      }).catch(function (error) {
        res.json({
          status: false,
          error,
        });
      });
    });
  });

};