import React, { useState } from "react";
import iconDown from "../../assets/icon-down.svg";
import iconUp from "../../assets/icon-up.svg";
import iconFacebook from "../../assets/icon-facebook.svg";
import iconInstagram from "../../assets/icon-instagram.svg";
import iconTwitter from "../../assets/icon-twitter.svg";
import iconYoutube from "../../assets/icon-youtube.svg";
import './style.css'

export const Overview = () => {
  const data = [
    {
      social: iconFacebook,
      name: "nathanf",
      followers: "1987",
      followersChanges: "12 Today",
      status: "green",
      lineTop:"hsl(208, 92%, 53%)"
    },
    {
      social: iconTwitter,
      name: "nathanf",
      followers: "1044",
      followersChanges: "99 Today",
      status: "green",
      lineTop:"linear gradient hsl(37, 97%, 70%) to hsl(329, 70%, 58%)"
    },
    {
      social: iconInstagram,
      name: "realnathanf",
      followers: "11k",
      followersChanges: "1099 Today",
      status: "green",
      lineTop:"hsl(348, 97%, 39%)"
    },
    {
      social: iconYoutube,
      name: "Nathan F.",
      followers: "8239",
      followersChanges: "144 Today",
      status: "red",
      lineTop:"hsl(208, 92%, 53%)"
    },
  ];
  const [items, setItems] = useState(data);

  return (
    <div className="container_overview">
      {items.map((item) => {
        return (
          <div className="card-overview" style={{borderTop:`3px solid ${item.lineTop}`}}>
            <div className="card_header">
              <img
                src={item.social}
                alt="icon"
              />
              <p className="card_header_name">@{item.name}</p>
            </div>
            <div className="card_main">
              <h1>{item.followers}</h1>
              <p>{item.social === iconYoutube ? "SUBSCRIBERS" : "FOLLOWERS"}</p>
            </div>

            {item.status === "green" ? (
              <div className=" card_footer">
                <img src={iconUp} alt="icon" />
                <p style={{ color: "green" }}>{item.followersChanges}</p>
              </div>
            ) : (
              <div className=" card_footer">
                <img src={iconDown} alt="icon" />
                <p style={{ color: "red" }}>{item.followersChanges}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
