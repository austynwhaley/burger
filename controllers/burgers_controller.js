var express = require("express");

var burger = require("../models/burger.js");

var router = express.Router();


router.get("/", function (req, res) {
   
});
//Create
router.post("/add", function (req, res) {
       
    
});
//Update
router.post("/update/:id", function (req, res) {
     

});
//Delete
router.post("/delete/:id", function (req, res) { 

    
});

module.exports = router;