"use client";

import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from 'next/image';
import Button from "../../../components/button/Button";
import { Layout } from "../../../components/layout/Layout";
import OrderContext from "../../../contexts/OrderContext";

import Mussarela from "../../../assets/pizza-flavours/mucarela.png"
import ChickenWithCheese from "../../../assets/pizza-flavours/frango-catupiry.png";
import Margherita from "../../../assets/pizza-flavours/margherita.png";
import Lusa from "../../../assets/pizza-flavours/portuguesa.png";

import { convertToCurrency } from "../../helpers/convertToCurrency";

import {
  FlavourActionWrapper,
  FlavourCard,
  FlavourCardDescription,
  FlavourCardImage,
  FlavourCardPrice,
  FlavourCardTitle,
  FlavourContentWrapper,
} from "./Flavours.style";
import { Title } from "../../../components/title/Title";

export default function Flavours() {
  const router = useRouter();
  const { pizzaSize, pizzaFlavour, setPizzaFlavour } = useContext(OrderContext);
  const [flavourId, setFlavourId] = useState("");
  const [flavoursOptions, setFlavoursOptions] = useState([]);

  const getPizzaFlavoursOptions = async () => {
    try {
      const response = await fetch("http://localhost:8000/pizza/flavours");
      const options = await response.json();
      setFlavoursOptions(options);
    } catch (error) {
      // Aqui você deve tratar o erro de forma amigável ao usuário
      console.error(`Error fetching pizza flavours: ${error}`);
    }
  };

  useEffect(() => {
    getPizzaFlavoursOptions();
  }, []);

  const handleClick = (id) => {
    setFlavourId(id);
  };

  const handleBack = () => {
    router.push("/pizzaSize");
  };

  const handleNext = () => {
    const selectedFlavour = flavoursOptions.find(flavour => flavour.id === flavourId);
    if (selectedFlavour) {
      setPizzaFlavour(selectedFlavour);
      router.push("/summary");
    }
  };

  useEffect(() => {
    if (pizzaFlavour) {
      setFlavourId(pizzaFlavour.id);
    }
  }, [pizzaFlavour]);

  return (
    <Layout>
      <Title tabIndex={0}>Agora escolha o sabor da sua pizza</Title>
      <FlavourContentWrapper>
        {flavoursOptions.map(({ id, image, name, description, price }) => (
          <FlavourCard key={id} selected={id === flavourId}>
            <FlavourCardImage>
              <Image src={image} alt={name} layout="fill" />
            </FlavourCardImage>
            <FlavourCardTitle>{name}</FlavourCardTitle>
            <FlavourCardDescription>{description}</FlavourCardDescription>
            <FlavourCardPrice>
              {convertToCurrency(price[pizzaSize?.slices || 0])}
            </FlavourCardPrice>
            <Button onClick={() => handleClick(id)}>
              Selecionar
            </Button>
          </FlavourCard>
        ))}
      </FlavourContentWrapper>
      <FlavourActionWrapper>
        <Button inverse="inverse" onClick={handleBack}>
          Voltar
        </Button>
        <Button onClick={handleNext}>Próximo</Button>
      </FlavourActionWrapper>
    </Layout>
  );
}
