var express = require('express');
var router = express.Router();
 
router.get('/', (req,res,next) => {
    //if there is a method query string param in url do calculation
    if (req.query.method) {
        var method = req.query.method;
        var x = parseInt(req.query.x);
        var y = parseInt(req.query.y);
        //determine method type for calculation
        if (method == "add") {
          var data = {
          x: x,
          y: y,
          operation: method,
          result: x + y
          };        
          res.json(data).status(200); 
        }
        else if (method == "subtract") {
          var data = {
          x: x,
          y: y,
          operation: method,
          result: x - y
          };        
          res.json(data).status(200); 
        }
        else if (method == "multiply") {
          var data = {
          x: x,
          y: y,
          operation: method,
          result: x * y
          };        
          res.json(data).status(200); 
        }
        else if (method == "divide") {
          var data = {
          x: x,
          y: y,
          operation: method,
          result: x / y
          };        
          res.json(data).status(200); 
        }
        else {
          res.json('Error Message: Improper method param').status(500);
        }
    }
    //else if there is no method query string param in url show error message
    else if (!req.query.method) {
        console.log("Error Message: Missing method param");
        res.json('Error Message: Missing method param').status(500);
    }
});

module.exports = router;
