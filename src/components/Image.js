import React, { useState, useContext } from "react";

import { Context } from "../components/Context";

function Image({ className, img }) {
  const [hovered, setHovered] = useState(false);
  const { toggleFavorite } = useContext(Context);

  const heartIconDiaplay = hovered && (
    <i
      className="ri-heart-line favorite"
      onClick={() => toggleFavorite(img.id)}
    ></i>
  );
  const cartIconDisplay = hovered && (
    <i className="ri-add-circle-line cart"></i>
  );
  return (
    <div
      className={`${className} image-container`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={img.url} className="image-grid" />
      {heartIconDiaplay}
      {cartIconDisplay}
    </div>
  );
}

export default Image;
