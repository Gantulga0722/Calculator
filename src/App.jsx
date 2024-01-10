import { useState } from "react";
import Buttons from "./components/Buttons";
import Screen from "./components/Screen";
import "./styles/global.css";
import { calcButtons } from "./utils/dummyData";

export default function App() {
  const [screenVal, setScreenVal] = useState("");

  function addNum(val) {
    setScreenVal(screenVal + val);
  }

  return (
    <div className="container">
      <Screen value={screenVal} />
      <div className="grid_buttons">
        {calcButtons.map((btns, index) => (
          <Buttons
            text={btns}
            clssName={btns.className}
            key={index}
            onclick={addNum}
          />
        ))}
      </div>
    </div>
  );
}
