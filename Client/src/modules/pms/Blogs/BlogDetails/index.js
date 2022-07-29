import React, { useState } from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Fade from '@mui/material/Fade';
import Slide, { SlideProps } from '@mui/material/Slide';
import Grow, { GrowProps } from '@mui/material/Grow';
import { TransitionProps } from '@mui/material/transitions';
import BlogsHeader from "../header";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 64px 16px 16px 16px;
`;
const Heading = styled.div`
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 20px;
`;
const Heading2 = styled.div`
  color: #1f1f1f;
  font-size: 55px;
  font-weight: 700;
  margin-bottom: 20px;
`;
const Heading3 = styled.div`
  font-weight: 300;
  font-size: 20px;
  color: #1f1f1f;
  color: #ff7a59;
`;
const ButtonHead = styled.div`
  width: 530px;
  display: flex;
  justify-content: space-between;
`;
const Button1 = styled.button`
  width: 250px;
  height: 50px;
  border: 2px solid #ff7a59;
  color: #ff7a59;
  font-size: 20px;
  background-color: #ffffff;
  border-radius: 10px;
`;
const Button2 = styled(Button1)`
  background-color: #ff7a59;
  color: #ffffff;
`;
const SecondDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 36px;
`;
const SearchDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 250px;
  border: 1px solid #696969;
  border-radius: 10px;
  height: 50px;
  background-color: #f5f5f5;
  padding: 2px 12px;
  margin-top:8px
`;
const InputSearch = styled.input`
  border: none;
  outline: none;
  width: 200px;
  background-color: #f5f5f5;
`;
const DropDown = styled.select`
  width: 240px;
  height: 45px;
  background: #ffffff;
  border: 1px solid #696969;
  border-radius: 10px;
  padding: 0.5em 3.5em 0.5em 1em;
`;
const Tab = styled.div`
  ${"" /* width: 441px; */}
  height: 39px;
  left: 455px;
  top: 283px;

  ${"" /* background: #f5f5f5; */}
  border-radius: 20px;
  margin: 0 0 37px 0;
`;
const AppliedTab = styled.div`
  margin-top: 6px;
`;
const PostButton = styled.button`
  border: none;
  background: none;
  min-width: 140px;
`;
const DraftButton = styled.button`
  border: none;
  background: none;
  min-width: 140px;
`;
const ClosedButton = styled.button`
  border: none;
  background: none;
  min-width: 206px;
`;
const SecondPara = styled.div`
font-size: 25px;
color: #000000;
margin-bottom: 14px;
`;
const ParaFirst = styled.div`
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 22px;
line-height: 27px;
margin-bottom: 60px;
width: 1100px

