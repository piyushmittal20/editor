const Contrast = ({contrast, setContrast}) => {

    return (
        <div className='box'>
            <h6>Contrast</h6>
            <div className="slidecontainer">
            <input 
            className='slider'
            type='range' 
            min='0' 
            max='100' 
            value={contrast} onChange={e => setContrast(e.target.value)}/>
            <h5>{contrast}</h5>
            </div>
        </div>
    )           
}

export default Contrast;