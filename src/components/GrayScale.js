const GrayScale = ({grayScale, setGrayScale}) => {
    return (
        <div className='box'>
            <h4>GaryScale</h4>
            <div className="slidecontainer">
            <input 
            className='slider'
            type='range' 
            min='0' 
            max='100' 
            value={grayScale} 
            onChange={e => setGrayScale(e.target.value)}/>
            <h3>{grayScale}</h3>
            </div>
        </div>
    )           
}

export default GrayScale
