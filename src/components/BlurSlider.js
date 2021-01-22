const BlurSlider = ({blur, setBlur}) => {
    return (
        <div className='box'>
            <h2>Blurness</h2>
            <div className="slidecontainer">
            <input 
            className='slider'
            type='range' 
            min='0' 
            max='100' 
            value={blur} 
            onChange={e => setBlur(e.target.value)}/>
            <h2>{blur}</h2>
            </div>
        </div>
    )           
}

export default BlurSlider
