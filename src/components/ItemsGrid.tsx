'use client'

import { useBasket } from "@/providers/BasketProvider";
import { useCountryCode } from "@/providers/CountryCodeProvider";
import { Product } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { Price } from "./Price";

const Item = ({ product, addToCart }: { product: Product, addToCart: (item: Product) => void }) =>
  <button className='card' onClick={() => addToCart(product)} aria-label="Add to basket">
    <h2>{product.name} <span>-&gt;</span></h2>
    <p suppressHydrationWarning>
      <Price price={product.price} />
    </p>
  </button>

export const ItemsGrid = ({ initialItems }: { initialItems: Product[] }) => {
  const { addToCart } = useBasket();
  const country = useCountryCode();
  const { data, isLoading } = useQuery({
    queryKey: ['more-products', country],
    queryFn: async () => {
      const res = await fetch(`${country}/api/more-products`)
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
      <div style={{ maxWidth: 'var(--max-width)', width: '100%' }}>
        <h3>More products</h3>
        {isLoading && <p>Loading...</p>}
        {data && (
          <div className='grid'>
            {data.map((product) => (
              <Item key={product.id} product={product} addToCart={addToCart} />
            ))}
          </div>
        )}
      </div >
    </>
  )
}
