import RestaurentCrad from "./RestaurentCrad";
import restaurentsList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [restroList, setRestrosList] = useState(restaurentsList);
  console.log(restroList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = restroList.filter((restro) => {
              return +restro.info.avgRatingString > 4.0;
            });

            setRestrosList(filteredList);
            console.log(restroList);
          }}
        >
          Top Rated Restaurents
        </button>
      </div>
      <div className="res-container">
        {restroList.map((restro) => {
          return <RestaurentCrad key={restro.info.id} restro={restro} />;
        })}
      </div>
    </div>
  );
};

export default Body;
