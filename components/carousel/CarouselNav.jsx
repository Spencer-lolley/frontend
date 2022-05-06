import React from "react";

export default function CarouselNav({prev,next}) {
  return (
    <div className="row">
      <div className="prev" onClick={prev}>
        <img src="prev.png"></img>
      </div>
      <div className="next" onClick={next}>
        <img src="next.png"></img>
      </div>
    </div>
  );
}
