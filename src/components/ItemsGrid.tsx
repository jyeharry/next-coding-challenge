'use client'

import { useBasket } from "@/contexts/BasketContext";
import { Product } from "@/types";

const Item = ({ product, addToCart }: { product: Product, addToCart: (item: Product) => void }) =>
  <button className='card' onClick={() => addToCart(product)} aria-label="Add to basket">
    <h2>{product.name.uk} <span>-&gt;</span></h2>
    <p suppressHydrationWarning>{currency('GBP', product.price.gbp)}</p>
  </button>

const currency = (currencyCode: string, amount: number) => {
  return new Intl.NumberFormat('gb-GB', {
    style: 'currency',
    currency: currencyCode,
  }).format(amount);
}

export const ItemsGrid = ({ initialItems }: { initialItems: Product[] }) => {
  const { addToCart } = useBasket();
  return (
    <div className='grid'>
      {initialItems.map((item) => (
        <Item key={item.id} product={item} addToCart={addToCart} />
      ))}
    </div>
  )
}
