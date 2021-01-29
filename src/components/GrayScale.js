const GrayScale = ({grayScale, setGrayScale}) => {
    return (
        <div className='box'>
            <h6>GaryScale</h6>
            <div className="slidecontainer">
            <input 
            className='slider'
            type='range' 
            min='0' 
            max='100' 
            value={grayScale} 
            onChange={e => setGrayScale(e.target.value)}/>
            <h5>{grayScale}</h5>
            </div>
        </div>
    )           
}

export default GrayScale
