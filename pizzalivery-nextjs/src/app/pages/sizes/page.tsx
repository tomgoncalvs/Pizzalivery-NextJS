import { useContext, useEffect, useState } from "react"
import { ElementButton } from "../../../components/button/Button.style"
import { Layout } from "../../../components/layout/Layout"
import { Title } from "../../../components/title/Title"
import { RadioCard, SizeActionWrapper, SizeContentWrapper } from "./sizes.style"
import OrderContext from "../../contexts/OrderContext"
import Link from "next/link"

export default async function Sizes() {
  const response = await fetch ('http://localhost:8000/pizza/sizes')
  const pizzaSizeOptions = await response.json()

  const { pizzaSize, setPizzaSize } = useContext(OrderContext)

  const [sizeId, setSizeId] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const getPizzaSize = (sizeId: string) => {
    return pizzaSizeOptions.filter((option) => option.id === sizeId)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSizeId(event.target.value)
  }

  const handleNext = () => {
    const selectedSize = getPizzaSize(sizeId)
    const selectedFlavour = selectedSize[0].flavours
    setPizzaSize(selectedSize)
  }

  useEffect(() => {
    if (!pizzaSize) return
    setSizeId(pizzaSize[0].id)
  }, [])
  
  // useEffect(() => {
  //   getPizzaSizeOptions()
  // }, [])

  return (
    <Layout>
      <Title tabIndex={0}>Escolha o tamanho da sua pizza</Title>
      {isLoading ? (
        <SizeContentWrapper>
          <Title>Carregando...</Title>
        </SizeContentWrapper>
        ) : (
        <SizeContentWrapper>
        {pizzaSizeOptions.map(({id, size, slices, flavours, text}) => (
          <RadioCard key={id}>
            <input type="radio" id={id} name="sizes" onChange={handleChange} value={id} checked={sizeId === id}/>
            <label htmlFor={id}>
              {text} - {flavours} sabores
              <span>
                Pizza com {slices} pedaços e {size}cm
              </span>
            </label>
          </RadioCard>
        ))}
        </SizeContentWrapper>
      )}
      <SizeActionWrapper>
        <Link href='/'>
            <ElementButton inverse="inverse">Voltar</ElementButton>
        </Link>
        <Link href='/flavours'>
            <ElementButton onClick={handleNext}>Escolha o Sabor</ElementButton>
        </Link>
      </SizeActionWrapper>
    </Layout>
  )
}
