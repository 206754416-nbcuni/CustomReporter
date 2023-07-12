import { useState, useEffect } from "react";
import CustomBarChart from "../../components/customChart/CustomBarChart";
import Sidebar from "../../components/sidebar/Sidebar";
import "./profile.css";
import Featured from "../../components/featured/Featured";
import { getUser } from "../login/RegexValidator";
import { MdOutlineAccountCircle } from "react-icons/md";



const Profile = ()=>{
    // const [data, setData] = useState([])
    const [users, setUsers] = useState([])
    const [user, setUser] = useState({ID:'',Name:'', Password:'', Project:'', Password:''})
  // const [input, setInput] = useState({ID:'', Password:'', Project:'', Password:''});

    var monthlyData = []

    useEffect(()=>{
      async function fetchData(){
        const promise = new Promise(async (resolve, reject) => {
          
          const response = await fetch("http://localhost:3002/getUsers")
          const d = response.json()
            resolve(d);
          });
    
        promise.then((d) => {
          console.log(d)
          setUsers(d)
          const userr = getUser(users, localStorage.getItem('user'))
          console.log("User Profile: ", userr)
          setUser(userr)
        });
    }
    fetchData()
    }, [])

    const handleSubmit = async (e)=>{
      e.preventDefault();

      try{
        //const data = {name: {${state.Name}}, username: {${state.ID}}, password: {${state.Password}}, project:{${state.Project}}}
        //const data = state
        console.log(user)
        const response = await fetch('http://localhost:3002/updateUser', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify(user)
        })
        console.log("Updated to the DB");
        
      }catch(error){
        console.log("Error: ", error)
      }
      

    }
    const handleChange = (e) =>{
      setUser({...user,[e.target.name]: e.target.value})
      console.log('Change: ', user)
    };


    

    return(
        <div className="home">
      <Sidebar/>
      <div className="homecontainer">
      <h1>Profile Details </h1>
      {/* </h1>
      <div>
      <div className="card" style={{width: '18rem'}}>
      <div>
      <MdOutlineAccountCircle size='100' className="icon"/>
      </div>
        <div className="card-body">
          <h5 className="card-title">{user.ID}</h5>
          <p className="card-text">{user.Name}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      </div> */}
      <div>
      <MdOutlineAccountCircle size='100' className="icon"/>
      </div>
      
      {/* <p>Name</p>
      <h3>{user.Name}</h3>
      <p>ID</p>
      <h3>{user.ID}</h3>
      <p>Project</p>
      <h3>{user.Project}</h3> */}
      <form onSubmit={handleSubmit}>
        <label>User ID:</label><br/>
        <input className='from-control' type='text' name='ID' value={user.ID} disabled></input><br/>
        <label>Name:</label><br/>
        <input className='from-control' type='text' onChange={handleChange} name='Name' defaultValue={user.Name}></input><br/>
        <label>Project:</label><br/>
        <input className='from-control' type='text' onChange={handleChange} name='Project' defaultValue={user.Project}></input><br/>
        <label>Password:</label><br/>
        <input className='from-control' type='password' onChange={handleChange} name='Password' defaultValue={user.Password}></input><br/>
        <button type="button" onClick={handleSubmit} className="btn btn-secondary">Update Profile</button>
      </form>
      
        </div>
      </div>
    );
}

export default Profile;