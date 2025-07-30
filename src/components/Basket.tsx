'use client'
import Link from "next/link"
import { useBasket } from "@/contexts/BasketContext";

function ItemCount({ count, name }: { count: number, name: string }) {
  return <div key={name}>{name} count: {count}</div>
};

export const Basket = () => {
  const { items, itemCount } = useBasket();
  return (
    <div>
      <Link href="/checkout" className='basket'>Basket: {itemCount} item{itemCount !== 1 && 's'}</Link>
      <ItemCount name="Item 1" count={items.find(item => item.name === 'Item 1')?.quantity || 0} />
      <ItemCount name="Item 2" count={items.find(item => item.name === 'Item 2')?.quantity || 0} />
      <ItemCount name="Item 3" count={items.find(item => item.name === 'Item 3')?.quantity || 0} />
      <ItemCount name="Item 4" count={items.find(item => item.name === 'Item 4')?.quantity || 0} />
    </div>
  )
}
