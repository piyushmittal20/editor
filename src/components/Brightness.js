const Brightness = ({bright, setBright}) => {
    return (
        <div className='box'>
            <h6>Brightness</h6>
            <div className="slidecontainer">
            <input 
            className='slider'
            type='range' 
            min='0' 
            max='100' 
            value={bright} 
            onChange={e => setBright(e.target.value)}/>
            <h5>{bright}</h5>
            </div>
        </div>
    )           
}

export default Brightness
