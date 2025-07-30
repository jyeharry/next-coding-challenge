'use client'
import Link from "next/link"
import { useBasket } from "@/contexts/BasketContext";

function ItemCount({ count, name }: { count: number, name: string }) {
  return <div key={name}>{name} count: {count}</div>
};

export const Basket = ({ showLink }: { showLink?: boolean }) => {
  const { items, itemCount } = useBasket();
  return (
    <div>
      {showLink
        ? <Link href="/checkout" className='basket'>Basket: {itemCount} item{itemCount !== 1 && 's'}</Link>
        : <p>Basket: {itemCount} item{itemCount !== 1 && 's'}</p>
      }
      {items.map((item) => (
        <ItemCount key={item.item.id} name={item.item.name.uk} count={item.quantity} />
      ))}
    </div>
  )
}
