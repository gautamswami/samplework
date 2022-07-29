import React from "react";

export default function VideoUploader() {
  const inputRef = React.useRef();

  const [source, setSource] = React.useState();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    setSource(url);
  };

  const handleChoose = (event) => {
    inputRef.current.click();
  };


  let VideoPreview;
  if (source) {
      VideoPreview = <div className="containervideo"><video
      className="VideoInput"
      width="450px"
      height="250px"
      autoPlay
      src={source}
    />
    </div>;
  }




  return (

    <div className='project-image-upload-file'>
    <input ref={inputRef} type="file" onChange={handleFileChange} accept=".mov,.mp4" />
    <div className='upload-icon-container'>
        <img src="/icons/backup.png" alt="upload" />
        <div className='upload_discription'>Drop file or <span>Choose a File</span></div>
    </div>
    {VideoPreview}
    </div>
  );
}

