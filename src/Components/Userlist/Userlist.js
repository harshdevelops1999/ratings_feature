import React, { useState, useEffect } from "react";
import "./Userlist.css";
import axios from "axios";

function Userlist(props) {
  console.log(props);
  //   console.log(renderUserList);

  return (
    <div className="userList">
      {props &&
        props.renderData &&
        props.renderData.result &&
        props.renderData.result.map((item, idx) => {
          return (
            <>
              <div className="row">
                <div className="profile">
                  <img src={item.dpURL} width='48px' height='48px' alt="" />
                </div>
                <div className="details">
                  <div className="name">{item.firstname} {item.lastname}</div>
                  <div className="title">{item.title[0].value}</div>
                </div>
              </div>
              <div className="lineUserList"></div>
            </>
          );
        })}
    </div>
  );
}

export default Userlist;
