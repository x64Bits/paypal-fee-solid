import FiChevronUp from "solidjs-icons/fi/FiChevronUp";
import FiChevronDown from "solidjs-icons/fi/FiChevronDown";
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
      <FiChevronUp
        size="1rem"
        onClick={handleSpinUpValue}
        className={ArrowStyle}
      />
      <FiChevronDown
        size="1rem"
        onClick={handleSpinDownValue}
        className={ArrowStyle}
      />
    </ArrowsContainer>
  );
}
