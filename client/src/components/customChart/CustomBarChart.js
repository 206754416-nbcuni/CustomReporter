import React, { PureComponent } from 'react';
import { CiMenuKebab } from 'react-icons/ci';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label, LabelList, Line } from 'recharts';

const getIntroOfPage = (label) => {
    if (label === 'Page A') {
      return "Page A is about men's clothing";
    }
    if (label === 'Page B') {
      return "Page B is about women's dress";
    }
    if (label === 'Page C') {
      return "Page C is about women's bag";
    }
    if (label === 'Page D') {
      return 'Page D is about household goods';
    }
    if (label === 'Page E') {
      return 'Page E is about food';
    }
    if (label === 'Page F') {
      return 'Page F is about baby food';
    }
    return '';
  };

const CustomTooltip = ({ active, payload, label }, datalabel) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${datalabel} : ${payload[0].value}`}</p>
        {/* <p className="intro">nothing</p> */}
        {/* <p className="desc">Anything you want can be displayed here.</p> */}
      </div>
    );
  }

  return null;
};

const renderLegend = ({payload, label}) => {
  
    return (
      <ul>
        {
          payload.map((entry, index) => (
            <>
            <li key={`${label}`}>{label}</li>
            <li key={`item-${index}`}>{entry.value}</li>
            </>
          ))
        }
      </ul>
    );
  }


const CustomBarChart = ({data, chartName})=> {

    return (
        <div className="chart">
      <div className="title">
      <h4 className="head"> {chartName} </h4>
        <CiMenuKebab fontSize="large" fontWeight={800}/>
      </div>
      <ResponsiveContainer width="90%" height="80%">
        <BarChart
          width={800}
          height={500}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          {/* <Tooltip content={<CustomTooltip />}/> */}
          <Tooltip />
          <Legend />
            {/* <Line name="uv of pages" type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
          {chartName == "Effort Savings (PHs)"? 
          <>
          <Bar dataKey={`${data.label1}`} barSize={60} fill="#8884d8">
          {/* <LabelList style={{color: 'white'}} dataKey="value1"/> */}
          </Bar>
          <Bar dataKey={`${data.label2}`} barSize={60} fill="#82ca9d" />
          <Bar dataKey={`${data.label3}`} barSize={60} fill="#ddaa1c" />
          </>
          : <Bar dataKey={`${data.label}`} barSize={60} fill="#8884d8">
          {/* <LabelList dataKey="value"/> */}

          </Bar>
          }
        </BarChart>
      </ResponsiveContainer>
      </div>
    );
}

export default CustomBarChart
