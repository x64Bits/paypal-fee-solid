import { createEffect, createSignal } from "solid-js";
import { IoCopy } from "solid-icons/io";

import { formatCurrency } from "@/utils/format-currency";

import {
  CopyToast,
  CurrentResult,
  OutputCommission,
  OutputContainer,
  OutputDescription,
  OutputLabel,
  OutputValue,
  OutputValueContainer,
  PrevResult,
  ToastContainer,
} from "./styles";
import { typeResult } from "../TypeSwitch/constants";

const toggleClass = (setter, duration) => {
  setter((prev) => !prev);
  setTimeout(() => {
    setter((prev) => !prev);
  }, duration);
};

export default function CurrencyOutput(props) {
  const percentage = localStorage.getItem("percentage");
  const [resetClass, setResetClass] = createSignal(false);
  const [toastShow, setToastShow] = createSignal(false);

  createEffect(() => {
    if (props.prevResult) {
      toggleClass(setResetClass, 350);
    }
  });

  function handleCopy() {
    const currency = props.result;
    navigator.clipboard.writeText(currency);
    toggleClass(setToastShow, 950);
  }

  return (
    <OutputContainer>
      <OutputLabel>{typeResult[props.type]}</OutputLabel>
      <OutputValueContainer>
        <PrevResult className={resetClass() ? "prev-animation" : "prev-hide"}>
          <OutputValue>{formatCurrency(props.prevResult)}</OutputValue>
        </PrevResult>
        <CurrentResult className={resetClass() ? "result-animation" : ""}>
          <OutputValue onClick={handleCopy}>
            {formatCurrency(props.result)}
          </OutputValue>
        </CurrentResult>
      </OutputValueContainer>
      <OutputDescription>
        Comisión de{" "}
        <OutputCommission>${formatCurrency(props.commission)}</OutputCommission>
        USD (${percentage}% + $0.30)
      </OutputDescription>
      <CopyToast className={toastShow() ? "toast-open" : "toast-hide"}>
        <b style={{ "margin-right": "0.3rem" }}>
          <IoCopy color="#FFF" /> ${props.result}
        </b>{" "}
        han sido copiados
      </CopyToast>
    </OutputContainer>
  );
}
