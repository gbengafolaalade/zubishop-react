import React from "react";
import OrderCard from "./order-card.component";
import Pagination from "../shop/pagination.component";

const Orders = () => {
  return (
    <>
      <OrderCard />
      <OrderCard />
      <OrderCard />
      <Pagination />
    </>
  );
};

export default Orders;
