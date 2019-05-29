module.exports = function(sequelize, DataTypes) {
    const Product = sequelize.define("Product", {
      name: DataTypes.STRING,
      department: DataTypes.STRING,
      price: DataTypes.FLOAT,
      imgSrc: DataTypes.STRING,
      stock_quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: {
            args: [0],
            msg: "Insufficient Quantity"
          }
        }
       } 
    });
    return Product;
  };
