//--------------------------------------signup call--------------------------------------------
exports.signup = function(req, res){
   message = '';
   
   if(req.method == "POST"){
      var post  = req.body;
      var name= post.user_name;
      var pass= post.password;
      var fname= post.first_name;
      var lname= post.last_name;
      var mob= post.mob_no;

      var sql = "INSERT INTO `users`(`first_name`,`last_name`,`mob_no`,`user_name`, `password`) VALUES ('" + fname + "','" + lname + "','" + mob + "','" + name + "','" + pass + "')";

      var query = db.query(sql, function(err, result) {

         message = "Succesfully! Your account has been created.";
         res.render('signup.ejs',{message: message});
      });

   } else {
      res.render('signup');
   }
};
 
//-----------------------------------------------login page call------------------------------------------------------
exports.login = function(req, res){
   var message = '';
   var sess = req.session; 

   if(req.method == "POST"){
      var post  = req.body;
      var name= post.user_name;
      var pass= post.password;
     
      var sql="SELECT id, first_name, last_name, user_name FROM `users` WHERE `user_name`='"+name+"' and password = '"+pass+"'";  
      console.log(name);                         
      db.query(sql, function(err, results){      
         if(results.length){
            req.session.userId = results[0].id;
            req.session.user = results[0];
            console.log(results[0].id);
            res.redirect('/dashboard');
         }
         else{
            message = 'Wrong Credentials.';
            res.render('index.ejs',{message: message});
         }
                 
      });
   } else {
      res.render('index.ejs',{message: message});
   }
           
};
//----------------------------------------dashboard page----------------------------------------------------------
exports.dashboard = function(req, res, next) {
  
   if(req.method == "POST"){
      var post  = req.body;
      
      
      
      // Proceed with form submission
      var Advertising= post.Advertising;
      var PAF= post.PAF;
      var DS= post.DS;
      var fname= post.fname;
      var mname= post.mname;
      var lname= post.lname;
      var nationality= post.nationality;
      var dob= post.dob;
      var gender= post.gender;
      var mstatus= post.mstatus;
      var id_proof= post.id_proof;
      var pic= post.pic;
      var father_name= post.father_name;
      var photo= post.photo;
      var mobile= post.mobile;
      var amobile= post.amobile;
      var aemail= post.aemail;
      var cadd= post.cadd;
      var cadd1= post.cadd1;
      var cadd2= post.cadd2;
      var cadd3= post.cadd3;
      var cadd4= post.cadd4;
      var padd= post.padd;
      var padd1= post.padd1;
      var padd2= post.padd2;
      var padd3= post.padd3;
      var padd4= post.padd4;
      
      var sql = "INSERT INTO `page1`(`Advertising`, `PAF`, `DS`, `fname`, `mname`, `lname`, `nationality`, `dob`, `gender`, `mstatus`, `id_proof`, `pic`, `father_name`, `photo`, `mobile`, `amobile`, `aemail`, `cadd`, `cadd1`, `cadd2`, `cadd3`, `cadd4`, `padd`, `padd1`, `padd2`, `padd3`, `padd4`) VALUES ('" + Advertising + "', '" + PAF + "', '" + DS + "', '" + fname + "', '" + mname + "', '" + lname + "', '" + nationality + "', '" + dob + "', '" + gender + "', '" + mstatus + "', '" + id_proof + "', '" + pic + "', '" + father_name + "', '" + photo + "', '" + mobile + "', '" + amobile + "', '" + aemail + "', '" + cadd + "', '" + cadd1 + "', '" + cadd2 + "', '" + cadd3 + "', '" + cadd4 + "', '" + padd + "', '" + padd1 + "', '" + padd2 + "', '" + padd3 + "', '" + padd4 + "')";

      var query = db.query(sql, function(err, result) {
         if (err) {
            // Handle error
            console.error(err);
            res.status(500).send("Error occurred while saving data.");
         } else {
            // Data inserted successfully, redirect to page 2
            console.log('appi');
            res.redirect('/page');
         }
      });

   } else {
      res.render('dashboard');
   }
};
//------------------------------page 2----------------------------
exports.page = function(req, res, next) {
   if (req.method == "POST") {
       var post = req.body;
       var ui = post.ui;
       var dp = post.dp;
       var name = post.name;
       var year = post.year;
       var date = post.date;
       var da = post.da;
       var title = post.title;
       var dc1 = post.dc1;
       var ui1 = post.ui1;
       var bs2 = post.bs2;
       var yj2 = post.yj2;
       var yc2 = post.yc2;
       var d2 = post.d2;
       var pc2 = post.pc2;
       var di2 = post.di2;
       var dc3 = post.dc3;
       var ui3 = post.ui3;
       var bs3 = post.bs3;
       var yj3 = post.yj3;
       var yc3 = post.yc3;
       var d3 = post.d3;
       var pc3 = post.pc3;
       var d4 = post.d4;
       var school1=post.school1;
       var perce1=post.perce1;
       var year1=post.year1;
       var school2=post.school2;
       var perce2=post.perce2;
       var year2=post.year2;
       var deg1=post.deg1;
       var un1=post.un1;
       var br1=post.br1;
       var y1=post.y1;
       var c1=post.c1;
       var deg2=post.deg2;
       var un2=post.un2;
       var br2=post.br2;
       var y2=post.y2;
       var c2=post.c2;

       var sql = "INSERT INTO `page2`(`ui`, `dp`, `name`, `year`, `date`, `da`, `title`, `dc1`, `ui1`, `bs2`, `yj2`, `yc2`, `d2`, `pc2`, `di2`, `dc3`, `ui3`, `bs3`, `yj3`, `yc3`, `d3`, `pc3`, `d4`, `school1`, `perce1`, `year1`, `school2`, `perce2`, `year2`, `deg1`, `un1`, `br1`, `y1`, `c1`, `deg2`, `un2`, `br2`, `y2`, `c2`) VALUES ('" + ui + "', '" + dp + "', '" + name + "', '" + year + "', '" + date + "', '" + da + "', '" + title + "', '" + dc1 + "', '" + ui1 + "', '" + bs2 + "', '" + yj2 + "', '" + yc2 + "', '" + d2 + "', '" + pc2 + "', '" + di2 + "', '" + dc3 + "', '" + ui3 + "', '" + bs3 + "', '" + yj3 + "', '" + yc3 + "', '" + d3 + "', '" + pc3 + "', '" + d4 + "', '" + school1 + "', '" + perce1 + "', '" + year1 + "', '" + school2 + "', '" + perce2 + "', '" + year2 + "', '" + deg1 + "', '" + un1 + "', '" + br1 + "', '" + y1 + "', '" + c1 + "', '" + deg2 + "', '" + un2 + "', '" + br2 + "', '" + y2 + "', '" + c2 + "')";

       var query = db.query(sql, function(err, result) {
           if (err) {
               console.error(err);
               res.status(500).send("Error occurred while saving data.");
           } else {
               res.redirect('/page3');
           }
       });
   } else {
       res.render('page');
   }
};
//----------------------------------page3--------------------------------------------------------------
exports.page3 = function(req, res, next) {
   if (req.method == "POST") {
      var post = req.body;
      var pn = post.pn;
      var oi = post.oi;
      var dj = post.dj;
      var dl = post.dl;
      var st = post.st;
      var p1 = post.p1;
      var o1 = post.o1;
      var y1 = post.y1;
      var p2 = post.p2;
      var o2 = post.o2;
      var y2 = post.y2;
      var yes=post.yes;
      var no=post.no;
      var p5 = post.p5;
      var o5 = post.o5;
      var s5 = post.s5;
      var y5 = post.y5;
      var p6 = post.p6;
      var o6 = post.o6;
      var s6 = post.s6;
      var y6 = post.y6;
      var p3 = post.p3;
      var o3 = post.o3;
      var s3 = post.s3;
      var y3 = post.y3;
      var p4 = post.p4;
      var o4 = post.o4;
      var s4 = post.s4;
      var y4 = post.y4;
      var as = post.as;
      var ca = post.ca;
      var sql = "INSERT INTO `page3`(`pn`, `oi`, `dj`, `dl`, `st`, `p1`, `o1`, `y1`, `p2`, `o2`, `y2`,`yes`,`no`, `p5`, `o5`, `s5`, `y5`, `p6`, `o6`, `s6`, `y6`, `p3`, `o3`, `s3`, `y3`, `p4`, `o4`, `s4`, `y4`, `as`, `ca`) VALUES ('" + pn + "', '" + oi + "', '" + dj + "', '" + dl + "', '" + st + "', '" + p1 + "', '" + o1 + "', '" + y1 + "', '" + p2 + "', '" + o2 + "', '" + y2 + "','" +yes+"','"+no+"', '" + p5 + "', '" + o5 + "', '" + s5 + "', '" + y5 + "', '" + p6 + "', '" + o6 + "', '" + s6 + "', '" + y6 + "', '" + p3 + "', '" + o3 + "', '" + s3 + "', '" + y3 + "', '" + p4 + "', '" + o4 + "', '" + s4 + "', '" + y4 + "', '" + as + "', '" + ca + "')";
      var query = db.query(sql, function(err, result) {
         if (err) {
             console.error(err);
             res.status(500).send("Error occurred while saving data.");
         } else {
             res.redirect('/page4');
         }
     });
 } else {
     res.render('page3');
 }
};
//-------------------------------------------page 5------------------
exports.page5 = function(req, res, next) {
   if (req.method == "POST") {
      var post = req.body;
      var ijp=post.ijp;
      var njp=post.njp;
      var icp=post.icp;
      var ncp=post.ncp;
      var np=post.np;
      var nb=post.nb;
      var nbc=post.nbc;
      var x1 = post.x1;
      var y1 = post.y1;
      var x2 = post.x2;
      var y2 = post.y2;
      var x3 = post.x3;
      var y3 = post.y3;
      var h1 = post.h1;
      var i1 = post.i1;
      var j1 = post.j1;
      var k1 = post.k1;
      var h2 = post.h2;
      var i2 = post.i2;
      var j2 = post.j2;
      var k2 = post.k2;
      var h3 = post.h3;
      var i3 = post.i3;
      var j3 = post.j3;
      var k3 = post.k3;
      var u1 = post.u1;
      var v1 = post.v1;
      var w1 = post.w1;
      var a1 = post.a1;
      var a2 = post.a2;
      var a3 = post.a3;
      var a4 = post.a4;
      var a5 = post.a5;
      var a6 = post.a6;
      var b1 = post.b1;
      var b2 = post.b2;
      var b3 = post.b3;
      var b4 = post.b4;
      var b5 = post.b5;
      var b6 = post.b6;
      var c1 = post.c1;
      var c2 = post.c2;
      var c3 = post.c3;
      var c4 = post.c4;
      var c5 = post.c5;
      var c6 = post.c6;
      var d1 = post.d1;
      var d2 = post.d2;
      var d3 = post.d3;
      var d4 = post.d4;
      var d5 = post.d5;
      var d6 = post.d6;
      var e1 = post.e1;
      var e2 = post.e2;
      var e3 = post.e3;
      var e4 = post.e4;
      var e5 = post.e5;
      var e6 = post.e6;
      var f1 = post.f1;
      var f2 = post.f2;
      var f3 = post.f3;
      var f4 = post.f4;
      var f5 = post.f5;
      var f6 = post.f6;
      var sql = "INSERT INTO `page5`(`x1`,`y1`,`x2`,`y2`,`x3`,`y3`,`h1`,`i1`,`j1`,`k1`,`h2`,`i2`,`j2`,`k2`,`h3`,`i3`,`j3`,`k3`,`u1`,`v1`,`w1`,`a1`,`a2`,`a3`,`a4`,`a5`,`a6`,`b1`,`b2`,`b3`,`b4`,`b5`,`b6`,`c1`,`c2`,`c3`,`c4`,`c5`,`c6`,`d1`,`d2`,`d3`,`d4`,`d5`,`d6`,`e1`,`e2`,`e3`,`e4`,`e5`,`e6`,`f1`,`f2`,`f3`,`f4`,`f5`,`f6`) VALUES ('"+x1+"','"+y1+"','"+x2+"','"+y2+"','"+x3+"','"+y3+"','"+h1+"','"+i1+"','"+j1+"','"+k1+"','"+h2+"','"+i2+"','"+j2+"','"+k2+"','"+h3+"','"+i3+"','"+j3+"','"+k3+"','"+u1+"','"+v1+"','"+w1+"','"+a1+"','"+a2+"','"+a3+"','"+a4+"','"+a5+"','"+a6+"','"+b1+"','"+b2+"','"+b3+"','"+b4+"','"+b5+"','"+b6+"','"+c1+"','"+c2+"','"+c3+"','"+c4+"','"+c5+"','"+c6+"','"+d1+"','"+d2+"','"+d3+"','"+d4+"','"+d5+"','"+d6+"','"+e1+"','"+e2+"','"+e3+"','"+e4+"','"+e5+"','"+e6+"','"+f1+"','"+f2+"','"+f3+"','"+f4+"','"+f5+"','"+f6+"')";
      var query = db.query(sql, function(err, result) {
         if (err) {
             console.error(err);
             res.status(500).send("Error occurred while saving data.");
         } else {
             res.redirect('/page6');
         }
     });
 } else {
     res.render('page5');
 }
};
//-------------------------------------------------page 4-------------------
exports.page4 = function(req, res, next) {
   if (req.method == "POST") {
      var post = req.body;
      var a1 = post.a1;
      var b1 = post.b1;
      var c1 = post.c1;
      var d1 = post.d1;
      var e1 = post.e1;
      var f1 = post.f1;
      var g1 = post.g1;
      var a2 = post.a2;
      var b2 = post.b2;
      var c2 = post.c2;
      var d2 = post.d2;
      var e2 = post.e2;
      var f2 = post.f2;
      var g2 = post.g2;
      var a3 = post.a3;
      var b3 = post.b3;
      var c3 = post.c3;
      var d3 = post.d3;
      var e3 = post.e3;
      var f3 = post.f3;
      var g3 = post.g3;

      var h1 = post.h1;
      var i1 = post.i1;
      var j1 = post.j1;
      var k1 = post.k1;
      var l1 = post.l1;
      var m1 = post.m1;
      var n1 = post.n1;
      var h2 = post.h2;
      var i2 = post.i2;
      var j2 = post.j2;
      var k2 = post.k2;
      var l2 = post.l2;
      var m2 = post.m2;
      var n2 = post.n2;
      var h3 = post.h3;
      var i3 = post.i3;
      var j3 = post.j3;
      var k3 = post.k3;
      var l3 = post.l3;
      var m3 = post.m3;
      var n3 = post.n3;
      
      var h4 = post.h4;
      var i4 = post.i4;
      var j4 = post.j4;
      var k4 = post.k4;
      var h5 = post.h5;
      var i5 = post.i5;
      var j5 = post.j5;
      var k5 = post.k5;
      var h6 = post.h6;
      var i6 = post.i6;
      var j6 = post.j6;
      var k6 = post.k6;
      var h7 = post.h7;
      var i7 = post.i7;
      var j7 = post.j7;
      var k7 = post.k7;
      var h8 = post.h8;
      var i8 = post.i8;
      var j8 = post.j8;
      var k8 = post.k8;
      var h9 = post.h9;
      var i9 = post.i9;
      var j9 = post.j9;
      var k9 = post.k9;
      var googleScholarLink=post.googleScholarLink;
      
      var sql = "INSERT INTO `page4`(`googleScholarLink`,`a1`,`b1`,`c1`,`d1`,`e1`,`f1`,`g1`,`a2`,`b2`,`c2`,`d2`,`e2`,`f2`,`g2`,`a3`,`b3`,`c3`,`d3`,`e3`,`f3`,`g3`,`h1`,`i1`,`j1`,`k1`,`l1`,`m1`,`n1`,`h2`,`i2`,`j2`,`k2`,`l2`,`m2`,`n2`,`h3`,`i3`,`j3`,`k3`,`l3`,`m3`,`n3`,`h4`,`i4`,`j4`,`k4`,`h5`,`i5`,`j5`,`k5`,`h6`,`i6`,`j6`,`k6`,`h7`,`i7`,`j7`,`k7`,`h8`,`i8`,`j8`,`k8`,`h9`,`i9`,`j9`,`k9`) VALUES ('"+googleScholarLink+"','" + a1 + "','" + b1 + "','" + c1 + "','" + d1 + "','" + e1 + "','" + f1 + "','" + g1 + "','" + a2 + "','" + b2 + "','" + c2 + "','" + d2 + "','" + e2 + "','" + f2 + "','" + g2 + "','" + a3 + "','" + b3 + "','" + c3 + "','" + d3 + "','" + e3 + "','" + f3 + "','" + g3 + "','" + h1 + "','" + i1 + "','" + j1 + "','" + k1 + "','" + l1 + "','" + m1 + "','" + n1 + "','" + h2 + "','" + i2 + "','" + j2 + "','" + k2 + "','" + l2 + "','" + m2 + "','" + n2 + "','" + h3 + "','" + i3 + "','" + j3 + "','" + k3 + "','" + l3 + "','" + m3 + "','" + n3 + "','" + h4 + "','" + i4 + "','" + j4 + "','" + k4 + "','" + h5 + "','" + i5 + "','" + j5 + "','" + k5 + "','" + h6 + "','" + i6 + "','" + j6 + "','" + k6 + "','" + h7 + "','" + i7 + "','" + j7 + "','" + k7 + "','" + h8 + "','" + i8 + "','" + j8 + "','" + k8 + "','" + h9 + "','" + i9 + "','" + j9 + "','" + k9 + "')";
      var query = db.query(sql, function(err, result) {
         if (err) {
             console.error(err);
             res.status(500).send("Error occurred while saving data.");
         } else {
             res.redirect('/page5');
         }
     });
 } else {
     res.render('page4');
 }
};





