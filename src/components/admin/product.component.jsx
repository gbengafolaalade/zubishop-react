import React, { useEffect, useContext, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Typography,
  Skeleton,
  Card,
  Descriptions,
  Tag,
  Space,
  Image,
  Row,
  Col,
  Button,
} from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
// import { ProductContext } from "../../services/context/product.context";
import { GetRequest } from "../../services/api.core";

const SingleProduct = () => {
  const [product, setProduct] = useState({});

  const initial = useRef({
    productDetails: product,
  });
  let { id } = useParams();
  const { Title } = Typography;
  const { Item } = Descriptions;

  useEffect(() => {
    const { productDetails } = initial.current;
    function fetchProduct(ID) {
      GetRequest(`api/v1/products/${ID}`)
        .then((response) => {
          console.log(response.data);
          console.log("this does not work");
          setProduct({ ...productDetails, ...response.data });
        })
        .catch((e) => console.log(e));
    }
    fetchProduct(id);
    console.log("this does not work 1");
  }, [id]);

  if (Object.entries(product).length === 0) return <Skeleton active />;

  console.log(product, product.details, id);
  const { name, details, categories, createdAt, images, tag, stock } = product;
  return (
    <>
      <Row>
        <Col span={12}>
          <Title>{name}</Title>
        </Col>
        <Col span={12}>
          <div style={{ float: "right" }}>
            <Space direction="horizontal" size="middle">
              <Button type="link" icon={<EditOutlined />} />
              <Button type="link" danger icon={<DeleteOutlined />} />
            </Space>
          </div>
        </Col>
      </Row>
      <Card>
        <Descriptions title="Details" bordered size="large">
          <Item label="Price" span={3}>
            {`\u00A2 ${details.price}`}
          </Item>
          <Item label="Advance price" span={3}>
            <Space direction="horizontal" size="large">
              <Tag color="magenta">
                Discount: {`${details.advPrice.discountPercentage}%`}
              </Tag>
              <Tag color="cyan">
                Promo Price: {`\u00A2 ${details.advPrice.promoPrice}`}
              </Tag>
            </Space>
          </Item>
          <Item label="Category" span={3}>
            <Space direction="horizontal" size="middle">
              {categories.map((item) => (
                <Tag color="default">{item}</Tag>
              ))}
            </Space>
          </Item>
          <Item label="Tag" span={3}>
            {tag}
          </Item>
          <Item label="Stock" span={3}>
            {stock}
          </Item>
          <Item label="Date of Creation" span={3}>
            {new Date(`${createdAt}`).toLocaleDateString()}
          </Item>
        </Descriptions>
      </Card>
      <Card style={{ margin: "18px 0" }}>
        <Descriptions title="Other info" bordered size="large">
          <Item label="Variations" span={2}>
            <Space direction="vertical">
              {details.variation.map((item, index) => {
                const productVariation = item.variation;
                return (
                  <>
                    <div key={index + 1}> {item.attrName}</div>
                    {productVariation
                      ? item.variation.map((tag, index) => (
                          <>
                            <Tag color="default" key={index + 1}>
                              <Space direction="horizontal" size="middle">
                                {tag.name} {tag.quantity}
                              </Space>
                            </Tag>
                          </>
                        ))
                      : null}
                  </>
                );
              })}
            </Space>
          </Item>
          <Item label="Related Products">
            <Space direction="horizontal" size="large">
              {details.relatedProducts.map((item, index) => (
                <Tag color="success" key={index + 1}>
                  {item.label}
                </Tag>
              ))}
            </Space>
          </Item>

          <Item label="Description" span={3}>
            {details.desc}
          </Item>
        </Descriptions>
      </Card>
      <Card title="Product Images">
        <Space direction="horizontal" size="middle">
          {images.map((image, idx) => (
            <Image src={image} key={idx + 1} width={200} />
          ))}
        </Space>
      </Card>
    </>
  );
};

export default SingleProduct;
