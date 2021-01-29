const Sepia = ({sepia, setSepia}) => {

    return (
        <div className='box'>
            <h6>Sepia</h6>
            <div className="slidecontainer">
            <input 
            className='slider'
            type='range' 
            min='0' 
            max='100' 
            value={sepia} onChange={e => setSepia(e.target.value)}/>
            <h5>{sepia}</h5>
            </div>
        </div>
    )           
}

export default Sepia;