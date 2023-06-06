import "./navbar.scss";
import {BsSearch} from "react-icons/bs";
import {MdOutlineNightsStay} from "react-icons/md";
import {RiFullscreenExitFill} from "react-icons/ri";
import {ImNotification} from "react-icons/im";
import {RxHamburgerMenu} from "react-icons/rx";
import {CgProfile} from "react-icons/cg";


const Navbar = () => {
  return (

      <div className="navbar">
        <div className="wrapper">
          <div className="search">
            <BsSearch className="icon"/>
            <input type="text" placeholder="Search...." className="searchInputBox" />
          </div>
          <div className="items">
          <div className="item">
            <MdOutlineNightsStay className="icon"/>
          </div>
          <div className="item">
          <RiFullscreenExitFill className="icon"/>
          </div>
          <div className="item">
          <ImNotification className="icon"/>
          <div className="counter">1</div>
          </div>
          <div className="item">
          <RxHamburgerMenu className="icon"/>
          </div>
          <div className="item">
          {/* <img src="./profile.jpg" alt="Profile Picture"/> */}
          <CgProfile className="icon"/>

          </div>
          </div>
        </div>
      </div>




    )
}

export default Navbar