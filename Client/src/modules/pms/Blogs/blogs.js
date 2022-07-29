import React, { useState } from "react";
import styled from "styled-components";
import AllData from "./allData";
import Posted from "./Posted";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import SearchIcon from '@mui/icons-material/Search';
import BlogDetails from "./BlogDetails";
const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding:64px 16px 64px 16px;
  background-color: #f5f5f5 !important;
`;
const Heading = styled.div`
  color: #ff7a59;
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 30px;
`;
const Heading2 = styled.div`
  color: #1f1f1f;
  font-size: 55px;
  font-weight: 700;
  margin-bottom: 30px;
  text-align:center;
`;
const Heading3 = styled.div`
  font-weight: 300;
  font-size: 20px;
  color: #1f1f1f;
  margin-bottom: 30px;
  text-align:center;
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
  margin-top:36px;
`;
const SearchDiv = styled.div`
  
  display:flex;
  flex-direction:row;
  width: 250px;
  border: 1px solid #696969;
  border-radius: 10px;
  height: 50px;
  background-color: #f5f5f5;
  padding:2px 12px;
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

const Blogs = () => {
  const [activeTab, setActiveTab] = React.useState(0);
  return (
    <div>
   
<>
<MainDiv>
        <Heading>Blogs</Heading>
        <Heading2>
          There is always more than one
          <br /> way to gain knowledge
        </Heading2>
        <Heading3>
          Explore blogs and articles from many different fields of construction
          industry. Save, like <br /> and drop a comment on blogs of your liking. You
          can even share your knowledge with <br /> others in form of a blog.
        </Heading3>
        <ButtonHead>
          <Button1>Explore Now</Button1>
          <Button2>Share your Blog</Button2>
        </ButtonHead>

        <ArrowDownwardIcon style={{marginTop:24,fontSize:44,color:'#FF7A59'}} /> 
      </MainDiv>
      <SecondDiv>
        <SearchDiv>
          <SearchIcon  style={{color:'#888888',fontSize:26,marginTop:8}} />
          <InputSearch type="text" placeholder="Search" />
        </SearchDiv>

        <AppliedTab>
          <Tab>
            <PostButton
              className={activeTab === 0 ? "active-post" : ""}
              onClick={() => setActiveTab(0)}
            >
              All
            </PostButton>
            <DraftButton
              className={activeTab === 1 ? "active-post" : ""}
              onClick={() => setActiveTab(1)}
            >
              Architecture
            </DraftButton>
            <ClosedButton
              className={activeTab === 2 ? "active-post" : ""}
              onClick={() => setActiveTab(2)}
            >
              Interior Designing
            </ClosedButton>
            <ClosedButton
              className={activeTab === 3 ? "active-post" : ""}
              onClick={() => setActiveTab(3)}
            >
              Civil Engineering
            </ClosedButton>
            
          </Tab>
        </AppliedTab>

        <DropDown>
          <option>Trending</option>
          <option>Hii</option>
        </DropDown>
      </SecondDiv>
      {/* <AllData />
  <Posted /> */}


<span style={{margin:'24px 0',height:12}}>76546 Results</span>
      {activeTab === 0 ? (
        <AllData />
      ) : activeTab === 1 ? (
        <AllData />
      ) : activeTab === 2 ? (
        <AllData />
      ) : activeTab === 3 ? (
        <AllData />
      ) : (
        <AllData />
      )}

      <button style={{width: 250,
height: 50,
border: '2px solid #696969',
borderRadius: 10,
padding:'12px 74px',
textAlign:'center',
display:'flex',
marginLeft:'auto',
marginRight:'auto',
backgroundColor:'#fff'

}}>
      LOAD MORE
      </button>
</>
     


 
    </div>
  );
};

export default Blogs;
