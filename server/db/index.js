'use strict';
var db = require('./_db');
module.exports = db;

var User = require('./models/user');
var Product = require('./models/products');
var Order = require('./models/orders').Order
var Detail = require('./models/orders').Detail


User.hasMany(Product, {as: 'owned'})
Product.belongsTo(User);

User.hasMany(Product, {as: 'cart'});


Order.belongsTo(User);
// Order.hasMany(Product, {as: 'purchased'});
Detail.belongsTo(Order);
Detail.hasMany(Product, {as: 'purchased'} );

