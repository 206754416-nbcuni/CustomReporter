import './customRow.css'
import { useState } from 'react';
import {CiCircleChevDown} from "react-icons/ci";



const DropDownIcon = ({x}) => {

    const [arrow, setArrow] = useState('up')
    let arr = 'arrow-down'
    function toggleArrow(){
        if(arr === 'arrow-down'){
            arr = 'arrow-down open'
            
            setArrow('arrow-down open')

        }else{
            arr = 'arrow-down'
            setArrow('arrow-down')
        }
    }

    return(
        <CiCircleChevDown className={`${arrow}`} size={30} data-bs-toggle="collapse" data-bs-target={`#hiddenTable${x}`} onClick={toggleArrow()}/>
        
    );
}

export default DropDownIcon;