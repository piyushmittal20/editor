import { useState } from "react";
import { Nav, Row, Col, Tab } from "react-bootstrap";
import BackgroundColorSwitch from "./components/BackgroundColorSwitch";
import ColorPicker from "./components/ColorPicker";
import OpacitySlider from "./components/OpacitySlider";
import BlurSlider from "./components/BlurSlider";
import Brightness from "./components/Brightness";
// import Emoji from "./components/Emoji";
import GrayScale from "./components/GrayScale";
import Contrast from "./components/Contrast";
import Saturation from "./components/Saturation";
import Sepia from "./components/Sepia";
// import Editor from "./components/Editor";
import ImageUpload from "./components/ImageUpload";
import DragList from './components/DragList';
import DoubleLayout from "./components/DoubleLayout";

const Tabs = ({
  color,
  value,
  blur,
  bright,
  grayScale,
  contrast,
  sepia,
  saturate,
  editorState,
  setBright,
  setColor,
  setValue,
  setBlur,
  setGrayScale,
  chosenEmoji,
  setChosenEmoji,
  setContrast,
  setSaturate,
  setSepia,
  setEditorState,
}) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={2}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first" style={{ margin: "10px" }}>
                  One
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second" style={{ margin: "10px" }}>
                  Two
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third" style={{ margin: "10px" }}>
                  Three
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fourth" style={{ margin: "10px" }}>
                  Four
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={10}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <div className="tab1">
                  <h1>Backgrounds</h1>
                  <BackgroundColorSwitch color={color} setColor={setColor} />
                  <OpacitySlider value={value} setValue={setValue} />
                  <ColorPicker color={color} setColor={setColor} />
                  <h4>Background Image</h4>
                  <p>
                    here th texture background images shown and these are passed
                    from backend
                  </p>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <div className="col-6" style={{ height: "100%", padding: "20px" }}>
                  <DragList />
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <div>
                  <div className="tab1">
                    <h2>Filters</h2>
                    <BlurSlider blur={blur} setBlur={setBlur} />
                    <Brightness bright={bright} setBright={setBright} />
                    <GrayScale
                      grayScale={grayScale}
                      setGrayScale={setGrayScale}
                    />
                    <Contrast contrast={contrast} setContrast={setContrast} />
                    <Saturation saturate={saturate} setSaturate={setSaturate} />
                    <Sepia sepia={sepia} setSepia={setSepia} />
                    <ImageUpload />
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="fourth">
                {/* <button className='button' onClick={() => setShow((show) => !show)}>
                  {show ? 'Emoji' : 'Text Editor'}
                </button>
                {show ? (
                    <div className="tab1">
                      <h1>Editor</h1>
                      <Editor
                        editorState={editorState}
                        setEditorState={setEditorState}
                      />
                    </div>
                  ) : (
                    <div className="tab1">
                      <h1>Stickers</h1>
                      <Emoji
                        setChosenEmoji={setChosenEmoji}
                        chosenEmoji={chosenEmoji}
                      />
                    </div>
                  )} */}
                  <DoubleLayout />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </>
  );
};

export default Tabs;
