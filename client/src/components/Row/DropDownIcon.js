import './customRow.css'
import { useState } from 'react';
import {CiCircleChevDown} from "react-icons/ci";



const DropDownIcon = ({x}) => {

    const [arrow, setArrow] = useState('up')

    return(
        <CiCircleChevDown className="" size={30} data-bs-toggle="collapse" data-bs-target={`#hiddenTable${x}`} />
        
    );
}

export default DropDownIcon;