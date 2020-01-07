import React, { useState } from "react";
import { UsersPost } from "./FetchData";
import ButtonLg from "./../../SmallComponent/ButtonLg";
import VendorsCard from "../VendorsCard";
function UserDropdown() {
  const [more, setMore] = useState(12);
  let data = UsersPost(more);
  return (
    <div className="main--content">
      <h1> User Content</h1>
      <div className="products">
        {data[0] === "loading" ? (
          <p> Loading </p>
        ) : (
          data
            .sort((a, b) => (b.materialSold > a.materialSold ? 1 : -1))
            .map(item => <VendorsCard key={item.username} item={item} />)
        )}
      </div>
      {data.length > more - 1 && (
        <div
          style={{
            justifyContent: "center",
            display: "flex",
            margin: ".5rem .1rem 1rem .1rem"
          }}
        >
          <ButtonLg
            disabled={data.length !== more && true}
            title="show more"
            onClick={() => setMore(more + 5)}
          />
        </div>
      )}
    </div>
  );
}

export default UserDropdown;
