const express = require('express')
const DB=require("./connection.js")
const router = express.Router()
router.get("/",(req,res)=>{
    DB.query(`SELECT * FROM blogs`,(err,blogPost)=>{
    if(err)
    {
        console.log("err")
    }else
    {
        res.render("home.ejs")
    }
    })
})


module.exports = router