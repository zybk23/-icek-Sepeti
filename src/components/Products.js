import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseSelectedProductCount,
  reduceSelectedProductCount,
  clickedPlusButton,
  clickedMinusButton,
} from "../store/actions";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.reducer.products);
  const selectedCategoryId = useSelector(
    (state) => state.reducer.selectedCategoryId
  );

  const [changeButtonView, setChangeButtonView] = useState(0);

  let filteredProducts = [...products];

  if (selectedCategoryId !== 1) {
    filteredProducts = products.filter(
      (item) => item.categoryId && item.categoryId.includes(selectedCategoryId)
    );
  }

  const handleShowAddSubtractButton = (id) => {
    setChangeButtonView(id);
  };
  const handleShowAddButton = () => {
    setChangeButtonView(0);
  };

  const handleIncreaseSelectedProductCount = (params) => {
    const { id, price } = params;
    dispatch(increaseSelectedProductCount(id));
    dispatch(clickedPlusButton(price));
  };

  const handleReduceSelectedProductCount = (params) => {
    const { id, price } = params;
    dispatch(reduceSelectedProductCount(id));
    dispatch(clickedMinusButton(params));
  };

  return (
    <div className="products container">
      <div className="products_title">
        <img src="images/yaprak.png" alt="" />
        <p className="products_title">Tüm Kategoriler</p>
      </div>
      <div className="products_allProducts">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <div key={item.id} className="products_productCard">
              <div className="products_productCard_image">
                <img src={item.image} alt="" />
              </div>
              <p className="products_productsCard_text">{item.name}</p>
              <p className="products_productsCard_freeDeliveryText">
                {item.isDeliveryFree ? "Ücretsiz Teslimat" : ""}
              </p>
              <p className="products_productsCard_price">
                {item.price + " TL"}
              </p>
              <div
                onMouseEnter={() => handleShowAddSubtractButton(item.id)}
                onMouseLeave={handleShowAddButton}
                className="products_productsCard_button"
                style={{
                  border: changeButtonView === item.id && "1px solid #E2E7E9",
                }}
              >
                {changeButtonView === item.id ? (
                  <div className="products_productsCard_button_add_subtract">
                    <button
                      onClick={() =>
                        handleReduceSelectedProductCount({
                          id: item.id,
                          price: item.price,
                          orderCount: item.orderCount,
                        })
                      }
                    >
                      -
                    </button>
                    <span>{item.orderCount}</span>
                    <button
                      onClick={() =>
                        handleIncreaseSelectedProductCount({
                          id: item.id,
                          price: item.price,
                        })
                      }
                    >
                      +
                    </button>
                  </div>
                ) : (
                  <span>Sepete Ekle</span>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="products_warning_message">
            <i className="fas fa-exclamation-circle"></i>
            <span>Bu kategoriye ait ürün bulunmamaktadır </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
