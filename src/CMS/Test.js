import React, {useEffect, useState} from 'react';
import {useDropzone} from 'react-dropzone';
import { useDispatch, useSelector } from 'react-redux';
import {fileAction } from './fileAction';

const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16
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
  // let file = useSelector(state=>console.log(state));
  const [files, setFiles] = useState([]);
  const dispatch = useDispatch();
  console.log(files);
  const {getRootProps, getInputProps} = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
    }
  });
  
  const thumbs = files.map(file => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          style={img}
        />
      </div>
    </div>
  ));

  useEffect(() => () => {
    // Make sure to revoke the data uris to avoid memory leaks
    files.forEach(file => URL.revokeObjectURL(file.preview));
    dispatch(fileAction(files));
  }, [files]);

  return (
    <section className="" style={{textAlign:'center', margin:'auto'}}>
      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
        <p style={box}>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <aside style={thumbsContainer}>
        {thumbs}
      </aside>
    </section>
  );
}



export default Test;