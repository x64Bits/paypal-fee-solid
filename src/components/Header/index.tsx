import AiOutlineMenu from "solid-icons/ai/AiOutlineMenu";
import { createSignal } from "solid-js";
import OptionsMenu from "../OptionsMenu";
import { Logo, LogoPayPal } from "./constants";
import {
  BrandContainer,
  BrandLogo,
  HeaderContainer,
  PayPalImg,
  SettingsButton,
} from "./styles";

export default function Header(props) {
  const [showOptions, setShowOptions] = createSignal(false);
  const handleOpenSettings = () => {
    setShowOptions((prev) => !prev);
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
          <OptionsMenu visible={showOptions()} onClose={setShowOptions} />
        </SettingsButton>
      </HeaderContainer>
    </>
  );
}
