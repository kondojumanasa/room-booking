import "./featured.css";
import chennai from "../images/pool-long-dusk.png"
import benguluru from "../images/benguluru.webp"
import hyderabad from "../images/hyderabad.jpg"

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
        src={hyderabad}
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Hyderabad</h1>
          <h2>18 Hotels</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
        src={benguluru}
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Bengaluru</h1>
          <h2>70 Hotels</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
        src={chennai}
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Chennai</h1>
          <h2>20 Hotels</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
