import './customRow.css'



const CustomRowHeading = () => {
    return(
        <div className="customRowHead">
            <div className='dataRow'>
            <div className='title'>Completion Month</div>
            <div className='title'>Valid Scripts</div>
            <div className='title'>New Development</div>
            <div className='title'>Test cases executed</div>
            <div className='title'>Defects</div>
            <div className='title'>&emsp;&emsp;Action</div>
            </div>
        </div>
    );
}

export default CustomRowHeading;