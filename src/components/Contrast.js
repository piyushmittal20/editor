const Contrast = ({contrast, setContrast}) => {

    return (
        <div className='box'>
            <h4>Contrast</h4>
            <div className="slidecontainer">
            <input 
            className='slider'
            type='range' 
            min='0' 
            max='100' 
            value={contrast} onChange={e => setContrast(e.target.value)}/>
            <h3>{contrast}</h3>
            </div>
        </div>
    )           
}

export default Contrast;