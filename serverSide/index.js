var app = require('express')();
var BodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');

app.use(BodyParser.urlencoded({ extended: false }))
app.use(BodyParser.json());
app.use(cors());

var mongoDb = 'mongodb+srv://dini:pFT7tFTu2JSeaJ7@backend.ln0us.mongodb.net/AnimalShop?retryWrites=true&w=majority'

mongoose.connect(mongoDb, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var Schema = mongoose.Schema;
var products = new Schema(
    {
    
        id: { type: Object },
        title: { type: Number}, 
        image: { type: String },
        info: { type: String },
        inCart: { type: String },
        price: { type: Date },
        count: { type: Number},
        total:{},
        stock:{},
        code:{},
    }
);
var product = new Schema(
    {
    
        id: { type: Number },
        title: { type: Number}, 
        image: { type: String },
        info: { type: String },
        inCart: { type: Boolean },
        price: { type: Number },
        count: { type: Number},
        total:{type: Number},
        stock:{type: Number},
        code:{type: Number}
    }
);

var modelProducts = mongoose.model('products', products);

app.post("/products", (req, res) => {
    var getProducts = new modelProducts({
        id: req.body.id,
        title: req.body.title,
        image: req.body.image,
        info: req.body.info,
        inCart: req.body.inCart,
        price: req.body.price,
        count: req.body.count,
        total: req.body.total,
        stock: req.body.stock,
        code: req.body.code,
        timeStamp: Date.now(),
        status: 0
    });

    getProducts.save(function (err, data) {
        console.log("order save")
        modelProducts.find()
            .exec(function (err, list) {
                if (err) return next(err);
                console.log(list);
            })
        if (err) return next(err);
        res.send("the orderId " + data._id);
    })
})

app.get("/get",(req, res) => {
    modelPizza.find()
    .exec(function (err, list) {
        if (err) return next(err);
        console.log(list);
        res.send(list);
    })
  });

function service() {
    setInterval(() => {
        modelPizza.find({ status: { $in: [0, 1, 2] } }).exec(function (err, list) {//להגדיר שליפה מדויקת
            if (err) return next(err);
            list.forEach(element => {
                switch (element.status) {
                    case 0:
                        if (Date.parse(element.timeStamp) + 2*60000 <= Date.now()) {
                            element.status = 1
                            element.timeStamp = Date.now()
                        }
                        break;
                    case 1:
                        if (Date.parse(element.timeStamp) + 15*60000 <= Date.now()) {
                            element.status = 2
                            element.timeStamp = Date.now()
                        }
                        break;
                    case 2:
                        if (Date.parse(element.timeStamp) + 25*60000 <= Date.now()) {
                            element.status = 3
                            element.timeStamp = Date.now()
                        }
                        break;
                    default:
                        break;
                }

                element.save()
            });
        })
    }, 60000);
    
}


service()


var server = app.listen(3080, function () {
    console.log("server run...")
})