const OpacitySlider = ({value, setValue}) => {

    return (
        <div className='box'>
            <h6>Opacity</h6>
            <div className="slidecontainer">
            <input 
            className='slider'
            type='range' 
            min='0' 
            max='100' 
            value={value} onChange={e => setValue(e.target.value)}/>
            <h3>{value}</h3>
            </div>
        </div>
    )           
}

export default OpacitySlider;