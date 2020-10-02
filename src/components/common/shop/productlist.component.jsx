import React, { useContext, useEffect, useRef } from "react";
import { ProductContext } from "../../../services/context/product.context";
import { Eye, ShoppingBag, Heart } from "react-feather";
import { Link } from "react-router-dom";
import { Skeleton, notification } from "antd";

import ProductCard from "./productcard.component";
import { capitalizeFirstLetter } from "../../../services/helper.service";

const List = (props) => {
  const { products, loading, error, getProducts } = useContext(ProductContext);
  const initial = useRef({ getProducts });
  useEffect(() => {
    const { getProducts } = initial.current;
    getProducts()
      .then((loaded) => console.log(loaded))
      .catch((e) => console.log(e));
  }, []);

  console.log(products);

  if (loading) return <Skeleton active />;
  if (error)
    return notification.error({
      message: "Error loading table",
      description: error,
    });

  return (
    <>
      <div className="row">
        {products.map((item, index) => (
          <ProductCard
            key={index + 1}
            id={item._id}
            name={item.name}
            tag={capitalizeFirstLetter(item.tag)}
            images={item.images}
            price={item.details.price}
          />
        ))}
      </div>
    </>
  );
};

export default List;
