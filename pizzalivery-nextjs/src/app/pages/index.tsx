"use client";
import Button from "../../components/button/Button";
import { Layout } from "../../components/layout/Layout";
import { HomeWrapper } from "./index.style";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/pizzaSize"); // Adapte a rota conforme necessário.
  };

  return (
    <Layout>
      <HomeWrapper>
        <Button onClick={handleClick}>Iniciar pedido</Button>
      </HomeWrapper>
    </Layout>
  );
}
