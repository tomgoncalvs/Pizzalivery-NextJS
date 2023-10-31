import styled from "styled-components";
import { colors } from "../../styles/Colors";
import { sizes } from "../../styles/Sizes";

export const ElementLogo = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoIcon = styled.img.attrs({
    src: "/assets/pizzalivery.svg", // nota que o caminho começa com /
    alt: "Pizza Slice"
  })`
    width: 50px;
    height: 50px;
    transform: rotate(-40deg);
  `;

export const LogoText = styled.span`
  font-size: ${sizes.large};
  font-weight: bold;
  color: ${colors.commom.light};
`;
