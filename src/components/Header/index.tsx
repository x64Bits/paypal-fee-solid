import Icon from "../../../../solid-icons/lib/Icon";
import FiSettings from "../../../../solid-icons/lib/fi/FiSettings";
import { Logo, LogoPayPal } from "./constants";
import {
  BrandContainer,
  BrandLogo,
  Description,
  HeaderContainer,
  PayPalImg,
  SettingsButton,
} from "./styles";

export default function Header() {
  const handleOpenSettings = () => {
    console.log("navigate to settings screen");
  };

  return (
    <>
      <HeaderContainer>
        <BrandContainer>
          <BrandLogo src={Logo} />
          <PayPalImg src={LogoPayPal} />
        </BrandContainer>
        <SettingsButton onClick={handleOpenSettings}>
          <Icon src={FiSettings} color="#FFF" size="2rem" />
        </SettingsButton>
      </HeaderContainer>
      <Description>
        Calculadora de comisiones de <b>PayPal</b>
      </Description>
    </>
  );
}
