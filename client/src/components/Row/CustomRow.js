import { useState } from 'react';
import './customRow.css'
import {CiCircleChevDown, CiCircleChevUp, CiEdit, CiTrash} from "react-icons/ci";
import DropDownIcon from './DropDownIcon';


const CustomRow = ({data_, length}) => {
    const [arrow, setArrow] = useState('up')
    let arr = 'down'
    function toggleArrow(){
        if(arr === 'down'){
            arr = 'up'
            
            // setArrow('arrow-down open')

        }else{
            arr = 'down'
            // setArrow('arrow-down')
        }
    }

    function getRows(){
        let rows = []
        var indicators = ["green", "red", "orange"]
        var k = 0
        for(let i = 0; i< length; i++){
            let temp = <div className="customRow">
            <div className='dataRow'>
            <div className='title'>{data_[i].month}&emsp;&emsp;&emsp;</div>
            <div>{data_[i].noOfValidScripts}</div>
            <div>{data_[i].newlyDevelopedScripts}</div>
            <div>{data_[i].noOfScriptsExecuted}</div>
            <div>{data_[i].noOfDefects}</div>
            {/* <DropDownIcon x={i}/> */}
            {arr == "up"?<CiCircleChevUp size={30} data-bs-toggle="collapse" data-bs-target={`#hiddenTable${i}`} onClick={()=>toggleArrow()} aria-expanded="false"/>
            :<CiCircleChevDown size={30} data-bs-toggle="collapse" data-bs-target={`#hiddenTable${i}`} onClick={()=>toggleArrow()} aria-expanded="false"/>
            }
            {/* <button data-bs-toggle="collapse" data-bs-target="#hiddenTable" onClick={()=>arrow='^'}>{arrow}</button> */}
            </div>
            <div className='dataRowHidden collapse multi-collapse' id={`hiddenTable${i}$`}>
            <div className='title'>Cumulative TC's</div>
            <div>{data_[i].cumulativeValidTestcases}</div>
            <div>{data_[i].cumulativeDevelopedScripts}</div>
            <div>{data_[i].noOfScriptsExecuted}</div>
            <div>{data_[i].noOfDefects}</div>
            <CiEdit  size={40} />
            </div>
            <div className={`dataRowHidden collapse multi-collapse`} id={`hiddenTable${i}`}>
            <div className='title'>Enhanced TC's</div>
            <div>{data_[i].cumulativeValidTestcases}</div>
            <div>{data_[i].cumulativeDevelopedScripts}</div>
            <div>{data_[i].noOfScriptsExecuted}</div>
            <div>{data_[i].noOfDefects}</div>
            <CiTrash  size={40} />
            </div>
            <div className='indicator' id={indicators[k]}>&nbsp;</div>
        </div>
            rows.push(temp)
            k++
            if (k > 3){
                k = 0
            }
          }
          console.log(rows)
          return rows
    }

    return(
        getRows()
    );
}

export default CustomRow;