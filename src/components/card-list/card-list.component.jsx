import React from "react";
import "./card-list.styles.css";
import Card from "../card/card.component";

const CardList = ({ dataList }) => {
  return (
    <div className="card-list">
      {dataList.map(data => (
        <Card key={data.id} {...data} />
      ))}
    </div>
  );
};

export default CardList;
