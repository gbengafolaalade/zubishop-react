import React, { useState } from "react";
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
} from "antd";
import {
  MinusCircleOutlined,
  PlusOutlined,
  InboxOutlined,
} from "@ant-design/icons";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

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
              defaultValue={10}
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
              parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
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
    loading: false,
    value: [],
  });
  // TODO: delete or change it this variable
  // it is just for test purpose
  let lastFetchId = 0;
  const { Item, List } = Form;
  const { Option } = Select;

  const onCreate = (values) => {
    console.log("Received values of form: ", values);
    setVisible(false);
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
    lastFetchId += 1;
    const fetchId = lastFetchId;
    setInputState({ ...relatedInputState, data: [], loading: true });
    fetch("https://randomuser.me/api/?results=5")
      .then((res) => res.json())
      .then((response) => {
        if (fetchId !== lastFetchId) {
          // for fetch callback order
          return;
        }
        const data = response.results.map((user) => ({
          text: `${user.name.first} ${user.name.last}`,
          value: user.login.username,
        }));
        setInputState({ ...relatedInputState, data, loading: false });
      });
  };

  const handleRelatedInput = (value) => {
    setInputState({ ...relatedInputState, value, data: [], loading: false });
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

  const { loading, data, value } = relatedInputState;

  return (
    <>
      <AdvancePriceForm
        visible={visible}
        onCancel={() => {
          setVisible(false);
        }}
        onCreate={onCreate}
      />
      <Form name="basic" layout={layout}>
        <div>Product Name</div>
        <Item
          name="productName"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Item>
        <div>Product Price</div>
        <Row gutter={8}>
          <Col span={12}>
            <Item
              name="productPrice"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
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
        <List name="variation">
          {(fields, { add, remove }) => {
            return (
              <>
                {fields.map((field) => (
                  <Space
                    key={field.key}
                    style={{ display: "flex", marginBottom: 8 }}
                    align="start"
                  >
                    <Form.Item
                      {...field}
                      name={[field.name, "variationName"]}
                      fieldKey={[field.fieldKey, "variationName"]}
                    >
                      <Input placeholder="Variation Name" />
                    </Form.Item>
                    <Form.Item
                      {...field}
                      name={[field.name, "quantity"]}
                      fieldKey={[field.fieldKey, "quantity"]}
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
                <Item>
                  <Button
                    type="dashed"
                    onClick={() => {
                      add();
                    }}
                    block
                  >
                    <PlusOutlined /> Add field
                  </Button>
                </Item>
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
          noStyle
        >
          <Upload.Dragger name="files" action="/upload.do">
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
        <div>Related Product</div>
        <Item>
          <Select
            mode="multiple"
            labelInValue
            value={value}
            placeholder="Search and select related products"
            notFoundContent={loading ? <Spin size="small" /> : null}
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
        <Item>
          <Select mode="tags" placeholder="Categories" onChange={handleChange}>
            {children}
          </Select>
        </Item>
      </Form>
    </>
  );
};

export default AddProductForm;
