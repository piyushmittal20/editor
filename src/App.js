import {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tab from './Tab';
import {Row, Col} from "react-bootstrap";
import WorkingArea from './components/WorkingArea';

function App() {
  const [color, setColor] = useState("indianred")
  const [value, setValue] = useState(100)
  const [blur, setBlur] = useState(0)
  const [bright, setBright] = useState(100)
  const [grayScale, setGrayScale] = useState(0)
  const [contrast, setContrast] = useState(60)
  const [saturate, setSaturate] = useState(50)
  const [sepia, setSepia] = useState(0)
  const [chosenEmoji, setChosenEmoji] = useState(null);

  return (
    <>
    <Row>
      <Col sm={5}>
        <Tab 
        color={color} value={value} blur={blur} bright={bright} chosenEmoji={chosenEmoji} grayScale={grayScale} contrast={contrast} saturate={saturate} sepia={sepia}
        setColor={setColor} setValue ={setValue} setBlur={setBlur} setBright={setBright} setChosenEmoji={setChosenEmoji} setGrayScale={setGrayScale} setContrast={setContrast} setSaturate={setSaturate} setSepia={setSepia}
        />
      </Col>
      <Col sm={7} style={{marginTop: '30px'}}>
      <WorkingArea color={color} value={value} blur={blur} bright={bright} chosenEmoji={chosenEmoji} grayScale={grayScale} contrast={contrast} saturate={saturate} sepia={sepia} />
      </Col>
    </Row>
    </>
  );
}

export default App;