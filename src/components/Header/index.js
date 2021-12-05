import React, { useState } from "react";
import { ReactComponent as ZubutLogo } from "../../img/ZubutLogo.svg";
import * as Styled from "./styles";
import { MainWrapper } from "../shared";
import HamburgerMenu from "./HamburgerMenu";
import Navigation from "../Navigation";
import Backdrop from "../Navigation/Backdrop";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {open && <Navigation open={open} setOpen={setOpen} />}
      {open && <Backdrop setOpen={setOpen} />}
      <Styled.Container>
        <MainWrapper>
          <Styled.Wrapper>
            <Styled.LogoContainer>
              <ZubutLogo />
            </Styled.LogoContainer>
            <HamburgerMenu open={open} setOpen={setOpen} />
          </Styled.Wrapper>
        </MainWrapper>
      </Styled.Container>
    </>
  );
};

export default Header;
