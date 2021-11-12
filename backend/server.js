const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
const { body, validationResult } = require("express-validator");
const cors = require("cors");
app.use(cors());
const path = require("path");

app.use("/images", express.static(path.join("backend/images")));
const mongoose = require("mongoose");
const { title } = require("process");
mongoose.connect("mongodb://localhost/BankSystem", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose.connection;

const uniqueValidator = require("mongoose-unique-validator");
const multer = require("multer");
const MIME_TYPE_MAP = {
    "image/png": "png",
    "image/jpeg": "jpg",
    "image/jpg": "jpg",
};
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const isValid = MIME_TYPE_MAP[file.mimetype];
        let error = new Error("Invalid mime type");
        if (isValid) {
            error = null;
        }
        cb(error, "backend/images");
    },
    filename: (req, file, cb) => {
        const name = file.originalname.toLowerCase().split(" ").join("-");
        const ext = MIME_TYPE_MAP[file.mimetype];
        cb(null, name + "-" + Date.now() + "." + ext);
    },
});
db.on("error", function(err) {
    console.log(err);
});

db.on("open", function() {
    console.log("Connection established ...");
    app.listen(3000, function() {
        console.log("Server is running ...");
    });
});
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, DELETE, OPTIONS"
    );
    next();
});




const CustomerSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    currentBalance:{type:Number,required:true},
    history:[]
})
const Customer =mongoose.model("Customer",CustomerSchema);

