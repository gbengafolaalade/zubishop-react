import React, { useState, useContext } from "react";
import {
  Form,
  Input,
  Row,
  Col,
  Button,
  Modal,
  InputNumber,
  Space,
  Upload,
  Select,
  Spin,
  Card,
  message,
  notification,
} from "antd";
import {
  MinusCircleOutlined,
  PlusOutlined,
  InboxOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import useFileUpload from "../../services/upload.hook";
import { ProductContext } from "../../services/context/product.context";

// const layout = {
//   labelCol: {
//     span: 8,
//   },
//   wrapperCol: {
//     span: 16,
//   },
// };
// const tailLayout = {
//   wrapperCol: {
//     offset: 8,
//     span: 16,
//   },
// };

const AdvancePriceForm = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();

  const onChange = (value) => {
    console.log("changed", value);
  };

  return (
    <>
      <Modal
        visible={visible}
        title="Product Advance Price"
        okText="Done"
        cancelText="Cancel"
        onCancel={onCancel}
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              form.resetFields();
              onCreate(values);
            })
            .catch((info) => {
              console.log("Validate Failed:", info);
            });
        }}
      >
        <Form form={form} name="advancePriceForm">
          <Form.Item label="Discount Percentage" name="discountPercentage">
            <InputNumber
              defaultValue={0}
              min={0}
              max={100}
              formatter={(value) => `${value}%`}
              parser={(value) => value.replace("%", "")}
              onChange={onChange}
            />
          </Form.Item>
          <Form.Item label="Promo Price" name="promoPrice">
            <InputNumber
              defaultValue={0}
              formatter={(value) =>
                `\u00A2 ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
              parser={(value) => value.replace(/\u00A2\s?|(,*)/g, "")}
              onChange={onChange}
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

const AddProductForm = () => {
  const [visible, setVisible] = useState(false);
  const [relatedInputState, setInputState] = useState({
    data: [],
    fetching: false,
    value: [],
  });
  const [nameProduct, setProduct] = useState("");
  const [advPrice, setAdvPrice] = useState(null);
  const { onUploadChange, filesUrl } = useFileUpload();
  const { addProduct, getProducts, error, loading, products } = useContext(
    ProductContext
  );

  const { Item, List } = Form;
  const { Option } = Select;

  const onCreate = (values) => {
    console.log("Received values of form: ", values);
    const { discountPercentage, promoPrice } = values;
    setAdvPrice({ discountPercentage, promoPrice });
    setVisible(false);
  };

  const onChange = (value) => {
    console.log("changed", value);
  };

  const handleImageChange = ({ fileList }) => {
    console.log(fileList);

    onUploadChange(fileList, nameProduct);
  };

  const normFile = (e) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  const fetchRelatedProduct = (value) => {
    console.log("fetching data", value);

    setInputState({ ...relatedInputState, data: [], fetching: true });
    getProducts().then((response) => {
      if (response) {
        const data = products.map((product) => ({
          text: `${product.name}`,
          value: product._id,
        }));
        setInputState({ ...relatedInputState, data, fetching: false });
      }
    });
  };

  const handleRelatedInput = (value) => {
    setInputState({ ...relatedInputState, value, data: [], fetching: false });
  };

  const children = [];
  for (let i = 10; i < 36; i++) {
    children.push(
      <Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>
    );
  }

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const dummyRequest = ({ file, onSuccess }) => {
    setTimeout(() => {
      onSuccess("ok");
    }, 0);
  };

  const onSubmit = async (values) => {
    if (loading) message.loading("Creating product");
    values.images = filesUrl;
    if (advPrice) values.advPrice = advPrice;
    console.log("Success:", values);
    const {
      productName,
      productPrice,
      productVariation,
      images,
      desc,
      relatedProduct,
      categories,
      tag,
    } = values;
    const data = {
      name: productName,
      images,
      categories,
      tag,
      details: {
        price: productPrice,
        advPrice,
        desc,
        variation: productVariation,
        relatedProduct,
      },
    };
    try {
      const res = await addProduct(data);
      if (res) message.info("Product successfully created", 2.5);
      if (error) {
        notification.error({
          message: "Error occurred",
          description: error,
        });
      }
    } catch (error) {
      notification.error({
        message: "Error occurred",
        description: error,
      });
    }
  };

  const { fetching, data, value } = relatedInputState;

  return (
    <>
      <AdvancePriceForm
        visible={visible}
        onCancel={() => {
          setVisible(false);
        }}
        onCreate={onCreate}
      />
      <Form name="basic" onFinish={onSubmit}>
        <div>Product Name</div>
        <Item
          name="productName"
          rules={[{ required: true, message: "Please input product name" }]}
        >
          <Input
            value={nameProduct}
            onChange={(e) => setProduct(e.target.value)}
          />
        </Item>
        <div>Product Price</div>
        <Row gutter={8}>
          <Col span={12}>
            <Item
              name="productPrice"
              rules={[{ required: true, message: "Please input price!" }]}
            >
              <InputNumber
                style={{ width: "100%" }}
                defaultValue={0}
                formatter={(value) =>
                  `\u00A2 ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }
                parser={(value) => value.replace(/\u00A2\s?|(,*)/g, "")}
                onChange={onChange}
              />
            </Item>
          </Col>
          <Col>
            <Button
              onClick={() => {
                setVisible(true);
              }}
            >
              Advance Price
            </Button>
          </Col>
        </Row>
        <div>Variation:</div>

        <List name="productVariation">
          {(fields, { add, remove }) => {
            return (
              <>
                {fields.map((field) => (
                  <>
                    <Card
                      key={field.key}
                      extra={
                        <MinusCircleOutlined
                          onClick={() => {
                            remove(field.name);
                          }}
                        />
                      }
                      style={{ marginBottom: 10 }}
                    >
                      <Form.Item
                        {...field}
                        name={[field.name, "attrName"]}
                        fieldKey={[field.fieldKey, "attrName"]}
                      >
                        <Input placeholder="Attribute Name" />
                      </Form.Item>

                      <List
                        name={[field.name, "variation"]}
                        key={[field.fieldKey, "variation"]}
                      >
                        {(field, { add, remove }) => {
                          return (
                            <div>
                              {field.map((field) => (
                                <Space
                                  key={field.key}
                                  style={{ display: "flex", marginBottom: 5 }}
                                  align="start"
                                >
                                  <Form.Item
                                    {...field}
                                    name={[field.name, "name"]}
                                    fieldKey={[field.fieldKey, "name"]}
                                    rules={[
                                      {
                                        required: true,
                                        message: "Missing name",
                                      },
                                    ]}
                                  >
                                    <Input placeholder="Variation name" />
                                  </Form.Item>

                                  <Form.Item
                                    {...field}
                                    name={[field.name, "quantity"]}
                                    fieldKey={[field.fieldKey, "quantity"]}
                                    rules={[
                                      {
                                        required: true,
                                        message: "Missing quantity",
                                      },
                                    ]}
                                  >
                                    <Input placeholder="Quantity" />
                                  </Form.Item>

                                  <MinusCircleOutlined
                                    onClick={() => {
                                      remove(field.name);
                                    }}
                                  />
                                </Space>
                              ))}

                              <Form.Item>
                                <Button
                                  type="dashed"
                                  onClick={() => {
                                    add();
                                  }}
                                  block
                                >
                                  <PlusOutlined /> Add field
                                </Button>
                              </Form.Item>
                            </div>
                          );
                        }}
                      </List>
                    </Card>
                  </>
                ))}

                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => {
                      add();
                    }}
                    block
                  >
                    <PlusOutlined /> Add attribute
                  </Button>
                </Form.Item>
              </>
            );
          }}
        </List>

        <div>Description</div>
        <Item name="desc">
          <Input.TextArea />
        </Item>
        <div>Images</div>
        <Item
          name="images"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <Upload.Dragger
            name="files"
            multiple
            customRequest={dummyRequest}
            onChange={handleImageChange}
          >
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
            <p className="ant-upload-hint">
              Support for a single or bulk upload.
            </p>
          </Upload.Dragger>
        </Item>
        <div>Related Products</div>
        <Item name="relatedProduct">
          <Select
            mode="multiple"
            labelInValue
            value={value}
            placeholder="Search and select related products"
            notFoundContent={
              fetching ? (
                <Spin
                  indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}
                />
              ) : null
            }
            filterOption={false}
            onSearch={fetchRelatedProduct}
            onChange={handleRelatedInput}
          >
            {data.map((d) => (
              <Option key={d.value}>{d.text}</Option>
            ))}
          </Select>
        </Item>
        <div>Categories</div>
        <Item name="categories">
          <Select mode="tags" placeholder="Categories" onChange={handleChange}>
            {children}
          </Select>
        </Item>
        <div>Tag</div>
        <Item name="tag">
          <Input />
        </Item>
        <Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Item>
      </Form>
    </>
  );
};

export default AddProductForm;
