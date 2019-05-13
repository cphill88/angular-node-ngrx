const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 4000;
const fruits = require('./fruits');

const stripe = require('stripe')('sk_test_aw5Dx2SUDJlbStudsQZvjA2300UngJiNGe');

const retrieveCoupon = async (req, res, next) => {
    const charge = await stripe.coupons.retrieve(req.query.coupon, (err, coupon) => {
        res.send(coupon);
    });
    next();
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get('/', retrieveCoupon, (req, res) => {
    
});

app.get('/fruits', (req, res) => {
    res.json(fruits);
});

app.listen(port, () => {
    
})