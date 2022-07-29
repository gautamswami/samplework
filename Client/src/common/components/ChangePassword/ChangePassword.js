import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styled from "styled-components";
import "./ChangePassword.css";

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
    height: 54%;
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
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #1F1F1F;
`;

const ModalDesc = styled(Typography)`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  margin-top: 10px !important;
  margin-bottom: 40px;
  line-height: 21px;
  /* identical to box height */
  color: #1F1F1F;

`;

const OTPModal = styled(Modal)`
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export default function EmailBasicModal(props) {
 


const {verifyPara,continueButton} = props;
// consol
  return (
    <div onClick={props.handleModalChange}>
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
            Please reset your password
          </ModalDesc>
          <div className="email-OtpInput">
            <div className='choose-password'>
                <h1>Choose Password</h1>
                <input type="password" />
            </div>
            <div className='confirm-password'>
                <h6>Confirm Password</h6>
                <input type="password" />
            </div>
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
