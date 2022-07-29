import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styled from 'styled-components';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 680,
  height: 254,
  bgcolor: '#FFFFFF',
  border: 'none',
  borderRadius: '10px',
  boxShadow: 24,
  p: 5,
};


const CreateBoardInput = styled.input`
    border: 1px solid rgba(31, 31, 31, 0.5);
border-radius: 5px;
width: 600px;
height: 50px;
outline:none;
margin: 20px 0px;
`;

const ButtonDiv = styled.div`

`;

const HeadingTypography = styled(Typography)`
    font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 24px;
color: #1F1F1F;

`;
const CancelButton = styled(Button)`
font-family: 'Inter' !important;
font-style: normal;
font-weight: 600;
font-size: 20px !important;
line-height: 24px;
width: 290px;
border: 2px solid #1F1F1F !important;
color: #1F1F1F !important;

`;

const CreateButton = styled(Button)`
font-family: 'Inter' !important;
font-style: normal;
font-weight: 600;
font-size: 20px !important;
line-height: 24px;
width: 290px;
border: 2px solid #1F1F1F !important;
color: #FFFFFF !important;
background-color: #000000 !important;
margin-left: 20px !important;
`;
export default function BasicModal(props) {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={props.open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <HeadingTypography id="modal-modal-title" variant="h6" component="h2">
            Board Name
          </HeadingTypography>
          <CreateBoardInput type="text" placeholder="Placeholder"/>
          <ButtonDiv>
              <CancelButton>CANCEL</CancelButton>
              <CreateButton >CREATE</CreateButton>
          </ButtonDiv>
        </Box>
      </Modal>
    </div>
  );
}
