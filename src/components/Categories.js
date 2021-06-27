import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeCategoryId } from "../store/actions";

const Categories = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.reducer.categories);
  const selectedCategoryId = useSelector(
    (state) => state.reducer.selectedCategoryId
  );

  const handleSelectCategory = (id) => {
    dispatch(changeCategoryId(id));
  };

  return (
    <div className="categories container">
      <div className="categories_title">
        <div className="categories_title_image">
          <img src="images/menuBar2x.png" alt="" />
        </div>
        <h5 className="categories_title_text">Kategoriler</h5>
      </div>
      <div className="categories_menu">
        {categories.map((item) => (
          <button
            onClick={() => handleSelectCategory(item.id)}
            style={{
              backgroundColor: selectedCategoryId === item.id && "#044DC3 ",
            }}
            key={item.id}
            className="categories_menu_item"
          >
            <span
              style={{ color: selectedCategoryId === item.id && "#FFFFFF " }}
            >
              {item.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Categories;
