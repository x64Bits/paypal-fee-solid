import { FiChevronUp } from "solid-icons/fi";
import { FiChevronDown } from "solid-icons/fi";
import { ArrowsContainer, ArrowStyle } from "./styles";

export default function SpinArrows(props) {
  function handleSpinUpValue() {
    const newValue = !!props.value
      ? (parseFloat(props.value) + 1).toFixed(2)
      : 1;

    props.handleChange(newValue);
  }

  function handleSpinDownValue() {
    const mathValue = !!props.value
      ? (parseFloat(props.value) - 1).toFixed(2)
      : 0;

    const newValue = mathValue >= 1 ? mathValue : null;

    props.handleChange(newValue);
  }

  return (
    <ArrowsContainer>
      <div onClick={handleSpinUpValue} className={ArrowStyle}>
        <FiChevronUp size="1rem" color="#FFF" className={ArrowStyle} />
      </div>
      <div onClick={handleSpinDownValue} className={ArrowStyle}>
        <FiChevronDown size="1rem" color="#FFF" />
      </div>
    </ArrowsContainer>
  );
}
