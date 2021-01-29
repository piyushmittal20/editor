import Draggable from 'react-draggable';

const WorkingArea = ({
  color,
  value,
  blur,
  bright,
  grayScale,
  contrast,
  saturate,
  sepia,
  chosenEmoji,
  editorState,
}) => {
  const opacityValue = value / 100;

  const blurValue = blur + "px";

  const brightnessValue = bright + "%";

  const GrayScale = grayScale + "%";

  const Contrast = contrast + "%";

  const saturation = saturate + "%";

  const Sepia = sepia + '%';

  return (
    <div className="colorArea" style={{ backgroundColor: color }}>
      <div
        className="area"
        style={{
          opacity: opacityValue,
          filter: `blur(${blurValue})  brightness(${brightnessValue}) grayScale(${GrayScale}) contrast(${Contrast}) saturate(${saturation}) sepia(${Sepia})`,
        }}
      >
        {chosenEmoji ? (
          <Draggable>
            <div style={{fontSize: '4rem', cursor: 'pointer'}}>
            {chosenEmoji.emoji}
            </div>
          </Draggable>
        ) : ""
        }
        {/* <div>{editorState.map(text => (
          <p>{text}</p>
        ))}</div> */}
      </div>
    </div>
  );
};

export default WorkingArea;
