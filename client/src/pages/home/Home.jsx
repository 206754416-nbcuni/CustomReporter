import "./home.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import Chart from "../../components/chart/Chart";
import Featured from "../../components/featured/Featured";
import Table from "../../components/table/Table";
import { useState, useEffect } from "react";
import { FunnelChart } from "recharts";
import CustomRow from "../../components/Row/CustomRow";
import CustomRowHeading from "../../components/Row/CustomRowHeading";
import { useNavigate } from "react-router-dom";

export const Home = () => {

  const [data, setData] = useState([])
  const [tableData, setTableData] = useState([])
  var monthlyData = []

  // var chartData = []

  useEffect(()=>{
    if(!localStorage.getItem('auth'))

    navigate('/login')
    async function fetchData(){
      const promise = new Promise(async (resolve, reject) => {
        
        const response = await fetch('http://127.0.0.1:3002/')
        const d = response.json()
          resolve(d);
        });
  
      promise.then((d) => {
        console.log(d)

        setData(d[localStorage.getItem('project')]);
        monthlyData = Array(d[localStorage.getItem('project')].monthlyData)[0]
        setTableData(monthlyData)
        console.log("Monthly data: ",monthlyData)
      });
  }
  fetchData()
}, [])

  function getTableData(){
    return data.monthlyData
  }

  function getChartData(){
    var chartData = []
    for(let i = 0; i< data.noOfMonths; i++){
      // console.log("DevelopedScripts - ", parseInt(data.monthlyData[i].newlyDevelopedScripts))
      let obj = {
        name: data.monthlyData[i].month,
        Development: parseInt(data.monthlyData[i].newlyDevelopedScripts),
        Enhancement: parseInt(data.monthlyData[i].noOfScriptsEnhanced)
      }
      // console.log("Object: ",obj)
      chartData.push(obj)
    }
    // console.log(chartData)
    return chartData
  }

  const navigate=useNavigate()

//   useEffect(()=>{

//     if(!localStorage.getItem('auth'))

//     navigate('/login')

//   },[])

  return (
    <div className="home">
      <Sidebar/>
      <div className="homecontainer">
        {/* <Navbar/> */}
        <div className="widget">
          <Widget bgColor='#8884d8' type="user" data_={data.noOfValidScripts} target='#scriptDev'/>
          <Widget bgColor='#82ca9d' type="order" data_={data.noOfScriptsEnhanced} target='#scriptEnh'/>
          <Widget bgColor='#FE8463' type="earning" data_={data.effortsSavings}/>
          <Widget bgColor='#6E77DF' type="balance" data_={data.costSavings}/>
        </div>
        <div className="charts">
          <Featured data_={data}/>
          <Chart chartData={getChartData()}/>
        </div>
        <div className="listcontainer">
          <div id='scriptDev' className="listtitle">
            Script Development
          </div>
          {/* <Table data_={getTableData()} length={data.noOfMonths}/> */}
          <CustomRowHeading />
          <CustomRow data_={getTableData()} length={data.noOfMonths} />

        </div>
        <div className="listcontainer">
          <div id='scriptEnh' className="listtitle">
            Script Enhancement
          </div>
          {/* <Table data_={getTableData()} length={data.noOfMonths}/> */}
          <CustomRowHeading />
          <CustomRow data_={getTableData()} length={data.noOfMonths} />

        </div>
        
      </div>

    </div>
  );
};
export default Home