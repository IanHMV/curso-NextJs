import { CartCounter } from "../../../shopping-cart/components/CartCounter"

export const metadata = {
  title: "Counter Page",
  description: "Conter"
}


const CounterPage = () => {

  return (
    <div className='flex flex-col items-center justify-center w-full h-full'>
      <span>Productos Carrito de Compras</span>

      <CartCounter value={20} />

    </div>
  )
}

export default CounterPage