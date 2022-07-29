import React from 'react';
import styled from 'styled-components';
import "./ProfessionalTeach.css";

const TopDiv = styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 25px;
    line-height: 30px;
    color: #1F1F1F;
`;

const BorderLine = styled.div`
    width: 100px;
    margin-top: 20px;
    border: 3px solid #F24F17;
`;

const MainContent = styled.div`
    margin: 30px 0px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #1F1F1F;
`;
const CreateAccount = styled.button`
    background: #F46430;
    border: none;
    border-radius: 5px;
    padding: 13px 46px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    color: #FFFFFF;
`;

const ProfessionalTeach = () => {
  return (
    <>
        <div>
            <TopDiv>
                <h1>Teach On ML</h1>
                <BorderLine></BorderLine>
            </TopDiv>
            <MainContent>
                <p>Want to start your career as a teacher? Join Us Now. Create an Educationist Account.</p>
                <CreateAccount>
                    Create Account
                </CreateAccount>
            </MainContent>
        </div>
    </>
  )
}

export default ProfessionalTeach