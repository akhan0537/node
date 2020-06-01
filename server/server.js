let express = require("express");
let oracledb = require("oracledb");
let bodyParser = require("body-parser");
let cors = require("cors");

let app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//this is the middleware/comparison/authenticatoin function
let auth = (req,res,next)=>{
    let allHeadres = req.headers;
    if(allHeadres.token == "golaugh"){
        next();
    }
    else{
        res.send({"message":"unauthorized user"});
    }
};

//create the get request
app.get("/employee",[auth],(req,res)=>{
    oracledb.getConnection({
        user : "TRADE_LOCAL",
        password : "TRADE_LOCAL",
        connectString: "localhost/orcl"
    },(err,connection)=>{
        if(err) throw err;
        else{
            connection.execute(`select * from employee`,(err,records)=>{
                if(err) throw err;
                else{
                    res.send(records);
                }
            });
        }
    });
});

app.listen(8084);

console.log("server listening on port no 8084");
