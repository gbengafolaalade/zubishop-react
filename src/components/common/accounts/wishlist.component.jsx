import React from "react";
import WishListCard from "./wishlist-card.component";

const WishList = () => {
  return (
    <>
      <div class="row">
        <WishListCard />
        <WishListCard />
        <WishListCard />
        <WishListCard />
      </div>
    </>
  );
};

export default WishList;
