import React from 'react';
import "./style.css";
import CardNew from './card';

const data = [
    {
        id: 1,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq3ejs07SY5pLaWeu7-zpsBN0H2-UixxReGg&usqp=CAU",
        dateCreated: "20-May-2022",
        description: "Blog Title Blog big one ",
        authorName: "Author Name",
        likes: 400,
        views: 1002,
        saved: 1200,
        comment: 1098
    },
    {
        id: 2,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq3ejs07SY5pLaWeu7-zpsBN0H2-UixxReGg&usqp=CAU",
        dateCreated: "10-May-2022",
        description: " very big big very big one huge",
        authorName: "Author Name",
        likes: 400,
        views: 1002,
        saved: 1200,
        comment: 1098
    },
    {
        id: 3,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq3ejs07SY5pLaWeu7-zpsBN0H2-UixxReGg&usqp=CAU",
        dateCreated: "6-May-2022",
        description: " Title Blog big one",
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



const AllData = () => {

  return (
    <>
        <div className='main-container'>
            {data.map((singleContent) => 
               
                    
                        <CardNew  props={singleContent}/>
                  
                )
            }
        </div>
    </>
  )
}

export default AllData;