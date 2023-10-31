"use client";
import { useRouter } from "next/router";
import Button from "../button/Button";
import Logo from "../logo/Logo";
import { ElementHeader, HeaderContainer } from "./Header.style";
import Link from "next/link";

export const Header = () => {
  

  return (
    <ElementHeader>
      <HeaderContainer>
        <Logo />
        <Link href="/pizzaSize"></Link>
      </HeaderContainer>
    </ElementHeader>
  )
}
