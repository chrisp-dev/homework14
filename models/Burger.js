module.exports = function (sqlize, DataTypes) {
    return sqlize.define("Burger", {
        name: DataTypes.STRING,
        devoured: DataTypes.BOOLEAN
    });
}