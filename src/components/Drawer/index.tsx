import { CloseContainer, Container, DrawerItem, DrawerStyle } from "./styles";
import IoClose from "solid-icons/io/IoClose";

import { drawerItems } from "./constants";
import { For } from "solid-js";
import { useRouter } from "@rturnq/solid-router";

export default function Drawer(props) {
  const router = useRouter();
  function handleClose() {
    props.onClose((prev) => !prev);
  }

  function handleNavigate(route) {
    handleClose();
    router.push(route);
  }

  return (
    <Container>
      <CloseContainer onClick={handleClose}>
        <IoClose color="#FFF" size="2rem" />
      </CloseContainer>
      <For each={drawerItems}>
        {(item) => (
          <DrawerItem onClick={() => handleNavigate(item.route)}>
            {item.name}
            {item.Icon({ className: DrawerStyle })}
          </DrawerItem>
        )}
      </For>
    </Container>
  );
}
