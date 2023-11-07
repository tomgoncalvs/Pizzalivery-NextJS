"use client"
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import  Button  from "../../../components/button/Button";
import { Layout } from "../../../components/layout/Layout";
import { Title } from "../../../components/title/Title";
import { RadioCard, SizeActionWrapper, SizeContentWrapper } from "./sizes.style";
import OrderContext from "../../../contexts/OrderContext";

export default function Sizes() {
  const router = useRouter();
  const { pizzaSize, setPizzaSize } = useContext(OrderContext);

  const [sizeId, setSizeId] = useState("");
  const [pizzaSizeOptions, setPizzaSizeOptions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getPizzaSizeOptions = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:8000/pizza/sizes");
      if (!response.ok) {
        throw new Error(`Erro ao carregar tamanhos: ${response.statusText}`);
      }
      const options = await response.json();
      setPizzaSizeOptions(options);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (event) => {
    setSizeId(event.target.value);
  };

  const handleBack = () => {
    router.push("/");
  };

  const handleNext = () => {
    const selectedSize = pizzaSizeOptions.find((option) => option.id === sizeId);
    console.log(selectedSize);
    if (selectedSize) {
      setPizzaSize && setPizzaSize(selectedSize);
      router.push("/pedido/flavours");
    } else {
      setError("Por favor, selecione um tamanho antes de prosseguir.");
    }
  };

  useEffect(() => {
    getPizzaSizeOptions();
    // Se um tamanho já foi selecionado, configure-o como o estado inicial
    if (pizzaSize) {
      setSizeId(pizzaSize.id);
    }
  }, []);

  return (
    <Layout>
      <Title tabIndex={0}>Escolha o tamanho da sua pizza</Title>
      {error && <p className="error-message">{error}</p>}
      {isLoading ? (
        <SizeContentWrapper>
          <Title>Carregando...</Title>
        </SizeContentWrapper>
      ) : (
        <SizeContentWrapper>
          {pizzaSizeOptions.map(({ id, size, slices, flavours, text }) => (
            <RadioCard key={id}>
              <input
                type="radio"
                id={id}
                name="sizes"
                onChange={handleChange}
                value={id}
                checked={sizeId === id}
              />
              <label htmlFor={id}>
                {text} - {flavours} sabores
                <span>Pizza com {slices} pedaços e {size}cm</span>
              </label>
            </RadioCard>
          ))}
        </SizeContentWrapper>
      )}
      <SizeActionWrapper>
        <Button inverse onClick={handleBack}>
          Voltar
        </Button>
        <Button onClick={handleNext}>Escolha o sabor</Button>
      </SizeActionWrapper>
    </Layout>
  );
}
