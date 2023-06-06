import "./chart.scss";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import {CiMenuKebab} from "react-icons/ci";
import { useEffect, useState } from "react";


// const data = [
//   { name: "January", Development : 100,   Enhancement  :60  },
//   { name: "February", Development : 200,   Enhancement  :170  },
//   { name: "March", Development : 330 ,  Enhancement  :250 },
//   { name: "April", Development: 380,   Enhancement  : 150  },
//   { name: "May", Development : 230,   Enhancement  :130  },
//   { name: "June", Development : 160,   Enhancement  :400 },
//   { Development : 600,   Enhancement  :600 },
// ];

const Chart = ({chartData}) => {
  // const [data, setData] = useState([])
  // useEffect(()=>{
  //   for(let i = 0; i< data_.noOfMonths; i++){
  //     console.log("DevelopedScripts - ", parseInt(data_.monthlyData[i].newlyDevelopedScripts))
  //     let obj = {
  //       name: data_.monthlyData[i].month,
  //       Development: parseInt(data_.monthlyData[i].newlyDevelopedScripts),
  //       Enhancement: parseInt(data_.monthlyData[i].noOfScriptsEnhanced)
  //     }
  //     setData(...obj)
  //   }
  //   console.log(data)
  // }, [])

  return (
    <div className="chart">
      <div className="title">
      <h4 className="head"> Automation Progress and Utilization </h4>
        <CiMenuKebab fontSize="large" fontWeight={800}/>
      </div>
       <ResponsiveContainer width="100%" aspect={1.5/1}>
       <AreaChart width={730} height={350} data={chartData}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="Development" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="Enhancement" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="name" />
  <YAxis />
  <CartesianGrid strokeDasharray="3 3" className="cartesianGrid"/>
  <Tooltip />
  <Legend iconSize={20} />
  <Area type="monotone" 
        dataKey="Development" 
        stroke="#8884d8" 
        fillOpacity={1} 
        fill="url(#Development)" />
  <Area type="monotone" 
        dataKey="Enhancement" 
        stroke="#82ca9d" 
        fillOpacity={1} 
        fill="url(#Enhancement)" />
</AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart