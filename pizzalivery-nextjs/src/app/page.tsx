"use client";
import { GlobalStyles } from "../styles/GlobalStyles";
import Button from "../components/button/Button";
import { Layout } from "../components/layout/Layout";
import { HomeWrapper } from "../app/pages/index.style";
import Link from "next/link";

export default function Home() {
  return (
    
      <Layout>
        <GlobalStyles/>
        <HomeWrapper>
          <Link href="/Sizes">
            <Button onClick={() => {}}>Iniciar pedido</Button>
          </Link>
        </HomeWrapper>
      </Layout>
  );
}
