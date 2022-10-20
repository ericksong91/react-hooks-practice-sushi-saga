import React from "react";
import Sushi from "./Sushi"
import MoreButton from "./MoreButton";

function SushiContainer({sushi, position, onPosition, onAte, budget}) {

  const updatedSushi = sushi.slice(position, position + 4).map((sus) => {
    return <Sushi key={sus.id} sus={sus} onAte={onAte} budget={budget} />
  });

  return (
    <div className="belt">
      {updatedSushi}
      <MoreButton onPosition={onPosition} />
    </div>
  );
}

export default SushiContainer;
