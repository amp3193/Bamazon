module.exports = function(sequelize, DataTypes) {
    const Product = sequelize.define("Product", {
      name: DataTypes.STRING,
      department: DataTypes.STRING,
      price: DataTypes.FLOAT,
      stock_quantity:DataTypes.INTEGER
    });
    return Product;
  };


// The Product model should have each of the following fields:


// product_name (Name of product)


// department_name


// price (cost to customer)


// stock_quantity (how much of the product is available in stores)