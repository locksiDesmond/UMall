import React from "react";
import UpLoadForm from "./UpLoadForm";
import { Redirect } from "react-router-dom";
import { Userdata } from "../DropdownPages/FetchData";
import Loading from "../../SmallComponent/Loading";
const UserInfo = props => {
  return (
    <div className="upload details ">
      <p style={{ fontSize: "1.3rem", fontWeight: "Bold" }}>Your Details</p>
      <p>
        <span className="signin-form-name">Name :</span>
        <span
          style={{
            fontWeight: "500",
            marginLeft: ".4rem",
            fontSize: "0.8"
          }}
        >
          {props.user.displayName}
        </span>
      </p>
      <p>
        <span className="signin-form-name">Phone Number :</span>
        {props.data ? (
          props.data.phoneNumber ? (
            props.data.phoneNumber
          ) : (
            <span>
              No Number
              <span
                style={{
                  fontWeight: "500",
                  marginLeft: ".4rem",
                  fontSize: "0.8"
                }}
              >
                please go to profile and update your phone Number
              </span>
            </span>
          )
        ) : (
          <span>
            No Number
            <span
              style={{
                fontWeight: "500",
                marginLeft: ".4rem",
                fontSize: "0.8"
              }}
            >
              please go to profile and update your phone Number
            </span>
          </span>
        )}
      </p>
    </div>
  );
};
const Upload = ({ user, authenticated }) => {
  let userdata = Userdata(user.uid);
  return (
    <div className="main--content">
      {authenticated ? (
        <React.Fragment>
          {userdata === "loading" ? (
            <Loading />
          ) : (
            <React.Fragment>
              <UserInfo user={user} data={userdata} />
              <UpLoadForm user={user} data={userdata} />
            </React.Fragment>
          )}
        </React.Fragment>
      ) : (
        <Redirect to={{ pathname: "/signin" }} />
      )}
    </div>
  );
};

export default Upload;
