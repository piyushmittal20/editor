const BlurSlider = ({blur, setBlur}) => {
    return (
        <div className='box'>
            <h6>Blurness</h6>
            <div className="slidecontainer">
            <input 
            className='slider'
            type='range' 
            min='0' 
            max='100' 
            value={blur} 
            onChange={e => setBlur(e.target.value)}/>
            <h5>{blur}</h5>
            </div>
        </div>
    )           
}

export default BlurSlider