//-------------------------------------------page 6--------------------
exports.page6 = function(req, res, next) {
   if (req.method == "POST") {
      var post = req.body;
      var p1 = post.p1;
      var r1 = post.r1;
      var y1 = post.y1;
      var p2 = post.p2;
      var r2 = post.r2;
      var y2 = post.y2;
      var p3 = post.p3;
      var r3 = post.r3;
      var y3 = post.y3;
      var sql = "INSERT INTO `page6`(`p1`,`r1`,`y1`,`p2`,`r2`,`y2`,`p3`,`r3`,`y3`) VALUES ('"+p1+"','"+r1+"','"+y1+"','"+p2+"','"+r2+"','"+y2+"','"+p3+"','"+r3+"','"+y3+"')";
      var query = db.query(sql, function(err, result) {
         if (err) {
             console.error(err);
             res.status(500).send("Error occurred while saving data.");
         } else {
             res.redirect('/page7');
         }
     });
 } else {
   res.render('page6');
 }
};
//-------------------------------------page 7------------
exports.page7 = function(req, res, next) {
   if (req.method == "POST") {
      var post = req.body;
      var ca=post.ca;
      var pa=post.pa;
      var ta=post.ta;
      var sql="INSERT INTO `page7`(`ca`,`pa`,`ta`) VALUES ('"+ca+"','"+pa+"','"+ta+"')";
      var query = db.query(sql, function(err, result) {
         if (err) {
             console.error(err);
             res.status(500).send("Error occurred while saving data.");
         } else {
             res.redirect('/page8');
         }
     });
 } else {
     res.render('page7');
 }
};
//-------------------------------page 8------------------------------
exports.page8 = function(req, res, next) {
   if (req.method == "POST") {
      var post = req.body;
      var pic1=post.pic1;
      var pic2=post.pic2;
      var pic3=post.pic3;
      var pic4=post.pic4;
      var pic5=post.pic5;
      var pic6=post.pic6;
      var pic7=post.pic7;
      var pic8=post.pic8;
      var pic9=post.pic9;
      var pic10=post.pic10;
      var n5=post.n5;
      var p5=post.p5;
      var o5=post.o5;
      var s5=post.s5;
      var y5=post.y5;
      var n6=post.n6;
      var p6=post.p6;
      var o6=post.o6;
      var s6=post.s6;
      var y6=post.y6;
      var sql="INSERT INTO `page8`(`pic1`,`pic2`,`pic3`,`pic4`,`pic5`,`pic6`,`pic7`,`pic8`,`pic9`,`pic10`,`n5`,`p5`,`o5`,`s5`,`y5`,`n6`,`p6`,`o6`,`s6`,`y6`) VALUES ('"+pic1+"','"+pic2+"','"+pic3+"','"+pic4+"','"+pic5+"','"+pic6+"','"+pic7+"','"+pic8+"','"+pic9+"','"+pic10+"','"+n5+"','"+p5+"','"+o5+"','"+s5+"','"+y5+"','"+n6+"','"+p6+"','"+o6+"','"+s6+"','"+y6+"')";
      var query = db.query(sql, function(err, result) {
         if (err) {
             console.error(err);
             res.status(500).send("Error occurred while saving data.");
         } else {
             res.redirect('/page9');
         }
     });
 } else {
     res.render('page8');
 }
};   
//----------------------------------------page 9------------------------------------------------------
exports.page9 = function(req, res, next) {
   if (req.method == "POST") {
      var post = req.body;
      var yes=post.yes;
      var sql="INSERT INTO `page9`(`yes`) VALUES ('"+yes+"')";
      var query = db.query(sql, function(err, result) {
         if (err) {
             console.error(err);
             res.status(500).send("Error occurred while saving data.");
         } else {
             res.redirect('/page10');
         }
     });
 } else {
     res.render('page9');
 }
}; 
//-----------------------------------------------page 10----------------------
exports.page10 = function(req, res, next) {
   if (req.method == "POST") {
      const PDFDocument = require('pdfkit');
const fs = require('fs');
      var sql="SELECT * FROM page1";
      var query = db.query(sql, function(err, result,feilds) {
         // Create a new PDF document
         console.log(result);
         const doc = new PDFDocument();
         doc.pipe(fs.createWriteStream('page1.pdf'));
         console.log('sri1');
         
         // Write data from the database to the PDF
         result.forEach((row) => {
            console.log('sri2');
            console.log(row);
           doc.text(JSON.stringify(row));
           doc.moveDown();
         });
     
         // Finalize the PDF and close the connection
         doc.end();
         console.log('PDF generated successfully');
         res.redirect('/page11');
       });
      }else{
         res.render('page10');
      }
   };



//------------------------------------------------page 11-----------------------
exports.page11 = function(req, res, next) {
   res.render('page11');
};





//------------------------------------logout functionality----------------------------------------------
exports.logout=function(req,res){
   req.session.destroy(function(err) {
      res.redirect("/login");
   })
};
//--------------------------------render user details after login--------------------------------
exports.profile = function(req, res){

   var userId = req.session.userId;
   if(userId == null){
      res.redirect("/login");
      return;
   }

   var sql="SELECT * FROM `users` WHERE `id`='"+userId+"'";          
   db.query(sql, function(err, result){  
      res.render('profile.ejs',{data:result});
   });
};
//---------------------------------edit users details after login----------------------------------
exports.editprofile=function(req,res){
   var userId = req.session.userId;
   if(userId == null){
      res.redirect("/login");
      return;
   }

   var sql="SELECT * FROM `users` WHERE `id`='"+userId+"'";
   db.query(sql, function(err, results){
      res.render('edit_profile.ejs',{data:results});
   });
};