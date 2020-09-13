import React from "react";

import { Twitter } from "react-feather";
import { Linkedin } from "react-feather";
import { Instagram } from "react-feather";
import { Youtube } from "react-feather";
import "./home.styles.scss";

const Home = () => {
  return (
    <div className="home">
      <div className=" row rrow">
        <div className='col-md-8 column  align-self-center'>
          <div className="left-text">
            <h2 className="main-text">Hi,
                      My name is Omoke.</h2>
            <div className="sub-text">I am a Software Developer</div>
            <p className="bio-text"></p>
          </div>
        </div>
        <div className='col-md-4 column'>
          

        </div>
      </div>
      <p className="follow-text text-center">Follow me</p>
      <div className="sm-list">
        <Twitter className="icons" />
        <Linkedin className="icons" />
        <Instagram className="icons" />
        <Youtube className="icons" />
      </div>
    </div>
  );
};

export default Home;
