const Sepia = ({sepia, setSepia}) => {

    return (
        <div className='box'>
            <h4>Sepia</h4>
            <div className="slidecontainer">
            <input 
            className='slider'
            type='range' 
            min='0' 
            max='100' 
            value={sepia} onChange={e => setSepia(e.target.value)}/>
            <h3>{sepia}</h3>
            </div>
        </div>
    )           
}

export default Sepia;