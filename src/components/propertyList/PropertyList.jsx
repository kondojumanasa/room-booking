import "./propertyList.css";
import hotelroom from "../images/hotel-room.jpeg"
import apartment from "../images/apartment.jpeg"
import resort from "../images/resort.jpg"
import cabin from "../images/cabins.jpg"

const PropertyList = () => {
  return (
    <div className="pList">
      <div className="pListItem">
        <img
        src={hotelroom}
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Hotels</h1>
          <h2>46 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src={apartment}
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Apartments</h1>
          <h2>25 apartment</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src={resort}
            alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Resorts</h1>
          <h2>38 resorts</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Villas</h1>
          <h2>30 villas</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src={cabin}
            alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Cabins</h1>
          <h2>10 cabins</h2>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
