import React from "react";
import img from "../../images/svgs/boy.svg";
import Badge from "../../SmallComponent/Badge";
import { Userdata } from "../DropdownPages/FetchData";
import Loading from "../../SmallComponent/Loading";
const Profile = ({ user }) => {
  let userdata = Userdata(user.uid);
  const data = (
    <React.Fragment>
      <div
        style={{
          display: "block"
        }}
        className="profile--img"
      >
        <div className="block-center">
          <img
            alt="profile "
            style={{ width: "10rem", height: "10rem" }}
            className="rounded-circle "
            src={userdata.photoUrl}
          />
        </div>

        <p
          style={{
            paddingLeft: "10px",
            fontSize: "1.2rem",
            textTransform: "capitalize"
          }}
          className="block-center"
        >
          {user.displayName}
        </p>
      </div>
      <div>
        {userdata ? (
          userdata.phoneNumber ? (
            <p>Phone Number : {userdata.phoneNumber} </p>
          ) : (
            <p>no Phone Number</p>
          )
        ) : (
          <p>no Phone Number</p>
        )}
        <p>
          date Joined:
          <span style={{ marginLeft: ".6rem" }}>
            {userdata.metadata && userdata.metadata.creationTime.slice(5, 17)}
          </span>
        </p>
        <p>
          material Posted:
          <Badge color="blue" title={userdata.materialPosted} />
        </p>
        <div>
          Sold : <Badge color="green" title={userdata.materialSold} />
        </div>
      </div>
    </React.Fragment>
  );
  return <React.Fragment>{user ? data : <Loading />}</React.Fragment>;
};
export default Profile;
