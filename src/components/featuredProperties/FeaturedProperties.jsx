import "./featuredProperties.css";
import itchotel from "../images/ITC hotel.png" 
import kolkata from "../images/kolkatas.jpeg"
import taj from "../images/taj.jpg"
import pai from "../images/pai-vista.jpg"

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src={itchotel}
                alt=""
          className="fpImg"
        />
        <span className="fpName">ITC Gardenia Hotel</span>
        <span className="fpCity">Bangolre</span>
        <span className="fpPrice">Starting from 12,000</span>
        <div className="fpRating">
          <button>8.8</button>
          <span>Rating</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src={kolkata}
                alt=""
          className="fpImg"
        />
        <span className="fpName">The Rajbari Bawali</span>
        <span className="fpCity">Kolkata</span>
        <span className="fpPrice">Starting from 15000</span>
        <div className="fpRating">
          <button>8.0</button>
          <span>Rating</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src={taj} 
           alt=""
          className="fpImg"
        />
        <span className="fpName">Taj Krishna</span>
        <span className="fpCity">Hyderabad</span>
        <span className="fpPrice">Starting from 10,000</span>
        <div className="fpRating">
          <button>9.0</button>
          <span>Rating</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src=  {pai}
             alt=""
          className="fpImg"
        />
        <span className="fpName">Hotel Pai Vista</span>
        <span className="fpCity">Mysore</span>
        <span className="fpPrice">Starting from 20,000</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Rating</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
