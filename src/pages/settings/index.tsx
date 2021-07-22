import BsArrowLeft from "solid-icons/bs/BsArrowLeft";

import Separator from "@/components/common/Separator";
import Header from "@/components/Header";
import { Description } from "@/components/common/Description";
import {
  CurrencySymbol,
  Field,
  FormGroup,
  InputContainer,
  Label,
} from "@/components/CurrencyInput/styles";
import { ButtonBack, ButtonContainer, buttonStyle } from "./styles";
import { useRouter } from "@rturnq/solid-router";

export default function Settings(props) {
  const percentage = localStorage.getItem("percentage");
  const router = useRouter();

  function handleOpenDrawer() {
    props.onOpenDrawer(true);
  }

  function handleSetPercetage(e) {
    const { value } = e.target;
    localStorage.setItem("percentage", String(value));
  }

  function goHome() {
    router.push("/");
  }

  return (
    <>
      <Header onOpenDrawer={handleOpenDrawer} />
      <Description>Ajustes</Description>
      <Separator />
      <FormGroup>
        <Label>Cambiar comisión:</Label>
        <InputContainer>
          <Field value={percentage} onInput={handleSetPercetage} />
          <CurrencySymbol>%</CurrencySymbol>
        </InputContainer>
      </FormGroup>
      <ButtonContainer>
        <ButtonBack onClick={goHome}>
          <BsArrowLeft className={buttonStyle} /> <b>Volver</b>
        </ButtonBack>
      </ButtonContainer>
    </>
  );
}
