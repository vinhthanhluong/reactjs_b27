import { useState } from "react";
import data from "./data.json";
import ProductItem from "./productitem";
import ProductList from "./productlist";
import Modal from "./modal";
import Cart from "./cart";

export default function Shoes() {
  const [listProduct, setListProduct] = useState(data);
  const [productDetail, setProductDetail] = useState(null);
  const [carts, setCarts] = useState([]);

  const handleGetProduct = (dataDetail) => {
    setProductDetail(dataDetail);
  };

  const handleAddCart = (dataCart) => {
    const newCarts = [...carts];
    // Check if the product exists
    const index = newCarts.findIndex((item) => item.id === dataCart.id);
    if (index === -1) {
      setCarts([...newCarts, { ...dataCart, quantity: 1 }]);
      return;
    }

    // update quality
    newCarts[index].quantity += 1;
    setCarts(newCarts);
  };

  const handleQuantity = (id, quantity) => {
    setCarts(
      carts.map((item) => {
        if (item.id !== id) return item;
        return {
          ...item,
          quantity: item.quantity + quantity,
        };
      })
    );
  };

  const handleDelete = (id) => {
    const newCarts = carts.filter((item) => item.id !== id);
    setCarts(newCarts);
  };

  return (
    <div className="max-w-[1200px] mx-auto py-6">
      <h1 className="text-4xl font-bold text-center mb-5">Shoes</h1>
      <Modal data={productDetail} />
      <button
        data-modal-target="cart-modal"
        data-modal-toggle="cart-modal"
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Cart
      </button>
      <Cart
        data={carts}
        handleQuantity={handleQuantity}
        handleDelete={handleDelete}
      />
      <ProductList>
        {listProduct.map((item) => {
          return (
            <ProductItem
              key={item.id}
              data={item}
              handleGetProduct={handleGetProduct}
              handleAddCart={handleAddCart}
            />
          );
        })}
      </ProductList>
    </div>
  );
}
