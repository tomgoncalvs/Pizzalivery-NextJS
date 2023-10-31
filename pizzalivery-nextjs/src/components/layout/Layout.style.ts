// components/layout/Layout.style.js

import styled from "styled-components";
import { colors } from "../../styles/Colors";

export const ElementMain = styled.main`
  min-height: calc(100vh - 154px);
  background-color: ${colors.secondary.main};
`;

export const LayoutContainer = styled.div`
  margin: 0 auto;
  width: 80%;
`;
