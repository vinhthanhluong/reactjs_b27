import { useState } from "react";
// import data from "./data.json";
import ProductItem from "./productitem";
import ProductList from "./productlist";
import Modal from "./modal";
import Cart from "./cart";
import { useSelector } from "react-redux";

export default function Shoes() {
  const listProduct = useSelector((state) => state.shoes.listProduct);

  return (
    <div className="max-w-[1200px] mx-auto py-6">
      <h1 className="text-4xl font-bold text-center mb-5">Shoes</h1>
      <Modal />
      <button
        data-modal-target="cart-modal"
        data-modal-toggle="cart-modal"
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Cart
      </button>
      <Cart />
      <ProductList>
        {listProduct.map((item) => {
          return (
            <ProductItem
              key={item.id}
              data={item}
            />
          );
        })}
      </ProductList>
    </div>
  );
}
