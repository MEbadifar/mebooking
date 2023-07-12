import "./searchItem.css";

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        className="siImg"
        src="https://cf.bstatic.com/xdata/images/hotel/square200/303014020.webp?k=9f725f49324d7c34b33c1c7150c7091339e9a299a6586bf8842e6dd31492a596&o="
        alt=""
      />
      <div className="siDesc">
        <h1 className="siTitle">Tower Street Apartments</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Exellent</span>
          <button>8.9</button>
        </div>
        <div className="sidetailTexts">
          <span className="siPreice">$123</span>
          <span className="siTaxOp">Includes taxes and Fees</span>
          <button className="siCheckButton">See Availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
