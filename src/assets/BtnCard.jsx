import React, { useState } from "react"


function Btn({text,data,cardItem,handleButtonClick}){

  const [btn,setBtn]=useState(true);
  
    return (
      
      <>
    
      {btn ? (
        <button
          className="btn btn-outline-light bg-danger"
          onClick={() => {
            setBtn(false);
            handleButtonClick(data.id)
          }}
        >
            <i class="bi bi-cart-plus-fill pe-3"></i>
          Add to cart
        </button>
      ) : (
        <button
          className="btn btn-outline-light bg-danger-subtle text-danger mt-auto"
          onClick={() => {
            setBtn(true);
            handleButtonClick(data.id);
          }}
        >
            <i class="bi bi-cart-check-fill pe-3"></i>
          Remove from cart
        </button>
      )}
    


    </>
    );
    }
export default Btn;
