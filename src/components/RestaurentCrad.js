import { MEDIA_URL, STAR_LOGO } from "../utils/constants";

const RestaurentCrad = (props) => {
  const { restro } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    restro?.info;
  return (
    <div className="res-card">
      <div className="res-logo-container">
        <img
          className="res-logo"
          alt="res-logo"
          src={MEDIA_URL + cloudinaryImageId}
        />
      </div>
      <h3>{name}</h3>
      <div>
        <div>
          {STAR_LOGO}
          <span>{avgRating && avgRating + " stars • "}</span>
          {sla.slaString}
        </div>
      </div>

      <h4>{costForTwo}</h4>
      <h4>{cuisines.join(", ")}</h4>
    </div>
  );
};

export default RestaurentCrad;
