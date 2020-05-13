import React, {useEffect, useState, useCallback} from 'react';
import {useDropzone} from 'react-dropzone';
import { useDispatch, useSelector } from 'react-redux';
import {fileAction } from './fileAction';

const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 18
};

const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: 'border-box'
};
const box = {
  height:'150px',
  border:'1px solid black'
}
const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden'
};

const img = {
  display: 'block',
  width: 'auto',
  height: '100%'
};


function Test() {
  const [files, setFiles] = useState([]);
  const dispatch = useDispatch();
  const data = useSelector(state=>state.files);
  console.log("files",files);
  // console.log(data);
  // console.log(files);
  const {getRootProps, getInputProps} = useDropzone({
    accept: 'image/*',
    onDrop: useCallback(acceptedFiles => {
      // setFiles([...files, ...acceptedFiles]);
      
      dispatch(fileAction(acceptedFiles));
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
    })
  });

  const removeFile = file => () => {
    const newFiles = [...files];
    newFiles.splice(newFiles.indexOf(file), 1);
    setFiles(newFiles);
    dispatch(fileAction(newFiles));
  }
  
  const thumbs = files.map(file => (
    <div>
      <div style={thumb} key={file.name}>
        <div style={thumbInner}>
          <img
            src={file.preview}
            style={img}
          />
        </div>
      </div>
      <a onClick={removeFile(file)}><i class="fa fa-window-close"></i></a>
    </div>
  ));

  return (
    
    <section className="" style={{textAlign:'center', margin:'auto'}}>
      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
        <p style={box} >Drag 'n' drop some files here, or click to select files</p>
      </div>
      <aside style={thumbsContainer}>
        {thumbs}
      </aside>
      {console.log(files)}
    </section>
  );
}

export default Test;