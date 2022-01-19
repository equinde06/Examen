require('./models/routes')
const express = require('express')
const path = require('path')
const handlebars = require('handlebars')
const exphbs = require('express-handlebars')
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
const bodyparser = require('body-parser')
const { engine } = require('express-handlebars');
const routes_controller = require('./controllers/routes_controller')

var app = express();

app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())

app.get('/', (req, res) => {
    res.send(`
    <h2>Welcome to ASSR Examen</h2>
    <ul>
       <li><a href="/router/estaciones24-7">Consulta1</a></li>
       <li><a href="/router/estacionesprivadas">Consulta 2</a></li>
      <li><a href="/router/estacionespublicas">Consulta 3</a></li>
     </ul>
    `  
   );
    
});

app.set('views', path.join(__dirname, "/views/"));

app.engine('hbs', exphbs.engine({
        handlebars: allowInsecurePrototypeAccess(handlebars),
        extname: 'hbs',
        defaultLayout: "mainLayout",
        layoutsDir: __dirname + "/views/layouts/",
    })
);

app.set('view engine', 'hbs');
const port = process.env.PORT || 80
app.listen(port, () => {
    console.log("server started at port 80")
});

app.use('/router', routes_controller);
app.use('/estaciones24-7', routes_controller);
app.use('/estacionespublicas', routes_controller);
app.use('/estacionesprivadas', routes_controller);