import React from "react";
import logo from "./../../images/umall2.gif";
import SignInForm from "./SignInForm";
import { Link } from "react-router-dom";
import Btn from "./../../SmallComponent/Btn";

function SignIn() {
  return (
    <section className="signin">
      <section className="signin--section">
        <section className="signin--body">
          <div className="logo--group--with--text">
            <Link to={{ pathname: "/" }}>
              <img alt="Logo" src={logo} />
              <p>Sell swiftly, buy Swiftly</p>
            </Link>
          </div>
          <SignInForm />
        </section>
        <div className="signin--link">
          <p>
            Dont have an account
            <span style={{ color: "#05aff2", marginRight: "1rem" }}> ? </span>
            <Link to={{ pathname: "/signUp" }}>
              <Btn className="big" color="#05aff2" sm title="signup" />
            </Link>
          </p>
          <p>
            Forgot password <span style={{ color: "#05aff2" }}> ?</span>
            <Link to={{ pathname: "/" }}>
              <span style={{ paddingLeft: ".5rem", color: "#001992" }}>
                click here
              </span>
            </Link>
          </p>
        </div>
      </section>
    </section>
  );
}
export default SignIn;
