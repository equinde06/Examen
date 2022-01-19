const express = require("express")
var router = express.Router()
const mongoose = require("mongoose")
const Routes = mongoose.model("Station")

router.get("/list", (req, res) => {
    Routes.find((err,docs) =>{
        if (!err) {
            res.render("router/list", {
                list: docs
            })
        } else {
            console.log("Error in retrieval: " + err)
        }
    });
});

router.get("/estaciones24-7", (req, res) => {
    Routes.find((err,docs) =>{
        if (!err) {
            res.render("router/estaciones24-7", {
                list: docs
            })
        } else {
            console.log("Error in retrieval: " + err)
        }
    });
});

router.get("/estacionesprivadas", (req, res) => {
    Routes.find((err,docs) =>{
        if (!err) {
            res.render("router/estaciones24-7", {
                list: docs
            })
        } else {
            console.log("Error in retrieval: " + err)
        }
    });
});

router.get("/estacionespublicas", (req, res) => {
    Routes.find((err,docs) =>{
        if (!err) {
            res.render("router/estaciones24-7", {
                list: docs
            })
        } else {
            console.log("Error in retrieval: " + err)
        }
    });
});



module.exports = router