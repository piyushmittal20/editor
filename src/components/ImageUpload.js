// import {useState} from 'react';

const ImageUpload = ({selectedFiles, setSelectedFiles}) => {
  // const [selectedFiles, setSelectedFiles] = useState([]);

  const handleImageChange = (e) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );

      setSelectedFiles((prevImages) => prevImages.concat(filesArray));
      Array.from(e.target.files).map(
        (file) => URL.revokeObjectURL(file) // avoid memory leak
      );
    }
  };

  // const renderPhotos = (source) => {
  //   console.log("source: ", source);
  //   return source.map((photo) => {
  //     return (
  //             <div style={{zIndex: 100}}>
  //                 <img src={photo} alt="" key={photo} />
  //             </div>
  //     )
  //   });
  // };

  return (
    <div className="app">
      <h1>Image Upload</h1>
      {/* <div className="heading">React Multiple Images Preview</div> */}
      <div>
        <input type="file" id="file" multiple onChange={handleImageChange} />
        <div className="label-holder">
          <label htmlFor="file" className="label">
            <i className="material-icons">Add Photos</i>
          </label>
        </div>
        {/* <div className="result">{renderPhotos(selectedFiles)}</div> */}
        <button type='submit' className='btn' onClick={() => console.log(selectedFiles)}>Upload</button>
      </div>
    </div>
  );
};

export default ImageUpload
