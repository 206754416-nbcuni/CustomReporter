import "./featured.scss";
import {CiMenuKebab} from "react-icons/ci";
import {AiOutlineArrowDown, AiOutlineArrowUp} from "react-icons/ai";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const Featured = ({data_}) => {

  return (
    <div className="featured">
      <div className="top">
      <h4 className="title">Digital Force</h4>
      <CiMenuKebab fontSize="large" fontWeight={800}/>
      </div>
      <div className="bottom">
           <div className="fetauredChart">
             <CircularProgressbar  value={parseFloat(data_.effortsSavings)} text={data_.effortsSavings} strokeWidth={6}/>
            </div>
               <p className="barText">Overall Accomplishment</p>
               <div className="totaltest">
                TC {data_.noOfValidScripts}
               </div>
               
               <hr></hr>  
       <div className="summary">
          <div className="item">
            <div className="itemtitle">
              Old Development </div>
              <div className="itemresult negative">
              <AiOutlineArrowDown/>
                <div className="resultamount">
                  TC {data_.oldDevelopment}
                </div>
              </div>
            </div>
            <div className="item">
            <div className="itemtitle">
           New Development </div>
              <div className="itemresult positive">
              <AiOutlineArrowUp/>
                <div className="resultamount">
                  TC {data_.newlyDevelopedScripts}
                </div>
              </div>
            </div>
            <div className="item">
            <div className="itemtitle">
              Enhancement </div>
              <div className="itemresult negative">
              <AiOutlineArrowDown/>
                <div className="resultamount">
                  TC {data_.noOfScriptsEnhanced}
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Featured