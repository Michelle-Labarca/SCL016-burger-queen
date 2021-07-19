import React, { useState } from "react";
import { ButtonGroup, Button } from "react-bootstrap";
import Product from "./Product";

const Main = () => {
  const eventoClick = () => {
    console.log("me diste click");
  };

  const [order, setOrder] = useState(0);

  const orderBtn = () => {
    console.log("click");
    setOrder(order + 1);
  };

  return (
    <div className="content">
      <div className="contentMenu">
        <div className="button">
          <ButtonGroup
            variant="contained"
            aria-label="contained primary button group"
          >
            <Button variant="dark" onClick={() => orderBtn()}>
              Desayuno
            </Button>
            <Button variant="dark" onClick={() => eventoClick()}>
              Almuerzo
            </Button>
            <Button variant="dark" onClick={() => eventoClick()}>
              Bebestible
            </Button>
          </ButtonGroup>
        </div>
        <div>
          <Product />
        </div>
      </div>
    </div>
  );
};

export default Main;
