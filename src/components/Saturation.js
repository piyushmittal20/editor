const Saturation = ({saturate, setSaturate}) => {

    return (
        <div className='box'>
            <h4>Saturation</h4>
            <div className="slidecontainer">
            <input 
            className='slider'
            type='range' 
            min='0' 
            max='100' 
            value={saturate} onChange={e => setSaturate(e.target.value)}/>
            <h3>{saturate}</h3>
            </div>
        </div>
    )           
}

export default Saturation;