app.get('/addMock',(req,res,next)=>{
    // const cust1=new Customer({
    //     name:'James Milner',
    //     email:'midfield@gmail.com',
    //     currentBalance:2400,
    //     history:[
    //         {
    //             send:true,
    //             to:'Mohamed Salah',
    //             value:'230',
    //             date:'1/5/2019'
    //         },{
    //             send:true,
    //             to:'Keita',
    //             value:'420',
    //             date:'10/8/2020'
    //         },
    //         {
    //             send:false,
    //             from:'Lovern',
    //             value:800,
    //             date:'11/11/2021'
    //         }
    //     ]
    // }).save();

    // const cust2=new Customer({
    //     name:'Lovern',
    //     email:'centerBack@gmail.com',
    //     currentBalance:3200,
    //     history:[
    //         {
    //             send:true,
    //             to:'James Milner',
    //             value:'800',
    //             date:'11/11/2021'
    //         },{
    //             send:true,
    //             to:'Mohamed Salah',
    //             value:'320',
    //             date:'12/12/2020'
    //         },
    //         {
    //             send:false,
    //             from:'James Milner',
    //             value:900,
    //             date:'9/11/2021'
    //         },{
    //             send:true,
    //             to:'Arnold',
    //             value:300,
    //             date:'10/11/2009'
    //         }
    //     ]
    // }).save();
    // const cust3=new Customer({
    //     name:'Keita',
    //     email:'midfield@gmail.com',
    //     currentBalance:2400,
    //     history:[
    //         {
    //             send:true,
    //             to:'Mohamed Salah',
    //             value:'230',
    //             date:'1/5/2019'
    //         },{
    //             send:true,
    //             to:'Zabata',
    //             value:'420',
    //             date:'10/2/2020'
    //         },
    //         {
    //             send:false,
    //             from:'James Milner',
    //             value:420,
    //             date:'11/11/2021'
    //         }
    //     ]
    // }).save();
    // const cust4=new Customer({
    //     name:'Kevin',
    //     email:'midfield@gmail.com',
    //     currentBalance:24300,
    //     history:[
    //         {
    //             send:true,
    //             to:'Mohamed Salah',
    //             value:'230',
    //             date:'1/5/2019'
    //         },{
    //             send:true,
    //             to:'Keita',
    //             value:'420',
    //             date:'10/8/2020'
    //         },
    //         {
    //             send:false,
    //             from:'Rashford',
    //             value:800,
    //             date:'11,11,2021'
    //         }
    //     ]
    // }).save();
    // const cust5=new Customer({
    //     name:'Origi',
    //     email:'Attacker@gmail.com',
    //     currentBalance:7400,
    //     history:[
    //         {
    //             send:true,
    //             to:'Mohamed Salah',
    //             value:'230',
    //             date:'1/5/2019'
    //         },{
    //             send:true,
    //             to:'Keita',
    //             value:'420',
    //             date:'10/8/2020'
    //         },
    //         {
    //             send:false,
    //             from:'Sadio Mane',
    //             value:800,
    //             date:'12/11/2021'
    //         }
    //     ]
    // }).save();
    // const cust6=new Customer({
    //     name:'Ponso',
    //     email:'midfield8@gmail.com',
    //     currentBalance:9900,
    //     history:[
    //         {
    //             send:true,
    //             to:'Mohamed Salah',
    //             value:'230',
    //             date:'1/5/2019'
    //         },{
    //             send:true,
    //             to:'Keita',
    //             value:'420',
    //             date:'10/8/2020'
    //         },
    //         {
    //             send:false,
    //             from:'BenCharki',
    //             value:800,
    //             date:'11/12/2021'
    //         }
    //     ]
    // }).save();
    // const cust7=new Customer({
    //     name:'Zizo',
    //     email:'Zizo@gmail.com',
    //     currentBalance:400,
    //     history:[
    //         {
    //             send:true,
    //             to:'Mohamed Salah',
    //             value:'230',
    //             date:'1/5/2019'
    //         },{
    //             send:true,
    //             to:'Keita',
    //             value:'420',
    //             date:'10/8/2020'
    //         },
    //         {
    //             send:false,
    //             from:'Mortada',
    //             value:800,
    //             date:'11/11/2021'
    //         }
    //     ]
    // }).save();
    // const cust8=new Customer({
    //     name:'Zalabia',
    //     email:'Zalabia@gmail.com',
    //     currentBalance:5600,
    //     history:[
    //         {
    //             send:true,
    //             to:'Mohamed Salah',
    //             value:'230',
    //             date:'1/5/2019'
    //         },{
    //             send:true,
    //             to:'Keita',
    //             value:'420',
    //             date:'10/8/2020'
    //         },
    //         {
    //             send:false,
    //             from:'dialo',
    //             value:800,
    //             date:'11,11,2021'
    //         }
    //     ]
    // }).save();
    // const cust9=new Customer({
    //     name:'James',
    //     email:'JamesR@gmail.com',
    //     currentBalance:2400,
    //     history:[
    //         {
    //             send:true,
    //             to:'Mohamed Salah',
    //             value:'230',
    //             date:'1/5/2019'
    //         },{
    //             send:true,
    //             to:'Keita',
    //             value:'420',
    //             date:'10/8/2020'
    //         },
    //         {
    //             send:false,
    //             from:'Lovern',
    //             value:800,
    //             date:'11,11,2021'
    //         }
    //     ]
    // }).save();
    // const cust10=new Customer({
    //     name:'Henderson',
    //     email:'Henderson@gmail.com',
    //     currentBalance:2400,
    //     history:[
    //         {
    //             send:true,
    //             to:'Mohamed Salah',
    //             value:'230',
    //             date:'1/5/2019'
    //         },{
    //             send:true,
    //             to:'Keita',
    //             value:'420',
    //             date:'10/8/2020'
    //         },
    //         {
    //             send:false,
    //             from:'Lovern',
    //             value:800,
    //             date:'11,11,2021'
    //         }
    //     ]
    // }).save();
    Customer.find(function(err,custs){
        console.log("Done");
        res.send(custs);
    })
 
})
app.get('/api/getCustomers',(req,res,next)=>{
    Customer.find(function(err,bos){
        res.send(bos);
    })
})

app.post('/api/addCustomer',(req,res,next)=>{
    res.send(200);
})