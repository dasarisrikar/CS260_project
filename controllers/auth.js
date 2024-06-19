const mysql = require("mysql");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = mysql.createConnection({
    host:process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password:process.env.DATABASE_PASSWORD,
    database:process.env.DATABASE
});

exports.register = (req,res)=>{
    console.log(req.body);

    // const name = req.body.name;
    // const email = req.body.email;
    // const password = req.body.password;
    // const passwordconfirm = req.body.passwordconfirm;

    const { name,email,password,passwordconfirm} = req.body;
//to email not to repeat
db.connect(function(error){
    if(error) throw error
    else console.log("connected to database successfully!")
});
    db.query('SELECT email FROM info WHERE email = ?', [email], async(error,results)=>{
          if(error){
            console.log(error);
          }
          if(results.length > 0){
             return res.render('register',{
                message:'that email is already in  use'
             });
          }else if(password!==passwordconfirm){
            return res.render('register',{
                message:'passwords donot match'
            });
          }
    // let hashedpassword = await bcrypt.hash(password,8);
    // console.log(hashedpassword);

    db.query('INSERT INTO info SET ?',{name: name,email: email,password: password},(error,results)=>{
        if(error){
            console.log(error);
        } else{
            console.log(results);
            res.redirect('/f1');
        }
    });

    });
 
   
}
