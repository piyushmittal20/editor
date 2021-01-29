import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const TEditor = ({ setEditorState }) => {

  const editorChange = (editorState) => {
    setEditorState(editorState.getCurrentContent().getPlainText());
  };

  return (
    <>
      <div className="size">
        <Editor
          onEditorStateChange={editorChange}
          toolbar={{
            inline: { inDropdown: true },
            list: { inDropdown: true },
            textAlign: { inDropdown: true },
            link: { inDropdown: true },
            history: { inDropdown: true },
          }}
        />
      </div>
    </>
  );
};

// class TEditor extends Component {
//   constructor(props){
//       super(props);
//       this.state = {
//         editorState: EditorState.createEmpty(),
//       };
//     }

//     onEditorStateChange = (editorState) => {

//       this.setState({
//         editorState,
//       });
//   };

// render() {
//   const { editorState } = this.state;
//   console.log(editorState.getCurrentContent().getPlainText())
//       return (
//           <div className="size">
//                <Editor
//       editorState={editorState}
//       onEditorStateChange={this.onEditorStateChange}
//       toolbar={{
//         inline: { inDropdown: true },
//         list: { inDropdown: true },
//         textAlign: { inDropdown: true },
//         link: { inDropdown: true },
//         history: { inDropdown: true },
//       }}
//     />
// </div>
// );
//   }
// }

export default TEditor;
