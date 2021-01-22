const WorkingArea = ({color, value, blur, bright}) => {
    const opacityValue = value / 100;

    const blurValue = blur + "px";

    const brightnessValue = bright + "%"

    return (
        <div className='colorArea' style={{backgroundColor: color}}>
            <div className='area' style={{opacity: opacityValue, filter: `blur(${blurValue}) brightness(${brightnessValue})`}}>
            </div>
        </div>
    )
}

export default WorkingArea;