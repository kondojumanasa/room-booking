import "./searchItem.css";
import room from "../images/hotel-room-ac.jpg"

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        src={room}
              alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Single Room</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
           Room with Air conditioning
        </span>
        <span className="siFeatures">
          • 1 bathroom •  1 full bed 
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>9.0</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">25,000</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton">Book Now !</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
