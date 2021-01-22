const Brightness = ({bright, setBright}) => {
    return (
        <div className='box'>
            <h2>Brightness</h2>
            <div className="slidecontainer">
            <input 
            className='slider'
            type='range' 
            min='0' 
            max='100' 
            value={bright} 
            onChange={e => setBright(e.target.value)}/>
            <h2>{bright}</h2>
            </div>
        </div>
    )           
}

export default Brightness
