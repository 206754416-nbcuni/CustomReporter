import "./release.css";
import React, { useState } from "react";
import {MdDelete} from "react-icons/md";
import {MdEdit} from "react-icons/md";
import {MdDoneAll} from "react-icons/md";
import 'bootstrap'
import Sidebar from "../../components/sidebar/Sidebar";


const Release = () => {
const showdate = new Date();
const [toDO, setTodo] = useState([

  //main state

// { id : 1 , title : "Task 1" , status:false},
// { id : 2 , title : "Task 2" , status:false}
]);

//Temp state
const [newTask,setNewTask] = useState('');
const [updateData,setupdateTask] = useState('');
const [currentdate, setCurrentdate] = useState('');

//functions

const addTask = () => {
  getTime()
  if(newTask){
    let num = toDO.length +1;
    let newEntry = {id : num, title : newTask, status : false}
    setTodo([...toDO , newEntry])
  }
  setNewTask('')
}
const deleteTask = (id) => {
  let newTasks = toDO.filter(task => task.id !== id)
  setTodo(newTasks)
  
}
const markDone = (id) => {
  let newTask = toDO.map(task => {
    if(task.id === id ){
      return ({ ...task , status : !task.status})
    }
    return task;
  })
  setTodo(newTask);
  
}
const cancelTask = () => {
  setupdateTask('');
}
const updatedTask = () => {
  let filterRecord = [...toDO].filter(task => task.id !== updateData.id);
  let updateDataobj = [...filterRecord, updateData]
  setTodo(updateDataobj);
  setupdateTask('');
  
}
const changeTask = (e) => {
    let newEntry = {
      id : updateData.id,
      title: e.target.value,
      status : updateData.status ? true : false,
     
    }
    setupdateTask(newEntry);
}
const getTime =() =>{
  var currentTimeDate = showdate.getDate()+'/'+(showdate.getMonth()+1)+'/'+showdate.getFullYear()+' '+showdate.getHours()+':'+showdate.getMinutes();
  setCurrentdate(currentTimeDate)

}

  return (
    <div className="home">
      <Sidebar/>
      <div className="homecontainer">
    <div className="table-container" >
      {/* <br/><br/> */}
      <h1>Release and Task</h1>
      <br/><br/>
      

    {updateData && updateData ? (
      <>
      {/* update Task */}
    <div className="row">
      <div className="col">
        <input className="taskInput"
        value={updateData && updateData.title}
        onChange = {(e) => changeTask(e)}></input>
        </div>
        <div className="rowUpdateTask">
        <button className="btn"
        onClick={(e) => updatedTask(e)}

        >Update</button>
        
        <button className="btn"
        onClick={cancelTask}
        >Cancel</button>
        </div>
      </div>
      <br/>
      </>
    ) : (
      <>
       <div className="row">
        <div className="col">
          <input
          value={newTask}
          onChange={ (e) => setNewTask(e.target.value)}          
          className="taskInput"
          placeholder="Add New Task"
          type={"text"}></input>
        </div>
        <div className="rowAddTask">
        <button className="btn" onClick={addTask}> Add Task</button>
        </div>
      </div>
       <br/>
      </>
      
    )}



   
     


      {toDO && toDO.length ? '' : 'No Task'}

      {toDO && toDO
      .sort((a, b) => a.id > b.id ? 1 : -1)
      .map((task, index) =>{
        return(
            <React.Fragment key={task.id}>

              <div className="col taskBG">
                <div className={task.status ? 'done' : ''}>
                  <span className="taskNumber">{index+1}</span>
                   <span className="taskText">{task.title}</span>
                   
                </div>
                
                <div className="iconWrap"> 

                <label title="Current Time" className="dateTime"
                >{currentdate}
                </label>

                


                <span title = "Done" onClick={(e) => markDone(task.id)}>
                  < MdDoneAll className="icon"/>
                </span>

                {task.status ? null :(
                <span title = "Edit"
                onClick={() => setupdateTask({

                  id : task.id,
                  title : task.title,
                  status : task.status ? true : false
                  
                  
                }
                )}
                >
                <MdEdit className="icon"/>
                </span>
                )}


                
                
                <span title = "Delete" onClick={() => deleteTask(task.id)}>
                <MdDelete className="icon"/>
                </span>
                </div>
              </div>

          </React.Fragment>
        )



      })
      
      
      }
    
    
    </div>
    </div>
    </div>
  )
}

export default Release