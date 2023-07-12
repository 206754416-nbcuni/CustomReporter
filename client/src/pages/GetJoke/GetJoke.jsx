import { useState, useEffect } from "react";
import CustomBarChart from "../../components/customChart/CustomBarChart";
import Sidebar from "../../components/sidebar/Sidebar";
import "./getjoke.scss";
import Featured from "../../components/featured/Featured";


const GetJoke = ()=>{
    const [data, setData] = useState([])
    var monthlyData = []

    useEffect(()=>{
      // https://icanhazdadjoke.com/
      // https://jsonplaceholder.typicode.com/users
      fetchAJoke()
          
    }, [])

    const fetchAJoke = ()=>{
      const response = fetch('https://icanhazdadjoke.com/', {headers:{Accept:'application/json',},})
      .then((res)=>res.json())
      .then((d)=>setData(d))
      .catch(e=>console.log(e))
      // setData(response)
      // console.log("Joke:" + data)
    }

    

    return(
        <div className="home">
      <Sidebar/>
      <div className="homecontainer">
        <h1>Random Joke
        </h1>

        <div className="card">
          <h3 className="card-body">
              {data.joke}
          </h3>
        </div>
        <button onClick={fetchAJoke}>Get Joke</button>
      

        </div>
      </div>
    );
}

export default GetJoke;