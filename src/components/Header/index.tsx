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
          <BrandLogo src={Logo} alt="PayPal Fee calculator logo" />
          <PayPalImg src={LogoPayPal} alt="PayPal logo" />
        </BrandContainer>
        <SettingsButton onClick={handleOpenSettings} aria-label="Show menu">
          <AiOutlineMenu color="#FFF" size="2rem" />
        </SettingsButton>
      </HeaderContainer>
    </>
  );
}
