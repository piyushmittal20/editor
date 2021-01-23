const BlurSlider = ({blur, setBlur}) => {
    return (
        <div className='box'>
            <h4>Blurness</h4>
            <div className="slidecontainer">
            <input 
            className='slider'
            type='range' 
            min='0' 
            max='100' 
            value={blur} 
            onChange={e => setBlur(e.target.value)}/>
            <h3>{blur}</h3>
            </div>
        </div>
    )           
}

export default BlurSlider
