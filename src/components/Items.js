import React, { useState, useContext } from "react";
import ItemCard from "./ItemCard";
import { setPageNumContext } from "../App";
import { SyncLoader } from "react-spinners";

export default function Items({ itemList, pageLen }) {
  const { pageNum, setPageNum } = useContext(setPageNumContext);
  const [isLoading, toggleLoading] = useState(false);

  const addPageId = (itemObject, pageId) => {
    itemObject.activePageId = pageId;
    return <ItemCard itemObject={itemObject} />;
  };

  let items = itemList.map((
    item // An array of 9 items
  ) => addPageId(item, pageNum));

  let firstPage = "";
  let lastPage = "";

  if (pageNum === 0) {
    firstPage = "hideButton";
  }
  if (pageNum === pageLen) {
    lastPage = "hideButton";
  }
  const handleEvent = (action) => {
    toggleLoading((isLoading) => !isLoading);
    setTimeout(() => {
      toggleLoading((isLoading) => !isLoading);
     
      setPageNum(pageNum => action === 'next' ? (pageNum + 1) : (pageNum - 1));
    }, 1200);
  };
  return isLoading ? (
    <div className="spinner">
      <SyncLoader loading={isLoading} color={"#9B9B9B"} size={20} />
    </div>
  ) : (
    <div className="mainWrapper">
      <div className="itemContent">{items}</div>
      <div
        className={`pageNavigation ${
          pageNum === 0 || pageNum === pageLen ? "center" : ""
        }`}
      >
        <button
          className={firstPage}
          onClick={(action) => handleEvent((action = "previous"))}
        >
          <i class="fa fa-arrow-left"></i>
        </button>
        <button
          className={lastPage}
          onClick={(action) => handleEvent((action = "next"))}
        >
          <i class="fa fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}
