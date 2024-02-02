import React from "react";
import "./TreansitionComp.css";

const TreansitionComp = () => {
  return (
    <div className="bg_load">
    <div className="center">
      <div class="circ">
        <div class="load">انتظر ثواني . . . </div>
        <div class="hands"></div>
        <div class="body"></div>
        <div class="head">
          <div class="eye"></div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default TreansitionComp;
