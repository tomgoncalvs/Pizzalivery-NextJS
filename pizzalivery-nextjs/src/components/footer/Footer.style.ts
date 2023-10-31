import styled from "styled-components"
import { colors } from "../../styles/Colors"
import { sizes } from "../../styles/Sizes"

export const Elementfooter = styled.footer`
  padding-top: ${sizes.large};
  padding-bottom: ${sizes.main};
  text-align: center;
  font-size: ${sizes.xsmall};
  background-color: ${colors.secondary.light};
  color: ${colors.text.main};
`

export const FooterContainer = styled.div`
  margin: 0 auto;
  width: 80%;
`