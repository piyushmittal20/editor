const OpacitySlider = ({value, setValue}) => {

    return (
        <div className='box'>
            <h4>Opacity</h4>
            <div className="slidecontainer">
            <input 
            className='slider'
            type='range' 
            min='0' 
            max='100' 
            value={value} onChange={e => setValue(e.target.value)}/>
            <h2>{value}</h2>
            </div>
        </div>
    )           
}

export default OpacitySlider;