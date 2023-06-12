import "./sidebar.scss";
import {MdSpaceDashboard, MdDeveloperMode,MdDiamond, MdNewReleases,MdEditSquare, MdHighlight, MdStarRate, MdFrontLoader} from "react-icons/md";
import {FiSettings, FiLogOut} from "react-icons/fi";
import {GrSystem} from "react-icons/gr";
import {TbBorderSides} from "react-icons/tb";
import {CiDeliveryTruck} from "react-icons/ci";
import {RiProductHuntLine, RiDashboardFill, RiChatNewFill} from "react-icons/ri";
import {CgProfile} from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Sidebar = () => {


const navigate = useNavigate()

  const [logout, setLogout] = useState(false)




  const logoutHandler = (e) =>{

      localStorage.removeItem('auth')
      localStorage.removeItem('id')
      localStorage.removeItem('project')

      navigate('/login')

      return setLogout(true)

      };

 



  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Automation</span>
      </div>
      <hr/>
      <div className="center">
        <ul>
            <p className="title">Home</p>
          <li onClick={()=> navigate('/')}>
            <RiDashboardFill className="icon"/>
            <span>Dashboard</span>
          </li>
            <p className="title">Records</p>
          <li onClick={()=>navigate('/Release')}>
            <MdNewReleases className="icon"/>
            <span>Release</span>
          </li>
          <li onClick={()=>navigate('/development')}>
            <MdDeveloperMode className="icon"/>
            <span>Development</span>
          </li>
          <li onClick={()=>navigate('/enhancement')}>
            <MdEditSquare className="icon"/>
            <span>Enhancement</span>
          </li>
          
          <li onClick={()=>navigate('/highlights')}>
            <MdStarRate className="icon"/>

            <span>HighLights</span>
          </li>
          <li onClick={()=>navigate('/headlights')}>
          <MdHighlight className="icon"/>

            <span>HeadLights</span>
          </li>
          <li onClick={()=>navigate('/Production')}>
            <MdDiamond className="icon"/>
            <span>Productivity</span>
          </li>
            <p className="title">Automation Effort</p>
          <li>
            <MdFrontLoader className="icon"/>
            <span>Execution</span>
          </li>
          <li>
            <GrSystem className="icon"/>
            <span>Analysis</span>
          </li>
          <li>
            <FiSettings className="icon"/>
            <span>Maintenance</span>
          </li>
            <p className="title">Users</p>
          <li>
            <CgProfile className="icon"/>
            <span>Profile</span>
          </li>
          <li>
            <FiLogOut className="icon"/>
            <span onClick={logoutHandler}>Logout</span>
          </li>
        </ul>
      </div>
        <p className="backgroundcolorchange">Change Background</p>
      <div className="bottom">
      <div className="coloroption"></div>
      <div className="coloroption"></div>
      </div>
      
    </div>
  )
}

export default Sidebar;