import React from "react";
import { ReactComponent as ZubutLogo } from "../../img/ZubutLogo.svg";
import * as Styled from "./styles";
import * as StyledShared from "../shared";

const Navbar = () => {
  return (
    <Styled.Container>
      <StyledShared.MainWrapper>
        <Styled.LogoContainer>
          <ZubutLogo />
        </Styled.LogoContainer>
      </StyledShared.MainWrapper>
    </Styled.Container>
  );
};

export default Navbar;
