/**
 * Created by lekswalker on 13.10.14.
 */
var _ = require("underscore");
var data = [{id:1,fruit:"Яблоко"},{id:2,fruit:"Слива"},{id:3,fruit:"Груша"}];

var apple = _.findWhere(data,{fruit:"Яблоко"});

console.log(apple.id);