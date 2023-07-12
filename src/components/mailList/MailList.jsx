import "./mailList.css";

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Save Time, Save money</h1>
      <span className="mailDesc">
        Sign Up and we'll send the best deals to you
      </span>
      <div className="mailInputCounter">
        <input type="text" placeholder="Your Email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default MailList;
