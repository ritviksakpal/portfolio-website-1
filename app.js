const express = require('express');
const path = require('path');
const app = express();
const router = express.Router();
app.use(express.static('public'))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
router.get('/', (req, res) => {
    res.render('index')
});
router.get('/about', (req, res) => {
    res.render('about')
});
router.get('/contact', (req, res) => {
    res.render('contact')
});
router.get('/work', (req, res) => {
    res.render('work')
});
app.use("/", router);
app.listen(process.env.port || 80);
console.log("Running at Port 80");