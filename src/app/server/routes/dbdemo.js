// var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "hr",
//   port:3306,
//   database:"protel_teleservices"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!!!!!");
// }); 

// function getPlans(callback)
// {
//     sql = 'select * from ott_plans';
//     var response ;
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("Get All Plans : " );
//       // console.log(result);
//       callback(result);
//     });
// }

//  exports.getPlans = getPlans;