`;

function SlideTransition(props) {
    return <Slide {...props} direction="up" />;
  }

export default function () {
    const location = useLocation();
    const data= location.state;
    const [state, setState] = React.useState({
        open: false,
        Transition: Fade,
      });
    
      const handleClick = (Transition) => () => {
        setState({
          open: true,
          Transition,
        });
      };
    
      const handleClose = () => {
        setState({
          ...state,
          open: false,
        });
      };

  return (
    <div>
        <BlogsHeader />
      <div
        style={{
          width: "100%",
          height: 90,
          backgroundColor: "#F5F5F5",
          marginTop: 65,
          padding:'16px 24px 0px 24px',
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Link to="/blogs"
          style={{
            padding: "20px 16px",
            display: "flex",
            flexDirection: "row",
          }}

        >
          <ArrowBackIcon />
          <p style={{ marginLeft: 8 }}>Back</p>
        </Link>
        <SearchDiv>
          <SearchIcon
            style={{ color: "#888888", fontSize: 26, marginTop: 9 }}
          />
          <InputSearch type="text" placeholder="Search" />
        </SearchDiv>
      </div>

      <MainDiv>
        <Heading>{data.dateCreated}</Heading>
        <Heading2>
        {data.description}
        </Heading2>
        <Heading3>
        {data.id}
        </Heading3>
      </MainDiv>

      <div style={{ display: "flex", flexDirection: "row",marginLeft:12,justifyContent:'space-between',width: 1100, }}>
      <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ display: "flex", flexDirection: "row",width:50 }}>
            <img src="../icons/likes-icon.svg" alt="likes-icon" />
           
            <p style={{marginTop:16,marginLeft:6}}>6</p>
           
          </div>

          <div style={{ display: "flex", flexDirection: "row",width:50 }}>
            <img src="../icons/views.svg" alt="views-icon" />
            <p style={{marginTop:16,marginLeft:6}}>78</p>
          </div>

          <div style={{ display: "flex", flexDirection: "row",width:50 }}>
            <img src="../icons/save.svg" alt="save-icon" />
            <p style={{marginTop:16,marginLeft:6}}>35</p>
          </div>

          <div style={{ display: "flex", flexDirection: "row",width:50 }}>
            <img src="../icons/comment-icon.svg" alt="comment-icon" />
            <p style={{marginTop:16,marginLeft:6}}>24</p>
          </div>
        
      </div>


      <div style={{ display: "flex", flexDirection: "row",marginLeft:12 }}>

      <div onClick={handleClick(SlideTransition)} style={{ backgroundColor: '#FFF1EC',width:50,height:50,padding:'12px 16px',borderRadius:50,marginRight:12 }}>
            <img src="../icons/likes-icon.svg" alt="comment-icon" />
          </div>
          

          <div style={{ backgroundColor: '#FFF1EC',width:50,height:50,padding:'12px 16px',borderRadius:50 ,marginRight:12}}>
            <img src="../icons/views.svg" alt="views-icon" />
          </div>
         

          <div style={{ backgroundColor: '#FFF1EC',width:50,height:50,padding:'12px 16px',borderRadius:50,marginRight:12 }}>
            <img src="../icons/save.svg" alt="save-icon" />
          </div>
         

          <div style={{ backgroundColor: '#FFF1EC',width:50,height:50,padding:'12px 16px',borderRadius:50,marginRight:12 }}>
            <img src="../icons/comment-icon.svg" alt="comment-icon" />
          </div>
        
      </div>
          </div>
       
      <img
        src="https://static.vecteezy.com/packs/media/components/global/search-explore-nav/img/vectors/term-bg-1-666de2d941529c25aa511dc18d727160.jpg"
        style={{ width: 1100, height: 500,marginLeft:10,borderRadius:10,marginBottom:80 }}
        alt="card-image"
      />
<div>
  <SecondPara>
  Lorem ipsum dolor
  </SecondPara>
  <ParaFirst>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet justo quis tortor sagittis pretium. Vestibulum mattis fringilla elit, et pellentesque metus lacinia at. Praesent dignissim magna elit, et varius lacus pellentesque quis. Maecenas dignissim rutrum fermentum. Vivamus libero tortor, suscipit ac tellus et, maximus euismod arcu. Proin varius ultricies interdum. Donec dapibus lobortis neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis egestas cursus nisl et volutpat. Quisque tempor vitae augue non mollis.
  </ParaFirst>
  <SecondPara>
  Lorem ipsum dolor
  </SecondPara>
  <ParaFirst>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet justo quis tortor sagittis pretium. Vestibulum mattis fringilla elit, et pellentesque metus lacinia at. Praesent dignissim magna elit, et varius lacus pellentesque quis. Maecenas dignissim rutrum fermentum. Vivamus libero tortor, suscipit ac tellus et, maximus euismod arcu. Proin varius ultricies interdum. Donec dapibus lobortis neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis egestas cursus nisl et volutpat. Quisque tempor vitae augue non mollis.
  </ParaFirst>
</div>

<Snackbar
        open={state.open}
        autoHideDuration={6000}
        onClose={handleClose}
        TransitionComponent={state.Transition}
        message="I love snacks"
        key={state.Transition.name}
        anchorOrigin={{ vertical:'top', horizontal:'right' }}
        style={{backgroundColor:'#fff',color:'#000'}}
      />
    </div>
  );
}
