import { createEffect, createSignal, JSX, Show } from "solid-js";

import { Description } from "@/components/common/Description";
import Separator from "@/components/common/Separator";
import CurrencyInput from "@/components/CurrencyInput";
import CurrencyOutput from "@/components/CurrencyOutput";
import Header from "@/components/Header";
import TypeSwitch from "@/components/TypeSwitch";

import { getCalculatedResult } from "@/utils/calculate-result";

interface Payload {
  result: string | number;
  commission: string | number;
}

function Home(): JSX.Element {
  const [sendType, setSendType] = createSignal(false);
  const [value, setValue] = createSignal(0);
  const [result, setResult] = createSignal();
  const [commission, setCommission] = createSignal();
  const [prevResult, setPrevResult] = createSignal();

  createEffect(() => {
    const payload: Payload = getCalculatedResult({
      value: value(),
      type: sendType(),
    });

    setResult((prev) => {
      setPrevResult(String(prev));
      return payload.result;
    });
    setCommission(String(payload.commission));
  });

  return (
    <>
      <Header />
      <Description>
        Calculadora de comisiones de <b>PayPal</b>
      </Description>
      <Separator />
      <TypeSwitch active={sendType()} handleSwitch={setSendType} />
      <Separator />
      <CurrencyInput
        currentValue={value()}
        setValue={setValue}
        type={sendType()}
      />

      <Show when={result() && commission()}>
        <CurrencyOutput
          type={sendType()}
          prevResult={prevResult()}
          result={result()}
          commission={commission()}
        />
      </Show>
    </>
  );
}

export default Home;
