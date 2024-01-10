import "../styles/buttons.css";

function Buttons(props) {
  const calcBtn = props.text;
  const className = props.clssName;
  const calNum = props.onclick;
  let typeOfBtn = props.typeBtn;

  return (
    <button
      className={className}
      value={calcBtn.button}
      onClick={(event, value) => calNum(event.target.value)}
    >
      {calcBtn.button}
    </button>
  );
}
export default Buttons;
