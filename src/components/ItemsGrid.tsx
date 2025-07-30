'use client'

import { useBasket } from "@/contexts/BasketContext";

const Item = ({ name, secondaryText, addToCart }: { name: string, secondaryText: string, addToCart: (item: string) => void }) =>
  <button className='card' onClick={() => addToCart(name)} aria-label="Add to basket">
    <h2>{name} <span>-&gt;</span></h2>
    <p>{secondaryText}</p>
  </button>


export const ItemsGrid = () => {
  const { addToCart } = useBasket();
  return (
    <div className='grid'>
      <Item name='Item 1' secondaryText="Foo" addToCart={addToCart} />
      <Item name='Item 2' secondaryText="Bar" addToCart={addToCart} />
      <Item name='Item 3' secondaryText="Baz" addToCart={addToCart} />
      <Item name='Item 4' secondaryText="Qux" addToCart={addToCart} />
    </div>

  )
}
