import AiOutlineMenu from "solid-icons/ai/AiOutlineMenu";
import { Logo, LogoPayPal } from "./constants";
import {
  BrandContainer,
  BrandLogo,
  HeaderContainer,
  PayPalImg,
  SettingsButton,
} from "./styles";

export default function Header(props) {
  const handleOpenSettings = () => {
    props.onOpenDrawer(true);
  };

  return (
    <>
      <HeaderContainer>
        <BrandContainer>
          <BrandLogo src={Logo} />
          <PayPalImg src={LogoPayPal} />
        </BrandContainer>
        <SettingsButton onClick={handleOpenSettings}>
          <AiOutlineMenu color="#FFF" size="2rem" />
        </SettingsButton>
      </HeaderContainer>
    </>
  );
}
