import Buttons from "./components/Buttons";
import Screen from "./components/Screen";
import "./styles/global.css";
import { calcButtons } from "./utils/dummyData";

export default function App() {
  return (
    <div className="container">
      <Screen />
      <div className="grid_buttons">
        {calcButtons.map((btns, index) => {
          return <Buttons buttns={btns} key={index} />;
        })}
      </div>
    </div>
  );
}
