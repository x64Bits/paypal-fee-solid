import { createEffect, createSignal } from "solid-js";

import { formatCurrency } from "@/utils/format-currency";

import {
  CurrentResult,
  OutputCommission,
  OutputContainer,
  OutputDescription,
  OutputLabel,
  OutputValue,
  OutputValueContainer,
  PrevResult,
} from "./styles";
import { typeResult } from "../TypeSwitch/constants";

export default function CurrencyOutput(props) {
  const percentage = localStorage.getItem("percentage");
  const [resetClass, setResetClass] = createSignal(false);

  createEffect(() => {
    if (props.prevResult) {
      setResetClass(true);
      setTimeout(() => {
        setResetClass(false);
      }, 350);
    }
  });

  return (
    <OutputContainer>
      <OutputLabel>{typeResult[props.type]}</OutputLabel>
      <OutputValueContainer>
        <PrevResult className={resetClass() ? "prev-animation" : "prev-hide"}>
          <OutputValue>{formatCurrency(props.prevResult)}</OutputValue>
        </PrevResult>
        <CurrentResult className={resetClass() ? "result-animation" : ""}>
          <OutputValue>{formatCurrency(props.result)}</OutputValue>
        </CurrentResult>
      </OutputValueContainer>
      <OutputDescription>
        Comisión de{" "}
        <OutputCommission>${formatCurrency(props.commission)}</OutputCommission>
        USD (${percentage}% + $0.30)
      </OutputDescription>
    </OutputContainer>
  );
}
