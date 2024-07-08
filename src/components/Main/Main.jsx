import React from "react";
import "./Main.css";
import { assets } from "../../assets/assets";

const Main = () => {
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="maincontainer">
        <div className="greet">
          <p>
            <span>Hello,Sanju</span>
          </p>
          <p>How can I Help you Today</p>
        </div>
        <div className="cards">

      
        <div className="card">
          <p>
            dont regret..dont fall.. you will rise and shine just wait for your
            moment
          </p>
          <img src={assets.compass_icon} alt="" />
        </div>

        <div className="card">
          <p>
            Hey you wassup long time no see i was thinking about you yesterday
          </p>
          <img src={assets.bulb_icon} alt="" />
        </div>

        <div className="card">
          <p>
            Do you remember the place and moment when we first met i think this
            is that place
          </p>
          <img src={assets.message_icon} alt="" />
        </div>

        <div className="card">
          <p>
            Injuries wont decide you whether you are good or not dont worry no
            matter what i will always support you
          </p>
          <img src={assets.code_icon} alt="" />
        </div>
      </div>
      <div className="mainbottom">
        <div className="searchbox">
            <input type="text" placeholder="Enter a prompt here" />
          
            <div>
            <img src={assets.gallery_icon} alt="" />
            <img src={assets.mic_icon} alt="" />
            <img src={assets.send_icon} alt="" />
        </div>
        </div>
        <p className="bottominfo">
        Gemini may display inaccurate info, including about people, so double-check its responses.
         
        </p>
      </div>
      </div>
    </div>
  );
};

export default Main;
