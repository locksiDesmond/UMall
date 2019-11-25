import React, { useState } from "react";

function Descriptionbody({ items, userdata }) {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  return (
    <div className="description--page">
      <div className="product--description">
        <h1>{items.name}</h1>
        {items.pictureUrl.map(item => (
          <img className="description--image" src={item} alt=" product" />
        ))}
        <span className="date">{items.data}</span>
        <h2>Description</h2>
        <p className="description--details">{items.description}</p>
      </div>
      <div className="description--aside">
        <div className="product--owner-profile">
          <div className="profile-image-name">
            <img
              className="rounded-circle product--image"
              src={userdata.photoUrl}
              alt="profile "
            />

            <h2> {userdata.username}</h2>
          </div>
          <ul className="details">
            <li>
              Last Seen: <span> 3 days ago</span>
            </li>
            <li>
              Joined <span> </span>
            </li>
            <li>
              Material posted<span> </span>
            </li>
            <li>
              Sold <span>20 </span>
            </li>
          </ul>
          <div className=" show--number-parent">
            <button className="btn show--number" onClick={handleShow}>
              Show Number
            </button>
            {show && (
              <div style={{ marginTop: "1rem" }}> {userdata.phoneNumber}</div>
            )}
          </div>
        </div>
        <div className="warnings">
          <h3>Report And Warnings</h3>
          <p> bunch of reports</p>
        </div>
      </div>
    </div>
  );
}
export default Descriptionbody;
