import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

function App() {
  const [sushi, setSushi] = useState([]);
  const [position, setPosition] = useState(0);
  const [budget, setBudget] = useState(100);
  const [plates, setPlates] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/sushis")
      .then((r) => r.json())
      .then((data) => setSushi(data))
  }, [])

  function updatePosition() {
    return setPosition(position + 4)
  }

  function handleAte(cost){
    const remain = parseInt(budget) - parseInt(cost);
    console.log("You have $", remain, "left!");
    setBudget(remain);
    setPlates([...plates, "asdf"])
  }

  return (
    <div className="app">
      <SushiContainer sushi={sushi} position={position} onPosition={updatePosition} onAte={handleAte} budget={budget} />
      <Table budget={budget} plates={plates}/>
    </div>
  );
}

export default App;
