import React from "react";
import Cake from "./../../assets/Cake.jpg";
import Muffin from "./../../assets/muffin.jpg";
import "./styles.scss";

const Directory = (props) => {
  return (
    <div className="directory">
      <div className="wrap">
        <div
          className="item"
          style={{
            backgroundImage: `url(${Muffin})`,
          }}
        >
          <a>Shop Muffins</a>
        </div>
        <div
          className="item"
          style={{
            backgroundImage: `url(${Cake})`,
          }}
        >
          <a>Shop Cake</a>
        </div>
      </div>
    </div>
  );
};

export default Directory;
