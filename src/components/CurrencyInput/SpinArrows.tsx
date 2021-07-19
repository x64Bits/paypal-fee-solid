import Icon from "../../../../solid-icons/lib/Icon";
import BiChevronUp from "../../../../solid-icons/lib/bi/BiChevronUp";
import BiChevronDown from "../../../../solid-icons/lib/bi/BiChevronDown";
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
      <Icon
        src={BiChevronUp}
        onClick={handleSpinUpValue}
        className={ArrowStyle}
      />
      <Icon
        src={BiChevronDown}
        onClick={handleSpinDownValue}
        className={ArrowStyle}
      />
    </ArrowsContainer>
  );
}
