// import * as React from 'react';
import React from "react";
// import 'react-tabs/style/react-tabs.css';
// import 'font-awesome/css/font-awesome.min.css';

// import Cards from "./cards"
import styled from "styled-components";

import "./PostedJobComponents.css";
import { useState } from "react";

import PostedJob from "./PostedJob";
import DraftJob from "./draftJob";
import ClosedJob from "./closedJob";
import OtherJob from "./OtherJob";
import CreateNewJobPost from "./CreateNewJobPost";

const AppliedJobTitle = styled.div`
  height: 30px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  line-height: 30px;

  color: #1f1f1f;
`;
const AppliedJobTitlePara = styled.p`
  // position: absolute;
  height: 19px;
  top: 200px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #1f1f1f;
`;
const PostButton = styled.button`
  border: none;
  min-width: 148px;
`;
const DraftButton = styled.button`
  border: none;
  min-width: 148px;
`;
const ClosedButton = styled.button`
  border: none;
  min-width: 148px;
`;
const AppliedTab = styled.div`
  display: flex;
  margin-top: 30px;
`;

const AlreadyButton = styled.div`
  border: none;
  min-width: 148px;
`;

const Tab = styled.div`
  height: 39px;

  background: #f5f5f5;
  border-radius: 20px;
  margin: 0 0 37px 0;
`;
const HeadersDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default function PostedJobComponents() {
  const [openJob, setOpenJob] = useState("tab1");
  const [openJobSave, setOpenJobSave] = useState(false);
  const [activeTab, setActiveTab] = useState("tab1");

  const [isCreated, SetIsCreated] = useState(false);

  const handleTab1 = () => {
    // update the state to tab1
    setActiveTab("tab1");
  };
  const handleTab2 = () => {
    // update the state to tab2
    setActiveTab("tab2");
  };
  const handleTab3 = () => {
    // update the state to tab3
    setActiveTab("tab3");
  };

  const handleTab4 = () => {
    // update the state to tab3
    setActiveTab("tab4");
  };

  const handleTab5 = () => {
    // update the state to tab3
    setActiveTab("tab5");
    SetIsCreated(true);
  };

  const HostPlac = styled.div`
    left: 83.91%;
    right: 5.21%;

    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    display: flex;
    align-items: center;
    text-decoration-line: underline;

    color: #f46430;
  `;

  const Total = styled.div`
    margin-top: 20px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;

    color: #1f1f1f;
  `;

  return (
    <>
      {isCreated ? (
        <div>
          <CreateNewJobPost />
        </div>
      ) : (
        <div className="container-fluid ">
          <div className="container-main-post">
            {/* heading */}
            <div className="row pad_post">
              <div className="col-12">
                <div className="row dis-title">Posted Jobs</div>
                {/* <div className="row dis-dis">Please input requested details below. Click submit once you are done</div> */}
              </div>
            </div>
            {/* heading */}

            {/* headline */}
            <div className="row">
              <div className="pms_headline"></div>
            </div>
            {/* headline */}

            <HeadersDiv>
              <div>
                <div className="row pms_sub_heading">
                  View all your posted jobs here
                </div>

                <div className="row">
                  <button className="view-emp-btn">
                    View Employer Account Details
                    <span>
                      {" "}
                      <img src="icons/arrow-right.svg" alt="next" />{" "}
                    </span>
                  </button>
                </div>
              </div>
              <div>
                <div>
                  <HostPlac>Host Placement Drive</HostPlac>
                </div>
                <Total>Total : 50 </Total>
              </div>
            </HeadersDiv>

            <div className="row">
              <AppliedTab>
                <Tab>
                  <PostButton
                    className={activeTab === "tab1" ? "active-post" : ""}
                    onClick={handleTab1}
                  >
                    Posted
                  </PostButton>
                  <DraftButton
                    className={activeTab === "tab2" ? "active-post" : ""}
                    onClick={handleTab2}
                  >
                    Drafts
                  </DraftButton>
                  <ClosedButton
                    className={activeTab === "tab3" ? "active-post" : ""}
                    onClick={handleTab3}
                  >
                    Closed
                  </ClosedButton>

                  <ClosedButton
                    className={activeTab === "tab4" ? "active-post" : ""}
                    onClick={handleTab4}
                  >
                    Other
                  </ClosedButton>

                  <AlreadyButton
                    className={activeTab === "tab5" ? "active-post" : ""}
                    onClick={handleTab5}
                  >
                    Already Employes
                  </AlreadyButton>
                </Tab>
              </AppliedTab>
            </div>

            {activeTab === "tab1" ? <PostedJob /> : ""}
            {activeTab === "tab2" ? <DraftJob /> : ""}
            {activeTab === "tab3" ? <ClosedJob /> : ""}
            {activeTab === "tab4" ? <OtherJob /> : ""}
          </div>
          <div></div>
        </div>
      )}
    </>
  );
}
