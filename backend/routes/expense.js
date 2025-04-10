const express = require("express");
const route= express.Router();
const {addExpense} = require("../controllers/addExpense.js");
const {updateExpense}= require("../controllers/update.js");
const { deleteExpense } = require("../controllers/delete.js");

route.post('/addExpense',addExpense);
route.post('/update',updateExpense);
route.post('/delete',deleteExpense);

module.exports=route;