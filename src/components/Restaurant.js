import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router";
import { MENU_API } from "../utils/constants";

const Restaurant = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  const fetchRestInfo = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    console.log(json.data);
    setResInfo(json.data);
  };
  useEffect(() => {
    fetchRestInfo();
  }, []);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, costForTwoMessage, cuisines } =
    resInfo?.cards[2]?.card.card?.info;

  const { itemCards } =
    resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[2].card?.card;
  console.log(itemCards);

  return (
    <div className="res-details">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")}: {costForTwoMessage}
      </p>
      <p>Restaurents Menu</p>
      <ul>
        {itemCards.map((item) => {
          return (
            <li key={item.card.info.id}>
              {item.card.info.name}:- Rs{item.card.info.price / 100}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Restaurant;
