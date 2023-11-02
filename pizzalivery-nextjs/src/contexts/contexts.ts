"use client"
import { createContext, useState } from "react";

interface PizzaSizeType {
    id: string
    flavours: number
    size: number
    slices: number
    text: string
}

type PizzaFlavourType = {
    id: string
    image: string
    name: string
    description: string
    price: {
        "8": number
        "4": number
        "1": number
    }
}

type PizzaOrderType = {
    item: {
        id: string
        image: string
        size: string
        slices: number
        value: number
    },
    total: number
}

type OrderInformationType = {
    orderId: number
    created_at: Date
    message: string
}

type OrderContextProps = {
    pizzaSize: PizzaSizeType
    setPizzaSize: React.Dispatch<React.SetStateAction<PizzaSizeType>>;
    pizzaFlavour: PizzaFlavourType
    setPizzaFlavour: React.Dispatch<React.SetStateAction<PizzaFlavourType>>;
    pizzaOrder: PizzaOrderType
    setPizzaOrder: React.Dispatch<React.SetStateAction<PizzaOrderType>>;
    orderInformation: OrderInformationType
    setOrderInformation: React.Dispatch<React.SetStateAction<OrderInformationType>>;
}

const OrderContext = createContext<OrderContextProps | null>(null)

const OrderContextProvider = ({children}) => {
    const [pizzaSize, setPizzaSize] = useState<PizzaSizeType | null>(null);
    const [pizzaFlavour, setPizzaFlavour] = useState<PizzaFlavourType | null>(null);
    const [pizzaOrder, setPizzaOrder] = useState<PizzaOrderType | null>(null);
    const [orderInformation, setOrderInformation] = useState<OrderInformationType | null>(null);

    return (
        <OrderContext.Provider value={{pizzaSize, setPizzaSize, pizzaFlavour, setPizzaFlavour, pizzaOrder, setPizzaOrder, orderInformation, setOrderInformation }}>
            {children}
        </OrderContext.Provider>
    )
}

export { OrderContextProvider }
export default OrderContext