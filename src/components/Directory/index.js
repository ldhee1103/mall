import React from "react";
import men from "./../../assets/home/images/men.jpg";
import women from "./../../assets/home/images/women.jpg";
import "./styles.scss";

function Directory(){
  return (
    <div className="Directory">
        <div>
            <img src={men}/>
            <p>남성의류</p>
        </div>
        <div>
            <img src={women}/>
            <p>여성의류</p>
        </div>
    </div>
  );
};

export default Directory;