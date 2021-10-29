import React from 'react'
import "./style.css";
import avatar from "../../assets/image-jeremy.png";

export const MainCard = () => {
  const listTime = ["Daily", "Weekly", "Monthly"];

  return (
    <div className="card-main">
      <div className="profile">
        <img className="avatar" src={avatar} alt="avatar" />
        <p className="info">
          Report for
          <br />
          <h1>Jeremy<br/> Robson</h1>
        </p>
      </div>
      <div className="optionTime">
        {listTime.map((i) => {
          return <p>{i}</p>;
        })}
      </div>
    </div>
  );
};
