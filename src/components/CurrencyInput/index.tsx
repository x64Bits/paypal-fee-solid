import { onMount } from "solid-js";
import SpinArrows from "./SpinArrows";
import {
  CurrencySymbol,
  Field,
  FormGroup,
  InputContainer,
  Label,
} from "./styles";

export default function CurrencyInput(props) {
  let amountField;

  onMount(() => {
    if (amountField) {
      amountField.focus();
    }
  });

  const handleChange = (event) => {
    props.setValue(event.target.value);
  };

  return (
    <FormGroup>
      <Label>Cantidad que desea Recibir :</Label>
      <InputContainer>
        <CurrencySymbol>$</CurrencySymbol>
        <Field
          ref={amountField}
          type="number"
          placeholder="0,00"
          value={!props.currentValue ? null : props.currentValue}
          onInput={handleChange}
        />
        <SpinArrows value={props.currentValue} handleChange={props.setValue} />
      </InputContainer>
    </FormGroup>
  );
}
