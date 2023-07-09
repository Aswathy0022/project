import React from "react";

function MenuItem({ image, name, price }) {
  return (
    <div className="menuItem">
      <img src={image} alt={image} />
      <div className="menu-item-title">
        <p> {name} </p>
        <p> ${price} </p>
      </div>
    </div>
  );
}

export default MenuItem;
