import "./MenuItem.css";
import { useState } from "react";
import NumberInput from "@components/NumberInput/NumberInput";
import { useHandler } from "@hooks/useHandler";

export default function MenuItem({
  name,
  price,
  hot_item = false,
  sold_out = false,
}) {
  const [countToAdd, setCountToAdd] = useState(0);
  const [isImageLoading, setIsImageLoading] = useState(true);
  const onItemAdd = useHandler("onItemAdd");

  function handleIncreaseCount(amt) {
    if (countToAdd <= 0 && amt < 0) {
      return;
    }

    setCountToAdd(amt);
  }

  function handleAddItemClick() {
    onItemAdd({ name, price }, countToAdd);
    setCountToAdd(0);
  }

  return (
    <div
      className={`menu-item${hot_item ? " hot-item" : ""}${sold_out ? " sold-out" : ""}`}
    >
      <div className="item-image-container">
        <img
          className={`item-image${isImageLoading ? " loading" : ""}`}
          onLoad={() => setIsImageLoading(false)}
          src="https://picsum.photos/400/400"
          alt="Menu Item Image"
        />
      </div>
      <div className="item-details">
        <div className="name-and-price">
          <h2>{name}</h2>
          <p>${price}</p>
        </div>
        <div className="item-cart-section">
          {(sold_out && <p className="centered-text">Sold out</p>) || (
            <>
              <NumberInput
                count={countToAdd}
                changeNumberFunction={handleIncreaseCount}
              />
              <button
                type="button"
                className="page-button"
                onClick={handleAddItemClick}
              >
                Add to cart
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
  //   {/* <div className="item-details">
  //     <h2>{name}</h2>
  //     <p>${price}</p>
  //     <p>{sold_out ? "Sold out" : ""}</p>
  //     {!sold_out && (
  //       <div className="item-cart-section">
  //         <NumberInput
  //           count={countToAdd}
  //           changeNumberFunction={handleIncreaseCount}
  //         />
  //         <button
  //           type="button"
  //           className="page-button"
  //           onClick={handleAddItemClick}
  //         >
  //           Add to cart
  //         </button>
  //       </div>
  //     )}
  //   </div>
  //   <div className="item-image-container">
  //     <img
  //       className="item-image"
  //       src="https://picsum.photos/400/400"
  //       alt="item"
  //     />
  //   </div>
  // </div> */}
}
