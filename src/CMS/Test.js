import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { useDispatch } from "react-redux";
import { fileAction } from "./fileAction";
import CancelIcon from "@material-ui/icons/Cancel";

const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  width: "80%",
  margin: "auto",
  marginTop: "1.5rem",
};

const thumb = {
  display: "inline-flex",
  margin: "0.3rem 1rem",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  width: 100,
  height: 100,
  boxSizing: "border-box",
};
const box = {
  height: "150px",
  borderRadius: "1.5rem",
  border: "1px solid black",
  margin: "auto",
  lineHeight: "150px",
  cursor: "pointer",
};
const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
};

const img = {
  display: "block",
  width: "auto",
  height: "100%",
};
const dropzoneinput = {
  width: "80%",
  margin: "auto",
};

function Test() {
  const [files, setFiles] = useState([]);
  const dispatch = useDispatch();
  // const data = useSelector(state=>state.files);
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: useCallback((acceptedFiles) => {
      // setFiles([...files, ...acceptedFiles]);
      dispatch(fileAction(acceptedFiles));
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    }),
  });

  const removeFile = (file) => () => {
    const newFiles = [...files];
    newFiles.splice(newFiles.indexOf(file), 1);
    setFiles(newFiles);
    dispatch(fileAction(newFiles));
  };

  const thumbs = files.map((file) => (
    <div>
      <div style={thumb} key={file.name}>
        <div style={thumbInner}>
          <img src={file.preview} alt="preview" style={img} />
        </div>
      </div>
      <CancelIcon
        fontSize="large"
        style={{ marginBottom: "7.5rem", marginLeft: "-0.8rem" }}
        onClick={removeFile(file)}
      />
    </div>
  ));

  return (
    <section className="" style={{ textAlign: "center", margin: "auto" }}>
      <div
        style={dropzoneinput}
        {...getRootProps({ className: "dropzone-input" })}
      >
        <input {...getInputProps()} />
        <p style={box}>
          Drag 'n' drop some files here, or click to select files
        </p>
      </div>
      <aside style={thumbsContainer}>{thumbs}</aside>
      {/* {console.log(files)} */}
    </section>
  );
}

export default Test;
