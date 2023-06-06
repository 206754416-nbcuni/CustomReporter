import "./widget.scss";
import {CgZeit,CgCollage, CgBandAid, CgDollar, CgPerformance, CgSync, CgBolt} from "react-icons/cg";

const Widget = ({type, data_, bgColor, target}) => {

let data;

//temp
const amount =580
const diff = 40;


switch(type){
    case "user":
        data={
          title:"Script Development",
          isMoney : false,
          link: "See all",
          icon: <CgCollage className="icon" />,
        };
        break;
        case "order":
          data={
            title:"Script Enhancement",
            isMoney : false,
            link: "View All Cycle",
            icon: <CgBandAid className="icon"/>,
          };
          break;
          case "earning":
            data={
              title:"Manual Effort",
              isMoney : false,
              link: "View Manual Effort",
              icon: <CgPerformance className="icon"/>,
            };
            break;
            case "balance":
              data={
                title:"Cost Saving",
                isMoney : true,
                link: "View Savings",
                icon: <CgDollar className="icon"/>,
              };
      break;
      default:
        break;
}

  return (
    <div style={{'background-color': bgColor}} className="widgets">
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">{data_}</span>
            <a className="link" href={target}>{data.link}</a>
        </div>
        <div className="right">
            {/* <div className="percentage positive">
                {diff}%
            </div> */}
            {data.icon}
    </div>
    </div>
  )
}

export default Widget