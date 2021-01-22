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

  return (
    <>
    <Row>
      <Col sm={5}>
        <Tab 
        color={color} value={value} blur={blur} bright={bright}
        setColor={setColor} setValue ={setValue} setBlur={setBlur} setBright={setBright}
        />
      </Col>
      <Col sm={7}>
      <WorkingArea color={color} value={value} blur={blur} bright={bright}/>
      </Col>
    </Row>
    </>
  );
}

export default App;