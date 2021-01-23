const Brightness = ({bright, setBright}) => {
    return (
        <div className='box'>
            <h4>Brightness</h4>
            <div className="slidecontainer">
            <input 
            className='slider'
            type='range' 
            min='0' 
            max='100' 
            value={bright} 
            onChange={e => setBright(e.target.value)}/>
            <h3>{bright}</h3>
            </div>
        </div>
    )           
}

export default Brightness
