const Express = require('express');
const v_mysql = require('./mysql');
const cors = require('cors');
var bodyParser = require('body-parser');

const app = Express();
app.use(cors());
app.use(bodyParser.json())
const PORT = 2000;

// Get All The Data
app.get('/',(req,res)=>{
    const v_pro = 'SELECT * FROM breeds';
    const q = v_mysql.query(v_pro,(err,result)=>{
        if(err)
        {
            console.log("Error");
        }
        else{
           
            res.send(result);
        }
    });
});

//Get Only Cat Data
app.get('/cat',(req,res)=>{
    const v_pro = 'SELECT * FROM breeds where animal_type_id=3';
    const q = v_mysql.query(v_pro,(err,result)=>{
        if(err)
        {
            console.log("Error");
        }
        else{
           
            res.send(result);
        }
    });
});

//Get Only Dog Data
app.get('/dog',(req,res)=>{
    const v_pro = 'SELECT * FROM breeds where animal_type_id=2';
    const q = v_mysql.query(v_pro,(err,result)=>{
        if(err)
        {
            console.log("Error");
        }
        else{
           
            res.send(result);
        }
    });
});


//Get Only Bird Data
app.get('/bird',(req,res)=>{
    const v_pro = 'SELECT * FROM breeds where animal_type_id=1';
    const q = v_mysql.query(v_pro,(err,result)=>{
        if(err)
        {
            console.log("Error");
        }
        else{
           
            res.send(result);
        }
    });
});

//Create data
app.post('/breeds',(req, res)=>{
    // console.log(req.body, 'createdata');

    let pet_name = req.body.pet_name;
    let animal_type_id = req.body.animal_type_id;
    let average_life = req.body.average_life;
    let average_size = req.body.average_size;
    let common_color = req.body.common_color;
    let hair_color = req.body.hair_color;
    console.log(req.body.average_size,"Average size");
    let qr = `insert into breeds(name, avg_life, avg_size, animal_type_id, common_color, hair_color) values ('${pet_name || null}', ${average_life || null}, '${average_size || null}', ${animal_type_id || null}, '${common_color || null}', '${hair_color || null}')`;


    v_mysql.query(qr, (err, result)=>{
        if(err){console.log(err);}

        console.log(result, 'result');
        res.send({
            message: 'data inserted',
        });
    })
});

//Update single data
app.put('/breeds/:id', (req, res)=>{
    let qID = req.params.id;

    console.log(req.body, 'update data');
    
    let pet_name = req.body.pet_name;
    let animal_type_id = req.body.animal_type_id;
    let average_life = req.body.average_life;
    let average_size = req.body.average_size;
    let common_color = req.body.common_color;
    let hair_color = req.body.hair_color;


    let qr = `update breeds set name = '${pet_name || null}', animal_type_id = ${animal_type_id || null}, avg_life = ${average_life || null}, avg_size = '${average_size || null}', common_color = '${common_color || null}', hair_color = '${hair_color || null}' where id=${qID}`;

    console.log(qr,"Queryyyyyyyyyyyyyy");
    v_mysql.query(qr, (err, result)=>{
        if(err){console.log(err);}
        res.send({
            message: 'data updated',
        });
    })

});


//Delete single data
app.delete('/breeds/:id', (req, res)=>{
    let qID = req.params.id;
    let qr = `delete from breeds where id = ${qID}`;
    v_mysql.query(qr, (err, result)=>{
        if(err){console.log(err);}

        res.send({
            message: 'data deleted'
        });
    })
});


app.listen(PORT,()=>{
    console.log(`Our App is running on port ${PORT}`);
});
