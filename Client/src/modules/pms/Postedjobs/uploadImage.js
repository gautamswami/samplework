import React from "react";
import styled from "styled-components";
// import Art from "../../assets/SVGs/Art.svg";

const UplaodPara = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  text-align: center;

  color: #1f1f1f;


`;

const UploadComtainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const IdealSize = styled.p`
margin-top:20px;

`;

const Choose = styled.span`
    font-weight:600;
`;

class ImageFile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "someUniqueId", // I would use this.props.id for a real world implementation
      imageURI: null,
    };
  }

  buildImgTag() {
    let imgTag = null;
    if (this.state.imageURI !== null)
      imgTag = (
        <div>
          <img
            style={{ width: "200px", height: "200px", borderRadius: "6%" }}
            src={this.state.imageURI}
          ></img>
        </div>
      );
    return imgTag;
  }

  readURI(e) {
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();
      reader.onload = function (ev) {
        this.setState({ imageURI: ev.target.result });
      }.bind(this);
      reader.readAsDataURL(e.target.files[0]);
    }
  }

  handleChange(e) {
    this.readURI(e); // maybe call this with webworker or async library?
    if (this.props.onChange !== undefined) this.props.onChange(e); // propagate to parent component
  }

  render() {
    const imgTag = this.buildImgTag();

    return (
      <>
        <div
          className="fileUpload"
          style={{
            borderRadius: "50%",
            width: "200px",
            overflow: "hidden",
            height: "200px",
            backgroundColor: "#F5F5F5",
            border: "2px dashed #696969",
            opacity: 1,
            position: "relative",
          }}
        >
          <input
            id={this.state.id}
            type="file"
            onChange={this.handleChange.bind(this)}
            style={{
              padding: 0,
              margin: 0,
              cursor: "pointer",
              position: "absolute",
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              opacity: 0,
              width: "100%",
            }}
          />
          {imgTag}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              flexDirection: "column",
              justifyContent: "center",
              height: "100%",
            }}
          >
            {/* <img src={Art} alt="body" style={{ width: "50%" }} /> */}
            <p
              style={{
                color: "#696969",
                fontSize: "18px",
                margin: "0px",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
              }}
            >
              <UploadComtainer>
                <img
                  src="icons/dashboard-draganddrop-icon.svg"
                  alt="upload"
                  width="80px"
                />
                <UplaodPara>Drop file or <br/> <Choose>Choose a File </Choose></UplaodPara>
              </UploadComtainer>
            </p>
          </div>
          
          </div>
          <IdealSize>Ideal Size : 200 X 200 </IdealSize>
      </>
    );
  }
}

export default ImageFile;
