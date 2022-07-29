import React from "react";
import { Router, Route } from "react-router-dom";
import { Redirect, Switch } from "react-router";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import { connect } from "react-redux";
import BaseComponent from "./modules/baseComponent";


import BankDetailPms from "./modules/pms/Bankdetails"
import ProfessionalBankDetails from "./modules/pms/Bankdetails";

import Projects from "./modules/pms/projects/index";
import PersonalDetail from "./modules/pms/PersonalDetails/index";
import ProfessionalBusinessDetails from "./modules/pms/ProfessionalBusinessDetails/index";
import ProductDesign from "./modules/pms/ProductDesign/index";
import PostedJob from "./modules/pms/Postedjobs/index"

import Job from "./modules/pms/AppliedJobs";

import ManageBlog from "./modules/pms/Manageblogs"
import FavoritePms from "./modules/pms/Favorites";
// import Resume from "./modules/pms/Resume";
import createNewBlog from "./modules/pms/Manageblogs/createNewBlog"
import CommercialCapability from "./modules/pms/CommercialCapability";

import ProfessionalTeachIndex from "./modules/pms/ProfessionalTeach";

import Blogs from "./modules/pms/Blogs";
import BlogDetails from "./modules/pms/Blogs/BlogDetails";
import FavoriteList from "./modules/pms/Favorites/ListFav/FavoriteList"

class Routes extends BaseComponent {
  componentDidMount() { }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Router >
          <Switch>
            {/* <Route exact path={"/"} component={Login} /> */}
            {/* <Route exact path={"/sign-up"} component={SignUp} />
            <Route exact path={"/"} component={SignIn} />
            <Route exact path={"/signin"} component={SignInPhone} /> */}
        
        <Route exact path={"/"} component={PersonalDetail} />

            {/* <Route exact path={"/header"} component={Header} /> */}
            {/* <Route exact path={"/branch"} component={branchIndex} /> */}
            {/* <Route exact path={"/contact"} component={ContactIndex} /> */}
            {/* <Route exact path={"/resume"} component={Resume} /> */}
            {/* <Route exact path={"/studentresume"} component={StudentResume} /> */}
            {/* <Route exact path="/kyc" component={KycIndex} /> */}
            {/* <Route exact path={"/location"} component={Location} /> */}
            {/* <Route exact path={"/bankdetails"} component={BankDetails} /> */}
            {/* <Route exact path={"/branch"} component={Branch} /> */}
            {/* <Route exact path={"/branchtable"} component={BranchTable} /> */}
            {/* <Route exact path={"/category"} component={Category} /> */}
            {/* <Route exact path={"/distribution"} component={distributionIndex} /> */}
           {/* <Route exact path={"/ongoing-course"} component={OnGoingCourse} />  */}
            {/* <Route exact path={"/distributionData"} component={userData} /> */}

            <Route exact path={"/bankdetails-pms"} component={BankDetailPms} />

            <Route exact path={"/professional-projects"} component={Projects} />
            {/* <Route exact path={"/student-project"} component={Studentprojects} /> */}
            <Route exact path={"/professional-personaldetail"} component={PersonalDetail} />
            {/* <Route exact path={"/Professional-resume"} component={Resume} /> */}
            <Route exact path={"/professional-businessdetail"} component={ProfessionalBusinessDetails} />
            <Route exact path={"/product-design"} component={ProductDesign} />

            <Route exact path={"/professional-favorite"} component={FavoritePms} />
            <Route exact path={"/professional-postedjob"} component={PostedJob} />
            <Route exact path={"/professional-manageblog"} component={ManageBlog} />
            <Route exact path={"/professional-bankdetails"} component={ProfessionalBankDetails} />
            <Route exact path={"/professional-commercial"} component={CommercialCapability} />
            {/* <Route exact path={"/student-profile"} component={StudentProfile} /> */}
            {/* <Route exact path={"/basic-details"} component={BasicCompanyDetails} /> */}
            <Route exact path={"/professional-teach"} component={ProfessionalTeachIndex} />
            <Route exact path={"/professional-create-blog"} component={createNewBlog} />
            {/* <Route exact path={"/studentfavorite"} component={StudentFavorites} /> */}

            

{/* 
            <Route exact path={"/my-jobs"} component={Job} />
            <Route exact path={"/studentjob"} component={StudentJob} />
            <Route exact path={"/student-manageblog"} component={StudentManageBlogComponents} />
            <Route exact path={"/blogs"} component={Blogs} />
            <Route exact path={"/blogs-detail"} component={BlogDetails} />



            <Route exact path={"/favoritelist"} component={FavoriteList} /> */}
 
            <Redirect exact from="*" to="/" />
          </Switch>
        </Router>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = (state) => {
  return { user: state.user };
};
export default connect(mapStateToProps)(Routes);
