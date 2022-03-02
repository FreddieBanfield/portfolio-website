import React from "react";
import "./topbar.scss";
import "../../global.scss";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left"></div>
        <div className="right">
          <ul className="tb_buttons">
            <li>
              <a href="#aboutme" id="tb_aboutme">
                About Me
              </a>
              <div className="button_bar" id="tb_aboutme_bar"></div>
            </li>
            <li>
              <a href="#portfolio" id="tb_portfolio">
                Portfolio
              </a>
              <div className="button_bar" id="tb_portfolio_bar"></div>
            </li>
            <li>
              <a href="#employment" id="tb_employment">
                Employment
              </a>
              <div className="button_bar" id="tb_employment_bar"></div>
            </li>
            <li>
              <a href="#education" id="tb_education">
                Education
              </a>
              <div className="button_bar" id="tb_education_bar"></div>
            </li>
            <li>
              <a href="#letschat" id="tb_letschat">
                Let's Chat
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
