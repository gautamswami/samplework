import { style } from "@mui/system";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDropzone } from "react-dropzone";
import Cards from "../projects/cards";
import DeleteProject from "../projects/DeleteProject";

const mainDiv = styled.div``;
const Heading = styled.div``;
const Label = styled.label`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  line-height: 30px;
  color: #1f1f1f;
  margin-bottom: 0;
`;
const Line = styled.div`
  outline: 2px solid #ff7a59;
  width: 100px;
  margin-top: 1.2em;
`;
const Text = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 19px;
  margin-top: 1.9em;
  margin-bottom: 0;
`;
const Catlog = styled.div`
  margin-top: 1.9em;
`;

const CatlogText = styled.label`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
`;
const FileChoosen = styled.div`
  width: 300px;
  height: 100px;
  background: #f5f5f5;
  border: 1px dashed #696969;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const DropFile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const DropText = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 19px;
`;
const DropImg = styled.img`
  width: 49px;
  height: 32.67px;
`;
const ProductDesignDiv = styled.div`
  margin-top: 3.8em;
`;
const HeadingProductDesign = styled.label`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 1.1rem;
  line-height: 22px;
`;
const TextProductDesign = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 19px;
  margin-bottom: 0;
`;

const DivText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const CreateAccount = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 1rem;
  line-height: 19px;
  color: #ff865a;
  margin-left: 0.6em;
  margin-bottom: 0;
`;
const DesignDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const AddNewDesignDiv = styled.div`
  width: 400px;
  height: 470px;
  background: #f0f0f0;
  border: 1px dashed #696969;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

const AddNewDesign = styled.div``;
const LabelAddNewDesign = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #696969;
`;
const MainDialog = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: 9999;
  backdrop-filter: blur(0) contrast(0.1);
`;
const DialogContainer = styled.div`
  height: 697px;
  position: absolute;
  background: #ffffff;
  border-radius: 10px;
  left: 15%;
  width: 58.4%;
  top: 126px;
`;
const HeadingDialog = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 30px 40px;
`;
const DialogLabel = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 39px;
  color: #1f1f1f;
`;
const CrossIcon = styled.div``;

const LineDialog = styled.div`
  outline: 1px solid rgba(105, 105, 105, 0.5);
  width: 100%;
`;
const TabChangeDialog = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 40px;
  margin-top: 20px;
`;
const TabDialog = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 50px;
  align-items: center;
`;
const TabCircular = styled.div`
  border: 1px solid #696969;
  border-radius: 50%;
  margin-right: 10px;
  padding: 6px 11px 5px 11px;
`;
const TabLabel = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  line-height: 19px;
`;
const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 40px;
  margin-top: 25px;
  max-width: 100%;
  width:95%;
`;
const ProductdesignThumbnail = styled.div`
margin-right:2.3em;
`;
const LableThumbnail = styled(DialogLabel)`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 1.2em;
  line-height: 22px;
`;
const DropFileChoosenThumbnail=styled(FileChoosen)`
width: 400px;
height: 330px;
margin-top: 10px;
`
const IdealSize=styled.p`
font-family: 'Roboto';
font-style: normal;
font-weight: 300;
font-size: 16px;
line-height: 19px;
margin-top: 10px;
`
const Contanier = styled.div`
  margin-bottom: 30px;
`;
const Name = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #1f1f1f;
  margin-bottom: 10px;
`;
const InputField = styled.input`
  box-sizing: border-box;
  width: 600px;
  height: 40px;
  border: 1px solid rgba(31, 31, 31, 0.5);
  border-radius: 5px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  padding-left: 20px;
  line-height: 23px;
`;
const TextArea = styled.textarea`
  max-height: 8rem;
  min-height: 6.7rem;
  width: 600px;
  resize: none;
  border: 1px solid rgba(31, 31, 31, 0.5);
  border-radius: 5px;
