import { useState } from "react";
import Buttons from "./components/Buttons";
import Screen from "./components/Screen";
import "./styles/global.css";
import { calcButtons } from "./utils/dummyData";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState("");
  const [prevScreen, setPrevScreen] = useState("");
  const [todoOp, setTodoOp] = useState("");

  function changeScreenVal(val) {
    setCurrentScreen(currentScreen + val);
  }

  function changeTodoOp(val) {
    setTodoOp(val);
    setPrevScreen(currentScreen);
    setCurrentScreen("");
  }

  function equalHandler() {
    let result;
    switch (typeOfBtn) {
      case "/":
        result = Number(prevScreen) / Number(currentScreen) + "";
        setCurrentScreen(result);
        break;
      case "*":
        result = Number(prevScreen) * Number(currentScreen) + "";
        setCurrentScreen(result);
        break;
      case "-":
        result = Number(prevScreen) - Number(currentScreen) + "";
        setCurrentScreen(result);
        break;
      case "+":
        result = Number(prevScreen) + Number(currentScreen) + "";
        setCurrentScreen(result);
        break;
    }
  }

  return (
    <div className="container">
      <Screen value={currentScreen} />
      <div className="grid_buttons">
        {calcButtons.map((btns, index) => (
          <Buttons
            text={btns}
            clssName={btns.className}
            typeBtn={btns.type}
            key={index}
            onclick={changeScreenVal}
          />
        ))}
      </div>
    </div>
  );
}
