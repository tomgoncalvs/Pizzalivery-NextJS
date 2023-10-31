"use client"
import styled from "styled-components"
import { colors } from "../../styles/Colors"
import { sizes } from "../../styles/Sizes"

export const ElementHeader = styled.header`
  padding-top: ${sizes.small};
  padding-bottom: ${sizes.small};
  background-color: ${colors.secondary.dark};
`
export const HeaderContainer = styled.div`
  margin: 0 auto;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`