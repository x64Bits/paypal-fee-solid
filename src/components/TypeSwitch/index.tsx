import { typeLabels } from "./constants";
import {
  TypeLabel,
  Container,
  TypeValue,
  SwitchContainer,
  SwitchIndicator,
} from "./styles";

export default function TypeSwitch(props) {
  function handleSwitchType() {
    props.handleSwitch((prev) => !prev);
  }

  return (
    <Container>
      <TypeLabel>
        Tipo de conversión: <TypeValue> {typeLabels[props.active]}</TypeValue>
      </TypeLabel>
      <SwitchContainer active={props.active} onClick={handleSwitchType}>
        <SwitchIndicator
          active={props.active}
          className={props.active ? "indicator-on" : "indicator-off"}
        />
      </SwitchContainer>
    </Container>
  );
}
