
const express=require('express')
const mysql = require('mysql')


const DB = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'blog'
})

DB.connect((err)=>{
  if(!err)
  {
    console.log("connected to database")
    DB.query(`SELECT * FROM blogs`,(err,res)=>{
      if(err)
      {
        console.log("Creating Table")
        DB.query(`CREATE TABLE blogs(
          id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
          title VARCHAR(60) NOT NULL,
          img_url TEXT NOT NULL,
          description VARCHAR(100) NOT NULL,
          created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )`)
        console.log("Table Created")
      }else{
        console.log("table already exist")
      }
    })
  }else{
    console.log("failed to connect")
  }

})



module.exports = DB