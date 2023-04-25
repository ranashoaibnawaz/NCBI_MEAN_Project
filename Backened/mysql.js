const MySql = require('mysql');

const v_crt_con = MySql.createConnection({
    host:'localhost',
    user:'root',
    port:3306,
    database:'00000000',
    password:'00000000',
});

v_crt_con.connect((error)=>{
    if(error)
    {
        console.log("Error");
    }
    else{
        console.log("DB connect");
    }
});
module.exports=v_crt_con;