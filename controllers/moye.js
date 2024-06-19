const mysql = require('mysql');
const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD || '', // Empty string for no password
    database: process.env.DATABASE
});
db.connect(function(error){
    if(error) throw error
    else console.log("connected to database successfully!")
});

exports.signin = (req, res) => {
    const { email, password } = req.body;

    db.query('SELECT * FROM info WHERE email = ? AND password = ?', [email, password], (error, results) => {
        if (error) {
            console.log(error);
            return res.render('signin', {
                message: 'An error occurred'
            });
        }
        if (results.length === 0) {
            return res.render('signin', {
                message: 'Invalid email or password'
            });
        }

        console.log('User signed in:', results[0]);
        res.redirect('/f1'); // Redirect to /f1 route after successful sign-in
    });
};
