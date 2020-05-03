import React, { useContext } from "react";
import { displayItemContext } from "../App";
import { Link } from "react-router-dom";
export default function ItemCard({ itemObject }) {
  const displayItem = useContext(displayItemContext);
  return (
    <Link to={`/item/${itemObject.name}`}>
      <div onClick={() => displayItem(itemObject)} className="itemCard">
        <img src={`/images/furniture/${itemObject.name}.jpg`} />
        <div className="itemInformation">
          <h3>{itemObject.name}</h3>
          <span className="shortDescription">
            {itemObject.shortDescription}
          </span>
          <br></br>
          <span>${itemObject.price}</span>
        </div>
      </div>
    </Link>
  );
}
