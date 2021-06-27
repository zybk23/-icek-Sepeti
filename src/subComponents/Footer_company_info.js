import React from "react";

const Footer_company_info = ({ data }) => {
  return (
    <>
      {data.map((item, index) =>
        index === 0 ? (
          <li key={item.id}>{item.name}</li>
        ) : (
          <li key={item.id}>
            {" "}
            <a href="#">{item.name}</a>{" "}
          </li>
        )
      )}
    </>
  );
};

export default Footer_company_info;
