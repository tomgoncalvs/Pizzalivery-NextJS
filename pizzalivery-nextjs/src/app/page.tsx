"use client";
import { GlobalStyles } from "../styles/GlobalStyles";
import Button from "../components/button/Button";
import { Layout } from "../components/layout/Layout";
import { HomeWrapper } from "../styles/Home/Home.Style";
import Link from "next/link";

export default function Home() {
  return (
    
      <Layout>
        <GlobalStyles/>
        <HomeWrapper>
          <Link href="/pedido/sizes">
            <Button onClick={() => {}}>Iniciar pedido</Button>
          </Link>
        </HomeWrapper>
      </Layout>
  );
}
