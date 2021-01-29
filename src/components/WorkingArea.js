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

  console.log(editorState);

  const arr = []

  arr.push(editorState)

  // console.log(arr);

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

        {/* <Draggable>
          <div style={{color: 'white'}}>{arr[0]}</div>
        </Draggable> */}
      </div>
    </div>
  );
};

export default WorkingArea;
