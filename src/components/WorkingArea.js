import Draggable from 'react-draggable';
import DropList from './DropList';

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

  const array = []

  array.push(editorState)

  return (
    <div className="colorArea" style={{ backgroundColor: color }}>
      <div
        className="area"
        style={{
          opacity: opacityValue,
          filter: `blur(${blurValue})  brightness(${brightnessValue}) grayScale(${GrayScale}) contrast(${Contrast}) saturate(${saturation}) sepia(${Sepia})`,
        }}
      >
        <DropList />
        {chosenEmoji ? (
          <Draggable>
            <div style={{fontSize: '4rem', cursor: 'pointer', margin: '0px', padding: '0px', border: '1px solid black', width: '100px'}}>
            {chosenEmoji.emoji}
            </div>
          </Draggable>
        ) : ""
        }

        {/* <Draggable>
          <div style={{color: 'white'}}>{array && array.map(arr => (arr))}</div>
        </Draggable> */}
      </div>
    </div>
  );
};

export default WorkingArea;
