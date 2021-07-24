import { createEffect, createSignal, Show } from "solid-js";

export default function ShowAnimation(props) {
  const [show, setShow] = createSignal(false);

  createEffect(() => {
    if (!props.when) {
      setTimeout(() => {
        setShow(false);
      }, props.show || 0);
    }

    setShow(true);
  });

  return (
    <Show when={show} fallback={props.fallback}>
      {props.children}
    </Show>
  );
}
