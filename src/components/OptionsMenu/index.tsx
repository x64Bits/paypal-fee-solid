import { createEffect, For, Show } from "solid-js";
import { useRouter } from "@rturnq/solid-router";

import { DrawerItem, DrawerStyle, OptionsContainer } from "./styles";

import { drawerItems } from "./constants";

export default function OptionsMenu(props) {
  const router = useRouter();
  let optionsMenu;

  createEffect(() => {
    function handleClickOutside(event) {
      if (optionsMenu && !optionsMenu.contains(event.target)) {
        if (props.visible) {
          handleClose();
        }
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  function handleClose() {
    props.onClose((prev) => !prev);
  }

  function handleNavigate(route) {
    handleClose();
    router.push(route);
  }

  return (
    <Show when={props.visible}>
      <OptionsContainer className="fade-in" ref={optionsMenu}>
        <For each={drawerItems}>
          {(item) => (
            <DrawerItem onClick={() => handleNavigate(item.route)}>
              {item.Icon({ className: DrawerStyle, color: "#FFF" })}
              {item.name}
            </DrawerItem>
          )}
        </For>
      </OptionsContainer>
    </Show>
  );
}
