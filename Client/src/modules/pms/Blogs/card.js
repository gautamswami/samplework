import React from "react";
import {Link, useNavigate,useHistory} from 'react-router-dom';
import styled from "styled-components";
import "./style.css";

const BlogsCard = ({props}) => {
      const history = useHistory();
console.log(props)
      const handleClick =(data)=> {
        history.push({
          pathname: `/blogs-detail`, /* this path field is based on your project */
          state: data /* pass state data to app page */,
        });
      }

  return (
    <>
      <div
      onClick={()=>handleClick(props)}
        style={{
          border: "1px solid rgba(31, 31, 31, 0.2)",
          borderRadius: 10,
          width: 400,
          marginRight: 60,
          marginBottom: 60,
        }}
      >
        <div className="card-image">
          <img src={props?.image} alt="card-image" />
        </div>
        <div className="card-content">
          <h2 style={{ marginTop: 12 }}>{props?.dateCreated}</h2>
          <p>{props?.description}</p>
          <h2>{props?.authorName}</h2>

          <ul>
            <li>
              <img src="../icons/likes-icon.svg" alt="likes-icon" />
              <h2 className="mt-2 mr-3">{props?.likes}</h2>
            </li>
            <li>
              <img src="../icons/views.svg" alt="views-icon" />
              <h2 className="mt-2 mr-3">{props?.views}</h2>
            </li>
            <li>
              <img src="../icons/save.svg" alt="save-icon" />
              <h2 className="mt-2 mr-3">{props?.saved}</h2>
            </li>
            <li>
              <img src="../icons/comment-icon.svg" alt="comment-icon" />
              <h2 className="mt-2 mr-3">{props?.comment}</h2>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default BlogsCard;