`;
const Button=styled.button`
width: 250px;
height: 50px;
background: #1F1F1F;
border-radius: 5px;
color:white;
float:right;
`
const ButtonDiv=styled.div`
width: 90%;
margin:auto;
margin-top:20px;
`
const FilterMainContainer = styled.div``;

export default function ProductDesign() {
  const [selectFile, setSelectFile] = useState("");

  const { getRootProps, getInputProps } = useDropzone({
    accept: ".png,.jpg,.jpeg,.gif",
    maxSize: "40485760",
    onDrop: (acceptedFiles) => {
      setSelectFile(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const CardData = [
    {
      title: "Project Title biggy title no no big tis...",
      authorname: "Author Name",
      image: "card/Rectangle_1.png",
      date: "20-May-2022",
      like: "400",
      view: "1002",
      save: "1002",
      comment: "1098",
    },
    {
      title: "Project Title biggy title no no big tis...",
      authorname: "Author Name",
      image: "card/Rectangle_1.png",
      date: "20-May-2022",
      like: "400",
      view: "1002",
      save: "1002",
      comment: "1098",
    },
  ];
  const [openDialog, setDialog] = useState(false);
  return (
    <>
      <MainDialog style={{ display: openDialog ? "block" : "none" }}>
        <DialogContainer>
          <HeadingDialog>
            <DialogLabel>Add Product Designs</DialogLabel>
            <CrossIcon onClick={() => setDialog(false)}>x</CrossIcon>
          </HeadingDialog>

          <LineDialog></LineDialog>

          <TabChangeDialog>
            <TabDialog>
              <TabCircular>1</TabCircular>
              <TabLabel>Basic Details</TabLabel>
            </TabDialog>
            <TabDialog>
              <TabCircular>2</TabCircular>
              <TabLabel>Images</TabLabel>
            </TabDialog>
          </TabChangeDialog>

          <MainContainer>
            <ProductdesignThumbnail>
              <LableThumbnail>Product Design Thumbnail</LableThumbnail>
              <DropFileChoosenThumbnail {...getRootProps()}>
                <input {...getInputProps()} />
                <DropFile>
                  <DropImg src="/images/DropImage.svg" />

                  <DropText>Drop file or Choose a File</DropText>
                </DropFile>
              </DropFileChoosenThumbnail>
              <IdealSize>Ideal Size: 120 x 654</IdealSize>
            </ProductdesignThumbnail>

            <FilterMainContainer>

            <Contanier>
          <Name>Created By</Name>
          <InputField className="Input-Text"></InputField>
        </Contanier>
            

        
        <Contanier>
          <Name>Product Design Title</Name>
          <InputField className="Input-Text"></InputField>
        </Contanier>

        <Contanier>
          <Name>Brief Description Optional</Name>
          <TextArea className="Input-Text"></TextArea>
        </Contanier>
        

            </FilterMainContainer>

          </MainContainer>
          <LineDialog></LineDialog>
          <ButtonDiv>
          <Button>
            Next
          </Button>
          </ButtonDiv>
        </DialogContainer>
      </MainDialog>



      <mainDiv>
        <Heading>
          <Label>Product Designs</Label>
          <Line></Line>
          <Text>
            Display your product designs here. If you wish to sell these
            products please create a seller account with us.{" "}
          </Text>
        </Heading>
        {/* //Upload-catlog */}
        <Catlog>
          <CatlogText>Upload Catlog</CatlogText>
          <FileChoosen {...getRootProps()}>
            <input {...getInputProps()} />
            <DropFile>
              <DropImg src="/images/DropImage.svg" />

              <DropText>Drop file or Choose a File</DropText>
            </DropFile>
          </FileChoosen>
        </Catlog>
        {/* product Design */}
        <ProductDesignDiv>
          <HeadingProductDesign>Product Designs</HeadingProductDesign>
          <DivText>
            <TextProductDesign>Want to sell your products?</TextProductDesign>
            <CreateAccount>CREATE ACCOUNT</CreateAccount>
          </DivText>
          {/* add new design */}.
          <DesignDiv>
            <AddNewDesignDiv onClick={() => setDialog(true)}>
              <AddNewDesign>
                {/* <icon></icon> */}
                <LabelAddNewDesign>Add New Designs</LabelAddNewDesign>
              </AddNewDesign>
            </AddNewDesignDiv>

            {/* Dialog  */}

            {CardData.map((item) => (
              <Cards
                project={<DeleteProject />}
                title={item.title}
                authorname={item.authorname}
                image={item.image}
                date={item.date}
                like={item.like}
                view={item.view}
                save={item.save}
                comment={item.comment}
              />
            ))}
          </DesignDiv>
        </ProductDesignDiv>
      </mainDiv>
    </>
  );
}
