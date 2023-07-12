const XLSX = require('xlsx')
const http = require('http');
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()

mongoose.connect('mongodb://127.0.0.1:27017/appdb')

const userSchema = mongoose.Schema({
    Name: String,
    ID: String,
    Password:String,
    Project: String
})

const user = mongoose.model('user', userSchema)


var jsonParser = bodyParser.json()

var urlencodedParser = bodyParser.urlencoded({extended: true})

const workbook = XLSX.readFile("./data/dashboard.xlsx")
// console.log(workbook.SheetNames)
// console.log(worksheet)



// console.log(worksheet[`M${rowCount+1}`])
const projects = ["DigitalForce", "GTM", "Magic"]
const obj = {}
for(let m = 0; m < projects.length; m++){
    const worksheet = workbook.Sheets[projects[m]]
    var rowCount = 1
    var i = 3

    while(worksheet[`B${i}`] != undefined){
        rowCount++
        i++
        }

        obj[projects[m]] = {
        newlyDevelopedScripts: worksheet[`M${rowCount+1}`].w,
        noOfScriptsEnhanced: worksheet[`N${rowCount+1}`].w,
        noOfValidScripts: worksheet[`O${rowCount+1}`].w,
        costSavings: worksheet[`AE${rowCount+1}`].w,
        effortsSavings: worksheet[`AD${rowCount+1}`].w,
        oldDevelopment: worksheet[`O${rowCount-1}`].w
    }
    
    monthlyData = []
    
    for(let i = 3;i < rowCount+1; i++){
        const data = {
            month: worksheet[`G${i}`].w,
            release: worksheet[`C${i}`].w,
            newlyDevelopedScripts: worksheet[`M${i}`].w,
            noOfScriptsEnhanced: worksheet[`N${i}`].w,
            noOfValidScripts: worksheet[`O${i}`].w,
            costSavings: worksheet[`AE${i}`].v.toString(),
            automationProgress: worksheet[`AA${i}`].w,
            scriptUtilisation: worksheet[`AC${i}`].w,
            effortsSavings: worksheet[`AD${i}`].w,
            oldDevelopment: worksheet[`O${i}`].w,
            noOfDefects: worksheet[`Z${i}`].w,
            cumulativeValidTestcases: worksheet[`H${i}`].w,
            cumulativeDevelopedScripts: worksheet[`K${i}`].w,
            noOfScriptsExecuted: worksheet[`P${i}`].w,
            manualEffort: worksheet[`R${i}`].w,
            effortsSavingsPerCycle: worksheet[`Y${i}`].w,
            executionAfterAutomation: worksheet[`X${i}`].w,
            automationCoverage: worksheet[`AB${i}`].w
        }
        monthlyData.push(data)
    }
    
    // console.log(monthlyData)
    
    obj[projects[m]]['monthlyData'] = monthlyData
    obj[projects[m]]['noOfMonths'] = rowCount - 2
    
    console.log(obj)
    
    
}


//---------------------------------------------------------------

const hostname = '127.0.0.1';
const port = 3002;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   res.setHeader('Content-Type', 'text/plain');
//   res.end(JSON.stringify(obj));
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });


app.use(cors())
app.get('/getData', (req, res)=>{
    res.end(JSON.stringify(obj))
})

app.post('/userData', jsonParser, (req, res)=>{
    console.log(req.body)

    user.insertMany([req.body])
})

app.post('/updateUser', jsonParser, (req, res)=>{
    console.log(req.body.ID)

    user.updateOne({ID: req.body.ID}, req.body)
})

app.get('/getUsers', async (req, res)=>{
    const data = await user.find().exec()
    console.log(data)
    res.end(JSON.stringify(data))
    
})

// app.post('/checkUser', jsonParser, async (req, res)=>{
//     console.log(req.body)
//     const data = await user.find({ID: req.body.user}).exec()
//     console.log(data.length)
//     if (data.length > 0){
//         app.get('/status', (req, res)=>{
//             res.end('true')
//         })
//     }else{
//         app.get('/status', (req, res)=>{
//             res.end('false')
//         })
//     }
    
//     // res.end("user exists")
// })

app.listen(port, (req, res)=>{
    console.log("Server is running!!")
})



