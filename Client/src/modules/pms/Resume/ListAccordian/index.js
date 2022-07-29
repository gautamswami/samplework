import React, { useCallback } from "react";
import { styled } from "@mui/material/styles";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import BranchForm from "../../../vms/shared/branch/branchForm";
// import BranchUpload from "../../../vms/shared/branch/branchUoload";
import BranchUpload from "../upload"
import {Link} from "react-router-dom"

import "../../../vms/shared/branch/branch.css"
import AccordianData from "../AccordianData";
import EducationForm from "../AccordianData/educationForm"
import CourcerForm from "../AccordianData/cour&cer"
import Award from "../AccordianData/awardAcc"
import Chips from "../Chips";
import AutoCompleteForm from "../AutoCompleteForm";




const AccordionBox = styled(Accordion)`
box-shadow:none !important;
width:100%;
`;


const AccordionSummaryBox = styled(AccordionSummary)`


box-shadow:none !important;
border-top:0.5px solid #1F1F1F80;
`;


const AccordionDetailsBox = styled(AccordionDetails)`
box-shadow:none !important;

`;


export default function ListAccordian() {


  const [expanded, setExpanded] = React.useState('');
  const [changeBackground , setChangeBackground] = React.useState('panel2')


  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
    setChangeBackground(isExpanded ? panel : false)
   
  };

  console.log(expanded);

  


  return (
    <>
      <div className="container-fluid b-container">
        <div className="row b-pad b-headline">
          {/* <div className="col-md-8">
            <div className="row b-title">Branch Details</div>
            <div className="row b-dis">Please input requested details below. Click submit once you are done</div>
          </div>
          <div className="col-md-4 pr-0">
       <Link to="/branchtable" ><button type="button" className=" b-submit-top-button float-right">Submit</button> </Link>
          </div> */}
        </div>
        <div className="row b-pad" style={{display:"flex", flexDirection:"column"}}>
       <div style={{display:"flex",justifyContent:"space-between"}}>
        <div style={{fontSize:"25px",fontWeight:"500", color:"#1F1F1F",marginBottom:"50px"}}>Resume</div>
       <button style={{backgroundColor:"#F24F17",color:"#ffffff",border:"none",outline:"none",width:"150px",height:"50px"}}>Save</button>
       </div>
        <div style={{color:"#F24F17", fontSize:"20px",border:"2px solid #F24F17",padding:"13px 26px",width:"299px", displey:"flex", justifyContent:"center",fontWeight:"600"}}>Already Have a Resume?</div>
        <div style={{fontSize:"18px",margin:"50px 0 20px 0", fontWeight:"500"}}>Create Resume</div>
         <div style={{fontSize:"20px"}}>Upload Resume Image</div>
         <span style={{fontSize:"14px",marginBottom:"20px"}}>Please provide a professional profile photo of yourself to make your resume more professional.</span>
              <Typography>
                  <BranchUpload/>
              </Typography>
            
        </div>
        <div className="row">
            <p className="b-orline"><span className="b-orline-text">or</span></p>
        </div>

        <div className="row b-pad">
       
        {/* <Typography sx={{ color: 'text.secondary' }} className="b-typo-dis">
                This optional section can help you stand out to recruiters. If this section is empty, it will not appear on your resume.
                </Typography> */}
          <AccordionBox expanded={expanded === 'panel1'} onChange={handleChange('panel1')} >
            <AccordionSummaryBox
          //  style={ changeBackground === "panel2" ? {backgroundColor:"#F4F4F4",borderBottomLeftRadius:"0px" ,borderBottomRightRadius:"0px"} : {backgroundColor:"white"}}
              expandIcon={<ExpandMoreIcon   />}
              
            > <div className="col">
               <Typography style={{border:"none",outline:"none"}} sx={{ width: '100%', flexShrink: 0 }} className="b-typo-heading">About</Typography>
                
              </div>

            </AccordionSummaryBox>
            <AccordionDetailsBox >
              <Typography>
              <textarea title='Foirst Name' value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean auctor, odio eu cursus egestas, purus sapien vestibulum eros, fermentum condimentum dui nunc eu mi. Morbi varius blandit faucibus." class="form-control b-field-height" id="inputEmail4"  />
              </Typography>
            </AccordionDetailsBox>
          </AccordionBox>
        </div>
        <div className="row b-pad">
          <AccordionBox expanded={expanded === 'panel2'} onChange={handleChange('panel2')} >
            <AccordionSummaryBox
           // style={ changeBackground === "panel2" ? {backgroundColor:"#F4F4F4",borderBottomLeftRadius:"0px" ,borderBottomRightRadius:"0px"} : {backgroundColor:"white"}}
              expandIcon={<ExpandMoreIcon   />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            > <div className="col">
                <Typography style={{border:"none",outline:"none"}} sx={{ width: '100%', flexShrink: 0 }} className="b-typo-heading">Experience</Typography>
                <Typography sx={{ color: 'text.secondary' }} className="b-typo-dis">
                This optional section can help you stand out to recruiters. If this section is empty, it will not appear on your resume.
                </Typography>
              </div>

            </AccordionSummaryBox>
            <AccordionDetailsBox >
              <Typography>
                 <AccordianData />
              </Typography>
            </AccordionDetailsBox>
          </AccordionBox>
        </div>

        {/* <div className="row b-pad">
          <AccordionBox expanded={expanded === 'panel4'} onChange={handleChange('panel4')} >
            <AccordionSummaryBox
            style={ changeBackground === "panel2" ? {backgroundColor:"#F4F4F4",borderBottomLeftRadius:"0px" ,borderBottomRightRadius:"0px"} : {backgroundColor:"white"}}
              expandIcon={<ExpandMoreIcon   />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            > <div className="col">
                <Typography sx={{ width: '100%', flexShrink: 0 }} className="b-typo-heading">Experience</Typography>
                <Typography sx={{ color: 'text.secondary' }} className="b-typo-dis">
                This optional section can help you stand out to recruiters. If this section is empty, it will not appear on your resume.
                </Typography>
              </div>

            </AccordionSummaryBox>
            <AccordionDetailsBox >
              <Typography>
                    <BranchForm/>
              </Typography>
            </AccordionDetailsBox>
          </AccordionBox>
        </div> */}




        <div className="row b-pad">
          <AccordionBox expanded={expanded === 'panel5'} onChange={handleChange('panel5')} >
            <AccordionSummaryBox
          //  style={ changeBackground === "panel2" ? {backgroundColor:"#F4F4F4",borderBottomLeftRadius:"0px" ,borderBottomRightRadius:"0px"} : {backgroundColor:"white"}}
              expandIcon={<ExpandMoreIcon   />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            > <div className="col">
                <Typography sx={{ width: '100%', flexShrink: 0 }} className="b-typo-heading">Education </Typography>
                <Typography sx={{ color: 'text.secondary' }} className="b-typo-dis">
                This optional section can help you stand out to recruiters. 
                </Typography>
              </div>

            </AccordionSummaryBox>
            <AccordionDetailsBox >
              <Typography>
                    {/* <BranchForm/> */}
                    <EducationForm />

              </Typography>
            </AccordionDetailsBox>
          </AccordionBox>
        </div>


        <div className="row b-pad">
          <AccordionBox expanded={expanded === 'panel6'} onChange={handleChange('panel6')} >
            <AccordionSummaryBox
           // style={ changeBackground === "panel2" ? {backgroundColor:"#F4F4F4",borderBottomLeftRadius:"0px" ,borderBottomRightRadius:"0px"} : {backgroundColor:"white"}}
              expandIcon={<ExpandMoreIcon   />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            > <div className="col">
                <Typography sx={{ width: '100%', flexShrink: 0 }} className="b-typo-heading">Courses & Certifications </Typography>
                <Typography sx={{ color: 'text.secondary' }} className="b-typo-dis">
                This optional section can help you stand out to recruiters. 
                </Typography>
              </div>

            </AccordionSummaryBox>
            <AccordionDetailsBox >
              <Typography>
                    {/* <BranchForm/> */}
                    <CourcerForm/>
              </Typography>
            </AccordionDetailsBox>
          </AccordionBox>
        </div>


        <div className="row b-pad">
          <AccordionBox expanded={expanded === 'panel7'} onChange={handleChange('panel7')} >
            <AccordionSummaryBox
         //   style={ changeBackground === "panel2" ? {backgroundColor:"#F4F4F4",borderBottomLeftRadius:"0px" ,borderBottomRightRadius:"0px"} : {backgroundColor:"white"}}
              expandIcon={<ExpandMoreIcon   />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            > <div className="col">
                <Typography sx={{ width: '100%', flexShrink: 0 }} className="b-typo-heading">Awards & Achievements </Typography>
                <Typography sx={{ color: 'text.secondary' }} className="b-typo-dis">
                This optional section can help you stand out to recruiters. 
                </Typography>
              </div>

            </AccordionSummaryBox>
            <AccordionDetailsBox >
              <Typography>
                    {/* <BranchForm/> */}
                    <Award/>

              </Typography>
            </AccordionDetailsBox>
          </AccordionBox>
        </div>



        <div className="row b-pad">
          <AccordionBox expanded={expanded === 'panel8'} onChange={handleChange('panel8')} >
            <AccordionSummaryBox
         //   style={ changeBackground === "panel2" ? {backgroundColor:"#F4F4F4",borderBottomLeftRadius:"0px" ,borderBottomRightRadius:"0px"} : {backgroundColor:"white"}}
              expandIcon={<ExpandMoreIcon   />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            > <div className="col">
                <Typography sx={{ width: '100%', flexShrink: 0 ,marginBottom:2}} className="b-typo-heading">Skills</Typography>
                {/* <Chips /> */}
              </div>

            </AccordionSummaryBox>
            <AccordionDetailsBox >
              <Typography>
                  <AutoCompleteForm />
              </Typography>
            </AccordionDetailsBox>
          </AccordionBox>
        </div>



        <div className="row b-pad">
          <AccordionBox expanded={expanded === 'panel9'} onChange={handleChange('panel9')} >
            <AccordionSummaryBox
          //  style={ changeBackground === "panel2" ? {backgroundColor:"#F4F4F4",borderBottomLeftRadius:"0px" ,borderBottomRightRadius:"0px"} : {backgroundColor:"white"}}
              expandIcon={<ExpandMoreIcon   />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            > <div className="col">
                <Typography sx={{ width: '100%', flexShrink: 0 }} className="b-typo-heading">Languages</Typography>
                <Typography sx={{ color: 'text.secondary' }} className="b-typo-dis">
                This optional section can help you stand out to recruiters. If this section is empty, it will not appear on your resume.
                </Typography>
              </div>

            </AccordionSummaryBox>
            <AccordionDetailsBox >
              <Typography>
                    <BranchForm/>
              </Typography>
            </AccordionDetailsBox>
          </AccordionBox>
        </div>


        <div className="row b-pad">
          <AccordionBox expanded={expanded === 'panel10'} onChange={handleChange('panel10')} >
            <AccordionSummaryBox
      //      style={ changeBackground === "panel2" ? {backgroundColor:"#F4F4F4",borderBottomLeftRadius:"0px" ,borderBottomRightRadius:"0px"} : {backgroundColor:"white"}}
              expandIcon={<ExpandMoreIcon   />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            > <div className="col">
                <Typography sx={{ width: '100%', flexShrink: 0 }} className="b-typo-heading">Hobbies</Typography>
                <Typography sx={{ color: 'text.secondary' }} className="b-typo-dis">
                This optional section can help you stand out to recruiters. If this section is empty, it will not appear on your resume.
                </Typography>
              </div>

            </AccordionSummaryBox>
            <AccordionDetailsBox >
              <Typography>
                    <BranchForm/>
              </Typography>
            </AccordionDetailsBox>
          </AccordionBox>
        </div>


      </div>
    </>
  );
}
