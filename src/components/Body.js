import RestaurentCrad from "./RestaurentCrad";
import restaurentsList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router";

const Body = () => {
  const [restroList, setRestrosList] = useState([]);
  const [filteredRestroList, setFilteredRestrosList] = useState([]);
  const [searchInput, setSeacrchInput] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.6537085&lng=75.9258542&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setRestrosList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestrosList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return restroList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            className="search-box"
            type="text"
            value={searchInput}
            onChange={(e) => {
              setSeacrchInput(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              const filteredRest = restroList.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchInput.toLowerCase());
              });
              setFilteredRestrosList(filteredRest);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = restroList.filter((restro) => {
              return restro.info.avgRatingString > 4.0;
            });

            setRestrosList(filteredList);
          }}
        >
          Top Rated Restaurents
        </button>
      </div>
      <div className="res-container">
        {filteredRestroList.map((restro) => {
          return (
            <Link to={"/restaurant/" + restro.info.id} key={restro.info.id}>
              <RestaurentCrad restro={restro} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
