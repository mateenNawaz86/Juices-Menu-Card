import React from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";

import "./MojitoCard.css";

const MojitoCard = () => {
  const juicesData = [
    {
      title: "Mojito",
      juiceImg: "../img/Strawberry-Mojito.jpg",
      price: "3.20",
    },
    {
      title: "Pineapple Cocktail",
      juiceImg: "../img/Pineapple.png",
      price: "5.41",
    },
    {
      title: "Strawberry Mojito",
      juiceImg: "../img/Strawberry-Mojito.jpg",
      price: "2.51",
    },
  ];
  return juicesData.map((items, index) => {
    return (
      <Card key={index}>
        <div className="card_container">
          <h1>{items.title}</h1>

          <div className="mojito_img">
            <img src={items.juiceImg} alt="Mojito" />
          </div>

          <div className="text_container">
            <h3>${items.price}</h3>

            <Button type="submit">Add to Order</Button>
          </div>
        </div>
      </Card>
    );
  });
};

export default MojitoCard;
