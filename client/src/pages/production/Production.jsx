import { useState, useEffect } from "react";
import CustomBarChart from "../../components/customChart/CustomBarChart";
import Sidebar from "../../components/sidebar/Sidebar";
import "./production.scss";
import Featured from "../../components/featured/Featured";


const Production = ()=>{
    const [data, setData] = useState([])
    var monthlyData = []

    useEffect(()=>{
        async function fetchData(){
          const promise = new Promise(async (resolve, reject) => {
            
            const response = await fetch('http://127.0.0.1:3002/getData')
            const d = response.json()
              resolve(d);
            });
      
          promise.then((d) => {
            console.log(d)
            setData(d[localStorage.getItem('project')]);
            monthlyData = Array(d[localStorage.getItem('project')].monthlyData)[0]
            // setTableData(monthlyData)
            console.log("Monthly data: ",monthlyData)
          });
      }
      fetchData()
    }, [])

    function effortSavingsChartData(){
        var chartData = []
    for(let i = 0; i< data.noOfMonths; i++){
      // console.log("DevelopedScripts - ", parseInt(data.monthlyData[i].newlyDevelopedScripts))
      let obj = {
        name: data.monthlyData[i].month,
        Effort_Savings: parseInt(data.monthlyData[i].effortsSavings),
      }
      // console.log("Object: ",obj)
      chartData.push(obj)
    }
    // console.log(chartData)
    chartData.label = "Effort_Savings"
    return chartData
    }

    function costSavingsChartData(){
        var chartData = []
    for(let i = 0; i< data.noOfMonths; i++){
      // console.log("DevelopedScripts - ", parseInt(data.monthlyData[i].newlyDevelopedScripts))
      let obj = {
        name: data.monthlyData[i].month,
        Cost_Savings: parseInt(data.monthlyData[i].costSavings.toString().replace("$", "")),

      }
      console.log("Object: ",obj)
      chartData.push(obj)
    }
    // console.log(chartData)
    chartData.label = "Cost_Savings"
    return chartData
    }

    function scriptUtilisationChartData(){
        var chartData = []
    for(let i = 0; i< data.noOfMonths; i++){
      // console.log("DevelopedScripts - ", parseInt(data.monthlyData[i].newlyDevelopedScripts))
      let obj = {
        name: data.monthlyData[i].month,
        Script_Utilisation: parseInt(data.monthlyData[i].scriptUtilisation),

      }
      console.log("Object: ",obj)
      chartData.push(obj)
    }
    chartData.label = "Script_Utilisation"
    return chartData

    }

    function effortSavingsPHChartData(){
        var chartData = []
    for(let i = 0; i< data.noOfMonths; i++){
      // console.log("DevelopedScripts - ", parseInt(data.monthlyData[i].newlyDevelopedScripts))
      let obj = {
        name: data.monthlyData[i].month,
        Efforts_Savings_per_cycle: parseInt(data.monthlyData[i].effortsSavingsPerCycle),
        Test_Execution_after_Automation: parseInt(data.monthlyData[i].executionAfterAutomation),
        Manual_Efforts: parseInt(data.monthlyData[i].manualEffort),
      }
      console.log("Object: ",obj)

      chartData.push(obj)
    }
    // console.log(chartData)
    chartData.label1 = "Efforts_Savings_per_cycle"
    chartData.label2 = "Test_Execution_after_Automation"
    chartData.label3 = "Manual_Efforts"
    return chartData
    }
    
    function automationProgressChartData(){
        var chartData = []
    for(let i = 0; i< data.noOfMonths; i++){
      // console.log("DevelopedScripts - ", parseInt(data.monthlyData[i].newlyDevelopedScripts))
      let obj = {
        name: data.monthlyData[i].month,
        Automation_Progress: parseInt(data.monthlyData[i].automationCoverage),
      }
      console.log("Object: ",obj)
      chartData.push(obj)
    }
    // console.log(chartData)
    chartData.label = "Automation_Progress"
    return chartData
    }
    
    function automationCoverageChartData(){
        var chartData = []
    for(let i = 0; i< data.noOfMonths; i++){
      // console.log("DevelopedScripts - ", parseInt(data.monthlyData[i].newlyDevelopedScripts))
      let obj = {
        name: data.monthlyData[i].month,
        Automation_Coverage: parseInt(data.monthlyData[i].automationCoverage),
      }
      console.log("Object: ",obj)
      chartData.push(obj)
    }
    // console.log(chartData)
    chartData.label = "Automation_Coverage"
    return chartData
    }

    return(
        <div className="home">
      <Sidebar/>
      <div className="homecontainer">
      <div className="charts">
          {/* <Featured data_={data}/> */}
          <CustomBarChart chartName="Effort Savings (%)" data={effortSavingsChartData()}/>
        <CustomBarChart chartName="Automation Script Utilisation (%)" data={scriptUtilisationChartData()}/>
        <CustomBarChart chartName="Cost Savings per Cycle ($)" data={costSavingsChartData()}/>
        </div>
        <div className="charts">
          {/* <Featured data_={data}/> */}
          <CustomBarChart chartName="Automation Coverage" data={automationCoverageChartData()}/>
        <CustomBarChart chartName="Automation Progress (%)" data={automationProgressChartData()}/>
        <CustomBarChart chartName="Effort Savings (PHs)" data={effortSavingsPHChartData()}/>
        </div>
        </div>
      </div>
    );
}

export default Production;