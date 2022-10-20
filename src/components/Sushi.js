import React, { useState } from "react";

function Sushi({ sus, onAte, budget }) {
  const [ate, setAte] = useState(false);
  const { name, img_url, price } = sus;

  function handleClick() {
    const remain = budget - price;
    if (remain <= 0) {
      console.log("You don't have enough money!")
    } else {
      if (ate === true) {
        console.log("You already ate this!");
      } else {
        setAte(true);
        onAte(price);
      }

    }
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleClick}>
        {/* Tell me if this sushi has been eaten! */}
        {ate ? null : (
          <img
            src={img_url}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
