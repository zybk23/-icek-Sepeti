import React from "react";
import { useSelector } from "react-redux";
import Background from "../assets/images/header.png";
import Radium from "radium";
import styled from "@emotion/styled";

const SubHeader = () => {
  const cartOrderTotalPrice = useSelector(
    (state) => state.reducer.cartOrderTotalPrice
  );
  return (
    <div
      style={{ backgroundImage: `url(${Background})` }}
      className="subHeader container"
    >
      <h1 className="subHeader_title">ÇiçekSepeti H1</h1>
      <div className="subHeader_cartBar">
        <i className="arrow up"></i>
        <div className="subHeader_cartBar_text">
          {500 - cartOrderTotalPrice > 0 ? (
            <>
              <img src="images/bonus.png" alt="" />
              <span>{(500 - cartOrderTotalPrice).toFixed(1)} TL</span>
              <p>ürün daha ekleyin kargo bedava</p>
            </>
          ) : (
            <p>Kargo bedava</p>
          )}
        </div>
        <div className="subHeader_cartBar_bar">
          <StyledCartBar
            width={`${
              (cartOrderTotalPrice / 500) * 100 > 100
                ? 100
                : (cartOrderTotalPrice / 500) * 100
            }%`}
          ></StyledCartBar>
        </div>
      </div>
    </div>
  );
};

const StyledCartBar = styled.span`
  &:before {
    width: ${(p) => p.width};
  }
`;

export default Radium(SubHeader);
