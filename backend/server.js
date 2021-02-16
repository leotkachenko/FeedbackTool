const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
require('./db/mongodb-connection')

const db_service = require('./db/services/toolService')
const jsonFile = require('./db/db_tools/tools.json');


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


app.get("/", (req, res) => {
    db_service.getAll((err, tools) => {
        if(err) {
        console.log(err.message);
        return;
    }
    res.json(`Show ${tools.map(i=>i.answer)}`)})})

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
    console.log(`Server is running on port ${ PORT }.`);
});