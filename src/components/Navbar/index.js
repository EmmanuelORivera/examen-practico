import React from "react";
import { ReactComponent as ZubutLogo } from "../../img/ZubutLogo.svg";
import * as Styled from "./styles";
import * as StyledShared from "../shared";
import HamburgerMenu from "./HamburgerMenu";

const Navbar = () => {
  return (
    <Styled.Container>
      <StyledShared.MainWrapper>
        <Styled.Wrapper>
          <Styled.LogoContainer>
            <ZubutLogo />
          </Styled.LogoContainer>
          <HamburgerMenu />
        </Styled.Wrapper>
      </StyledShared.MainWrapper>
    </Styled.Container>
  );
};

export default Navbar;
