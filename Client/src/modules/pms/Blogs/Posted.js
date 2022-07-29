import React from "react";
import "./style.css";
// import Data from "./Data";
import CardNew from "./card";
import { history } from "../../../managers/history";
// import ManageBlogComponents from './ManageBlogComponents';

const data = [
    {
        id: 1,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq3ejs07SY5pLaWeu7-zpsBN0H2-UixxReGg&usqp=CAU",
        dateCreated: "20-May-2022",
        description: "Blog Title Blog big one blog blog very big big very big one huge",
        authorName: "Author Name",
        likes: 400,
        views: 1002,
        saved: 1200,
        comment: 1098
    },
    {
        id: 2,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq3ejs07SY5pLaWeu7-zpsBN0H2-UixxReGg&usqp=CAU",
        dateCreated: "20-May-2022",
        description: "Blog Title Blog big one blog blog very big big very big one huge",
        authorName: "Author Name",
        likes: 400,
        views: 1002,
        saved: 1200,
        comment: 1098
    },
    {
        id: 3,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq3ejs07SY5pLaWeu7-zpsBN0H2-UixxReGg&usqp=CAU",
        dateCreated: "20-May-2022",
        description: "Blog Title Blog big one blog blog very big big very big one huge",
        authorName: "Author Name",
        likes: 400,
        views: 1002,
        saved: 1200,
        comment: 1098
    },
    {
        id: 4,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq3ejs07SY5pLaWeu7-zpsBN0H2-UixxReGg&usqp=CAU",
        dateCreated: "20-May-2022",
        description: "Blog Title Blog big one blog blog very big big very big one huge",
        authorName: "Author Name",
        likes: 400,
        views: 1002,
        saved: 1200,
        comment: 1098
    },
    {
        id: 5,
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq3ejs07SY5pLaWeu7-zpsBN0H2-UixxReGg&usqp=CAU",
        dateCreated: "20-May-2022",
        description: "Blog Title Blog big one blog blog very big big very big one huge",
        authorName: "Author Name",
        likes: 400,
        views: 1002,
        saved: 1200,
        comment: 1098
    },
    {
        id: 6,
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq3ejs07SY5pLaWeu7-zpsBN0H2-UixxReGg&usqp=CAU",
        dateCreated: "20-May-2022",
        description: "Blog Title Blog big one blog blog very big big very big one huge",
        authorName: "Author Name",
        likes: 400,
        views: 1002,
        saved: 1200,
        comment: 1098
    },
    {
        id: 7,
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq3ejs07SY5pLaWeu7-zpsBN0H2-UixxReGg&usqp=CAU",
        dateCreated: "20-May-2022",
        description: "Blog Title Blog big one blog blog very big big very big one huge",
        authorName: "Author Name",
        likes: 400,
        views: 1002,
        saved: 1200,
        comment: 1098
    },
    
]

const Posted = () => {
  return (
    <>
      <div className="main-container">
        {/* <div
          className="add-icon"
          onClick={() => history.push("/professional-create-blog")}
        >
          <img
            src="../icons/add-icon.svg"
            alt="card-icon"
            className="addicon-image"
          />
          Create New
        </div> */}
        {data.map((singleContent) => {
          return (
            <>
              <CardNew
                id={singleContent.id}
                image={singleContent.image}
                dateCreated={singleContent.dateCreated}
                description={singleContent.description}
                authorName={singleContent.authorName}
                likes={singleContent.likes}
                views={singleContent.views}
                saved={singleContent.saved}
                comment={singleContent.comment}
              />
            </>
          );
        })}
      </div>
    </>
  );
};

export default Posted;
