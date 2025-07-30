'use client'

import { useBasket } from "@/providers/BasketProvider";
import { Product } from "@/types";
import { useQuery } from "@tanstack/react-query";

const Item = ({ product, addToCart }: { product: Product, addToCart: (item: Product) => void }) =>
  <button className='card' onClick={() => addToCart(product)} aria-label="Add to basket">
    <h2>{product.name.uk} <span>-&gt;</span></h2>
    <p suppressHydrationWarning>{currency('GBP', product.price.gbp)}</p>
  </button>

const currency = (currencyCode: string, amount: number) => {
  return new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency: currencyCode,
  }).format(amount);
}

export const ItemsGrid = ({ initialItems }: { initialItems: Product[] }) => {
  const { addToCart } = useBasket();
  const { data } = useQuery({
    queryKey: ['more-products'],
    queryFn: async () => {
      const res = await fetch('/api/more-products')
      const data = await res.json()
      return data.products as Product[]
    }
  })

  return (
    <>
      <div className='grid'>
        {initialItems.map((product) => (
          <Item key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
      {data && (
        <div style={{ maxWidth: 'var(--max-width)', width: '100%' }}>
          <h3>More products</h3>
          <div className='grid'>
            {data.map((product) => (
              <Item key={product.id} product={product} addToCart={addToCart} />
            ))}
          </div>
        </div >
      )}
    </>
  )
}
