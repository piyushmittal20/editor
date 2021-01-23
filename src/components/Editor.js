import React, { Component } from 'react';
import {EditorState} from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

class TEditor extends Component {
    constructor(props){
        super(props);
        this.state = {
          editorState: EditorState.createEmpty(),
        };
      }
    
      onEditorStateChange = (editorState) => {
        
        this.setState({
          editorState,
        });
    };
    
  
  render() {
    
    const { editorState } = this.state;
    
        return (
            <div className="size">
                 <Editor
        editorState={editorState}
        onEditorStateChange={this.onEditorStateChange}    
        toolbar={{
          inline: { inDropdown: true },
          list: { inDropdown: true },
          textAlign: { inDropdown: true },
          link: { inDropdown: true },
          history: { inDropdown: true },
        }}
      />
  </div>
);
    }
}

export default TEditor;