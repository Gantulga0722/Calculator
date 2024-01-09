import "../styles/buttons.css";

function Buttons(props) {
  const calcBtn = props.buttns;
  return <button className="btn1">{calcBtn.button}</button>;
}
export default Buttons;
