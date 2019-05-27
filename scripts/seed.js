const db = require("../models");
const products = require("./products.json");

db.sequelize.sync({ force: true }).then(function () {
    return db.Product.bulkCreate(products);
}).then(function () {
    db.sequelize.close();
}).catch(function (err) {
    console.log(err);
});