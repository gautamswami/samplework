import React from 'react'
import styled from 'styled-components'

const TopDiv = styled.div`
display:flex; 
align-items:center;
justify-content:space-between;
`
const BorderSpan= styled.span`
font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 25px;
line-height: 30px;
margin-bottom:20px;
`
const BorderHr = styled.div`
width: 100px;
height:0;
border-bottom: 3px solid #F24F17;
`
const Divrow = styled.div`
display:flex;
flex-direction:column;

`
const SaveBtn = styled.button`
width: 150px;
    height: 50px;
   background: #ffffff;
    border: 2px solid #f24f17;
    box-sizing: border-box;
    border-radius: 5px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 20px;
    color: #f24f17;
`
const ContentDiv=styled.div`
max-width: 822px;
`
const LabelP = styled.p`
font-family: 'Inter';
margin-top:40px;
margin-bottom:0;
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 24px;
color: #1F1F1F;`

const TextInput = styled.input`
max-width:820px;
width:100%;
height: 55px;
left: 185px;
top: 353px;
background: #FFFFFF;
border: 1px solid rgba(31, 31, 31, 0.5);
box-sizing: border-box;
border-radius: 5px;
outline:none;
margin-top:10px;
 `

export default function Commercial() {
  return (
   <>
   <TopDiv>
     <Divrow>
      <BorderSpan>Commercial Capability</BorderSpan>
      <BorderHr/>
      </Divrow>
      <SaveBtn >SAVE</SaveBtn>
    </TopDiv>
    <ContentDiv>
        
    <LabelP>Minimun Project Charges</LabelP>
   <TextInput placeholder='500090 $'/>
    <LabelP>Price per Square Feet</LabelP>
   <TextInput placeholder='500090 $'/>
    <LabelP>Preferred Work Location</LabelP>
   <TextInput placeholder=''/>
   <LabelP>Projects Types</LabelP>
   <TextInput placeholder=''/>
   <LabelP>Total Number of Projects Completed</LabelP>
   <TextInput placeholder=''/>
   <LabelP>Number of Ongoing Projects </LabelP>
   <TextInput placeholder=''/>
   <LabelP>Maximum Area Coverage</LabelP>
   <TextInput placeholder=''/>
    
    </ContentDiv>
   </>
  )
}
