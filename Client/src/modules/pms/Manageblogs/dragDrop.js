import React, { useMemo, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import "./CommonBlog.css";
import styled from "styled-components";
const UploadImg = styled.img`
  margin-left: 66px;
  margin-bottom: 2px;
  position: relative;
`;
const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  outline: "none",
  transition: "border .24s ease-in-out",
  width: "400px",
  height: "230px",
  background: "#F5F5F5",
  border: "1px dashed #696969",
  borderRadius: "5px",
};

const activeStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16,
};

const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  width: "auto",
  height: "230px",
  boxSizing: "border-box",
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
};

const img = {
  display: "block",
  width: "392px",
  height: "226px",
};

export default function StyledDropzone(props) {
  const [files, setFiles] = useState([]);
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
    acceptedFiles,
    open,
  } = useDropzone({
    accept: "image/*",
    noClick: true,
    noKeyboard: true,
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject]
  );

  const thumbs = files.map((file) => (
    <div key={file.name}>
      <div>
        <img src={file.preview} style={img} />
      </div>
    </div>
  ));

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  const filepath = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    // <div className="container" style={{ marginBottom: "20px" }}>
    <div style={{ marginBottom: "20px" }}>
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <div style={{ margin: "auto" }}>
          <UploadImg src="/images/upload.svg" onClick={open}></UploadImg>
          <div style={{ display: "flex", position: "relative" }}>
            <p> Drop File or </p>{" "}
            <p
              style={{
                textDecoration: "underline",
                fontWeight: "800",
                marginLeft: "4px",
              }}
              onClick={open}
            >
              Choose a File
            </p>
          </div>
        </div>

        <aside style={{ position: "absolute" }}>{thumbs}</aside>
      </div>
      <aside>
        {/* <h4>Files</h4>
        <ul>{filepath}</ul> */}
      </aside>
    </div>
  );
}
