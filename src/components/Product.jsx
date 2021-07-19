import React, { useState } from "react";
import Menu from "../menu.json";

const Product = () => {
  const [product, setProduct] = useState(0);

  /*   const [order, setOrder] = useState();

  const agregarElemento = () => {
    console.log("click");
    setOrder([...order, { Menu }]);
  }; */

  return (
    <div className="dataProducts">
      <div>
        {Menu.map((menu, id) => {
          return (
            <div key={id} className="product">
              <div>
                <h6>{menu.name}</h6>
                <p>${menu.price}</p>
              </div>
              <div>
                <button
                  className="btnOrder"
                  onClick={() => setProduct(product + 1)}
                >
                  +
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="order">
        <h4>PEDIDO</h4>
        {Menu.map((menu, id) => {
          return (
            <div key={id}>
              <h6>
                {menu.name}___________{product}
              </h6>
            </div>
          );
        })}
        ;
      </div>
    </div>
  );
};

export default Product;
