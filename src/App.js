import {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { EditorState } from "draft-js";
import Tab from './Tab';
import {Row, Col} from "react-bootstrap";
import Header  from "./components/Header";
import WorkingArea from './components/WorkingArea';

function App() {
  const [color, setColor] = useState("#D3D3D3")
  const [value, setValue] = useState(100)
  const [blur, setBlur] = useState(0)
  const [bright, setBright] = useState(100)
  const [grayScale, setGrayScale] = useState(0)
  const [contrast, setContrast] = useState(60)
  const [saturate, setSaturate] = useState(50)
  const [sepia, setSepia] = useState(0)
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  return (
    <>
    <Header />
    <Row style={{marginRight: '0px'}}>
      <Col sm={5}>
        <Tab 
        color={color} value={value} blur={blur} bright={bright} chosenEmoji={chosenEmoji} grayScale={grayScale} contrast={contrast} saturate={saturate} sepia={sepia} editorState={editorState} selectedFiles={selectedFiles}
        setColor={setColor} setValue ={setValue} setBlur={setBlur} setBright={setBright} setChosenEmoji={setChosenEmoji} setGrayScale={setGrayScale} setContrast={setContrast} setSaturate={setSaturate} setSepia={setSepia} setEditorState={setEditorState} setSelectedFiles={setSelectedFiles}
        />
      </Col>
      <Col sm={7} style={{marginTop: '30px', marginRight: '0',}}>
      <WorkingArea color={color} value={value} blur={blur} bright={bright} chosenEmoji={chosenEmoji} grayScale={grayScale} contrast={contrast} saturate={saturate} sepia={sepia} editorState={editorState} />
      </Col>
    </Row>
    </>
  );
}

export default App;