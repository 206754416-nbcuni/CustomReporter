import { useState, useEffect } from "react";
import CustomBarChart from "../../components/customChart/CustomBarChart";
import Sidebar from "../../components/sidebar/Sidebar";
import "./highlights.scss";
import Featured from "../../components/featured/Featured";


const HighLights = ()=>{
    const [data, setData] = useState([])
    var monthlyData = []

    useEffect(()=>{
        async function fetchData(){
          const promise = new Promise(async (resolve, reject) => {
            
            const response = await fetch('http://127.0.0.1:3002/')
            const d = response.json()
              resolve(d);
            });
      
          promise.then((d) => {
            console.log(d)
            setData(d);
            monthlyData = Array(d.monthlyData)[0]
            // setTableData(monthlyData)
            console.log("Monthly data: ",monthlyData)
          });
      }
      fetchData()
    }, [])

    

    return(
        <div className="home">
      <Sidebar/>
      <div className="homecontainer">
      <h1>Highlights</h1>
        </div>
      </div>
    );
}

export default HighLights;