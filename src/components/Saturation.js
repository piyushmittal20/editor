const Saturation = ({saturate, setSaturate}) => {

    return (
        <div className='box'>
            <h6>Saturation</h6>
            <div className="slidecontainer">
            <input 
            className='slider'
            type='range' 
            min='0' 
            max='100' 
            value={saturate} onChange={e => setSaturate(e.target.value)}/>
            <h5>{saturate}</h5>
            </div>
        </div>
    )           
}

export default Saturation;