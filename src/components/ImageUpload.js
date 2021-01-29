import {useState} from 'react';
import Draggable from 'react-draggable';

const ImageUpload = () => {
    const [selectedFiles, setSelectedFiles] = useState([]);

    const handleImageChange = (e) => {
      // console.log(e.target.files[])
      if (e.target.files) {
        const filesArray = Array.from(e.target.files).map((file) =>
          URL.createObjectURL(file)
        );
  
        // console.log("filesArray: ", filesArray);
  
        setSelectedFiles((prevImages) => prevImages.concat(filesArray));
        Array.from(e.target.files).map(
          (file) => URL.revokeObjectURL(file) // avoid memory leak
        );
      }
    };
  
    const renderPhotos = (source) => {
    //   console.log("source: ", source);
      return source.map((photo) => {
        return (
            <Draggable>
                <div style={{zIndex: 100}}>
                    <img src={photo} alt="" key={photo} />
                </div>
            </Draggable>
        )
      });
    };
  
    return (
      <div className="app">
        <div className="heading">React Multiple Images Preview</div>
        <div>
          <input type="file" id="file" multiple onChange={handleImageChange} />
          <div className="label-holder">
            <label htmlFor="file" className="label">
              <i className="material-icons">Add Photos</i>
            </label>
          </div>
          <div className="result">{renderPhotos(selectedFiles)}</div>
          <button type='submit' className='btn' onClick={() => console.log(selectedFiles)}>Upload</button>
        </div>
      </div>
    );
  };

export default ImageUpload
