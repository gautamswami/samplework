import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styled from "styled-components";
import "./OTPModal.css";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: '680px',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  borderRadius: '10px',
  p: 5,
  '@media screen and (max-width: 768px)' : {
    maxWidth: '80%',
    height: '30%',
    borderRadius: '10px'
  }
};

const OTPBox = styled(Box)`
    width: 100%;
    height: 32%;
    border: none !important;
    font-family: 'Inter' !important;
    font-style: normal !important;
    font-weight: 500 !important;
    font-size: 20px !important;
    line-height: 24px !important;
    color: #1F1F1F !important;
    @media screen and (max-width: 768px) {
      
    }
`;

const VerifyPara = styled(Typography)`
  font-size: 20px !important;
  font-weight: 600;
  color: #1F1F1F;
  font-family: 'Inter' !important;
`;

const ModalDesc = styled(Typography)`
  font-size: 15px !important;
  font-weight: 300 !important;
  font-family: 'Roboto' !important;
`;

const OTPModal = styled(Modal)`
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export default function EmailBasicModal(props) {
  const [changePassword, setChangePassword] = useState(false);

  
//   const [emailOpen, setEmailOpen] = useState(false);
//   const handleEmailOpen = (event) => {
//     event.preventDefault();  
//     setEmailOpen(true)
// };
//   const handleEmailClose = (event) => {
//     event.preventDefault();
//     setEmailOpen(false);
// };

const {verifyPara,continueButton} = props;
// consol
  return (
    <div>
      <OTPModal
        open={props.open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <OTPBox sx={style}>
          <VerifyPara id="modal-modal-title" variant="h6" component="h2">
         {verifyPara}
          </VerifyPara>
          <ModalDesc id="modal-modal-description" sx={{ mt: 1.2 }}>
          An OTP is sent to your mobile number. Please input that OTP here. Please wait for minimum 5 min. If you did not recieve it then click resend button.          </ModalDesc>
          <div className="email-OtpInput">
            <input className="email-inputOtp" type="text" maxLength={1} />
            <input className="email-inputOtp" type="text" maxLength={1} />
            <input className="email-inputOtp" type="text" maxLength={1} />
            <input className="email-inputOtp mr-0" type="text" maxLength={1} />
        </div>
        <div className="email-verifyButtons">
            <button className='Emailverify-resendbutton'>RESEND OTP</button>
            <button className='Emailverify-verifybutton' onClick={props.handleVerifyClick}>VERIFY</button>

        </div>
        </OTPBox>
  
      </OTPModal>
    </div>
  );
}
