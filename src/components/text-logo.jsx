import React from "react";
import styled from "styled-components";

const StyledLogo = styled.span`
    font-size: 26px;
    font-weight: bolder;
    color: white;
    span {
        color: red;
    }
`;

const TextLogo = () => <StyledLogo><span>D</span>ream<span>R</span>eality</StyledLogo>

export default TextLogo;