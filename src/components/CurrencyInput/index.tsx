import SpinArrows from "./SpinArrows";
import {
  CurrencySymbol,
  Field,
  FormGroup,
  InputContainer,
  Label,
} from "./styles";

export default function CurrencyInput(props) {
  const handleChange = (event) => {
    props.setValue(event.target.value);
  };

  return (
    <FormGroup>
      <Label>Cantidad que desea Recibir :</Label>
      <InputContainer>
        <CurrencySymbol>$</CurrencySymbol>
        <Field
          type="number"
          placeholder="0,00"
          value={props.currentValue}
          onInput={handleChange}
        />
        <SpinArrows value={props.currentValue} handleChange={props.setValue} />
      </InputContainer>
    </FormGroup>
  );
}
