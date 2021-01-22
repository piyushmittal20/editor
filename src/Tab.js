import { Nav, Row, Col, Tab } from "react-bootstrap";
import BackgroundColorSwitch from "./components/BackgroundColorSwitch";
import ColorPicker from "./components/ColorPicker";
import OpacitySlider from "./components/OpacitySlider";
import BlurSlider from "./components/BlurSlider";
import Brightness from "./components/Brightness";

const tabs = ({
  color,
  value,
  blur,
  bright,
  setBright,
  setColor,
  setValue,
  setBlur,
}) => {
  return (
    <>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={2}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">Tab 1</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Tab 2</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">Tab 3</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fourth">Tab 4</Nav.Link>
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
                  <BlurSlider blur={blur} setBlur={setBlur} />
                  <Brightness bright={bright} setBright={setBright} />
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <h1>
                  How like a winter hath my absence been From thee, the pleasure
                  of the fleeting year! What freezings have I felt, what dark
                  days seen! What old December's bareness everywhere! And yet
                  this time removed was summer's time; The teeming autumn, big
                  with rich increase, Bearing the wanton burden of the prime,
                  Like widow'd wombs after their lords' decease: Yet this
                  abundant issue seem'd to me But hope of orphans, and
                  unfather'd fruit;
                </h1>
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <h1>
                  That thou art blam'd shall not be thy defect, For slander's
                  mark was ever yet the fair; The ornament of beauty is suspect,
                  A crow that flies in heaven's sweetest air. So thou be good,
                  slander doth but approve Thy worth the greater being woo'd of
                  time; For canker vice the sweetest buds doth love, And thou
                  present'st a pure unstained prime. Thou hast passed by the
                  ambush of young days Either not assail'd, or victor being
                  charg'd;
                </h1>
              </Tab.Pane>
              <Tab.Pane eventKey="fourth">
                <h1>
                  That thou art blam'd shall not be thy defect, For slander's
                  mark was ever yet the fair; The ornament of beauty is suspect,
                  A crow that flies in heaven's sweetest air. So thou be good,
                  slander doth but approve Thy worth the greater being woo'd of
                  time; For canker vice the sweetest buds doth love, And thou
                  present'st a pure unstained prime. Thou hast passed by the
                  ambush of young days Either not assail'd, or victor being
                  charg'd;
                </h1>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </>
  );
};

export default tabs;
