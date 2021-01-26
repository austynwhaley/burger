var express = require("express");
                   
var burger = require("../models/burger.js");
          
var router = express.Router();


router.get("/", function (req, res) {
    burger.all(function (data) {
                        
        var burger = { burgers: data };
        
        res.render("index", burger);
    });
});

//Create
router.post("/add", function (req, res) {
        
    burger.create(req.body.burger_name, function (data) {
        
        res.redirect("/")
    });
});

//Update
router.post("/update/:id", function (req, res) {
     

});
//Delete
router.post("/delete/:id", function (req, res) { 

    
});

module.exports = router;         