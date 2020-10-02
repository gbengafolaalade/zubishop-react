import React, { useContext, useEffect, useRef } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import { ProductContext } from "../../services/context/product.context";
import { Space, Button, Avatar, Skeleton, notification } from "antd";
import {
  EyeOutlined,
  DeleteOutlined,
  EditOutlined,
  MehOutlined,
} from "@ant-design/icons";
import TableComponent from "./table.component";
import SearchInTable from "./tableSearch.component";

const Products = () => {
  const { loading, error, products, getProducts } = useContext(ProductContext);
  const initial = useRef({
    products,
    getProducts,
  });
  const getColumnSearchProps = SearchInTable();
  let { url } = useRouteMatch();
  let history = useHistory();
  useEffect(() => {
    const { getProducts } = initial.current;
    getProducts();
  }, []);

  console.log(`products from db:: ${products}`);

  const columns = [
    {
      title: "Product Image",
      dataIndex: "image",
      key: "image",
      fixed: "left",
      width: 70,
      render: (item) => (
        <>
          <Avatar key="image" shape="square" size={64} src={item[0]} />
        </>
      ),
    },
    {
      title: "Product Name",
      dataIndex: "productName",
      key: "productName",
      fixed: "left",
      sorter: (a, b) => a.productName.length - b.productName.length,
      sortDirections: ["descend"],
      width: 100,
      ...getColumnSearchProps("productName"),
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",

      width: 100,
      ...getColumnSearchProps("category"),
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      width: 100,
    },
    {
      title: "Stock",
      dataIndex: "stock",
      key: "stock",
      width: 100,
    },
    {
      title: "Actions",
      dataIndex: "action",
      key: "operation",
      fixed: "right",
      width: 80,
      render: (id) => (
        <>
          <Space direction="horizontal" size="middle">
            <Button
              type="link"
              icon={<EyeOutlined />}
              onClick={() => history.push(`${url}/${id}`)}
            />
            <Button type="link" icon={<EditOutlined />} />
            <Button type="link" danger icon={<DeleteOutlined />} />
          </Space>{" "}
        </>
      ),
    },
  ];

  const data = products.map((item, index) => {
    return {
      key: index + 1,
      image: item.images,
      productName: item.name,
      category: item.categories,
      price: `\u00A2 ${item.details.price}`,
      stock: item.details.stock,
      action: item._id,
    };
  });

  if (loading) return <Skeleton active />;
  if (error)
    notification.open({
      message: "Notification Title",
      description:
        "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
      icon: <MehOutlined style={{ color: "#108ee9" }} />,
    });
  return (
    <>
      <h1>Products</h1>
      <TableComponent columns={columns} data={data} />
    </>
  );
};

export default Products;
