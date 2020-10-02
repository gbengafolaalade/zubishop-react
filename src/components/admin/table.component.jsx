import React from "react";
import { Table } from "antd";

const TableComponent = ({ columns, data }) => {
  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
  };

  return (
    <>
      <Table
        rowSelection={{
          type: "checkbox",
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
        scroll={{ x: 1500, y: 300 }}
        onChange={onChange}
        sticky
      />
    </>
  );
};

export default TableComponent;
