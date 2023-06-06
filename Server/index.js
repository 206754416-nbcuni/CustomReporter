const XLSX = require('xlsx')
const http = require('http');


const workbook = XLSX.readFile("./data/dashboard.xlsx")
// console.log(workbook.SheetNames)
const worksheet = workbook.Sheets["DigitalForce"]
console.log(worksheet)

var rowCount = 1
var i = 3

while(worksheet[`B${i}`] != undefined){
    rowCount++
    i++
}

// console.log(worksheet[`M${rowCount+1}`])

const obj = {
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

obj['monthlyData'] = monthlyData
obj['noOfMonths'] = rowCount - 2

console.log(obj)

const hostname = '127.0.0.1';
const port = 3002;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader('Content-Type', 'text/plain');
  res.end(JSON.stringify(obj));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

