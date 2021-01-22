const BackgroundColorSwitch = ({color, setColor}) => {

    return (
        <div className="conatiner">
            <div className="box">
                <h2>🎨</h2>
                <input className='input' type='text' value={color} onChange={e => setColor(e.target.value)} />
            </div>
        </div>
    )
}

export default BackgroundColorSwitch;