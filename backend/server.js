const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
require('./db/mongodb-connection')

const db_service = require('./app/controllers/tools.controller')
const jsonFile = require('./db/db_tools/tools.json');

const path = __dirname + '/app/views/';

app.use(express.static(path));


jsonFile.map(file => db_service.saveTool(file, (saveErr, _) => {
    if (saveErr) {
        console.log(`Error saving ${jsonFile}`)
        return;
    }
}))

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', function (req,res) {
    res.sendFile(path + "index.html");
  });

// app.get("/", (req, res) => {
//     db_service.getAll((err, tools) => {
//         if(err) {
//         console.log(err.message);
//         return;
//     }
//     res.json(tools.map(i=>i.answer))})})
require("./app/routes/tools.routes")(app);


const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
    console.log(`Server is running on port ${ PORT }.`);
});