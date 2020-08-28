import React, { useState, useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { useDispatch, useSelector } from "react-redux";
import { fileAction } from "./fileAction";
import CancelIcon from "@material-ui/icons/Cancel";
import { store } from "../";

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
  zIndex: "-1 !important",
};
const dropzoneinput = {
  width: "80%",
  margin: "auto",
};

function Test() {
  const [files, setFiles] = useState([]);
  const UploadSuccess = useSelector((state) => state.uploadSuccess);

  const [index, setIndex] = useState(null);

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
  const handlechangeCover = (index) => {
    setIndex(index); //1
  };
  useEffect(() => {
    store.dispatch({ type: "SET_COVER_IMAGE", payload: index });
    setFiles([]);
  }, [index, UploadSuccess]);

  const thumbs = files.map((file, i) => {
    return (
      <div key={file.name} style={{ position: "relative" }}>
        <div style={thumb} key={file.name}>
          <div style={thumbInner}>
            <img src={file.preview} alt="preview" style={img} />
          </div>
        </div>
        <div>
          <span className="radio-cover">
            <input
              value={index}
              onClick={() => handlechangeCover(i)}
              type="radio"
              name="Cover"
            />
            Cover
          </span>
          {/* <span className="img-cancel-icon"> */}
          <CancelIcon
            fontSize="large"
            style={{ position: "absolute", top: 0, left: "10rem" }}
            onClick={removeFile(file)}
          />
          {/* </span> */}
        </div>

        {/* <FormControlLabel
        control={<Switch name="cover" checked={checked} onChange={toggleChecked} />}
        label="Cover"
      /> */}
      </div>
    );
  });

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
    </section>
  );
}

export default Test;
