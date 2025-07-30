'use client';
import Link from 'next/link';
import { useBasket } from '@/contexts/BasketContext';
import styles from './page.module.css'

function ItemCount({ count, name }: { count: number, name: string }) {
  return <div key={name}>{name} count: {count}</div>
};

export default function Home() {
  const { items, itemCount, addToCart } = useBasket();

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Michael&apos;s Amazing Web Store
        </p>
        <div>
          <Link href="/checkout" className={styles.basket}>Basket: {itemCount} item{itemCount !== 1 && 's'}</Link>
          <ItemCount name="Item 1" count={items.find(item => item.name === 'Item 1')?.quantity || 0} />
          <ItemCount name="Item 2" count={items.find(item => item.name === 'Item 2')?.quantity || 0} />
          <ItemCount name="Item 3" count={items.find(item => item.name === 'Item 3')?.quantity || 0} />
          <ItemCount name="Item 4" count={items.find(item => item.name === 'Item 4')?.quantity || 0} />
        </div>
      </div>

      <div className={styles.grid}>
        <button className={styles.card} onClick={() => addToCart('Item 1')} aria-label="Add to basket"><h2>Item 1 <span>-&gt;</span></h2><p>Foo</p></button>
        <button className={styles.card} onClick={() => addToCart('Item 2')} aria-label="Add to basket"><h2>Item 2 <span>-&gt;</span></h2><p>Bar</p></button>
        <button className={styles.card} onClick={() => addToCart('Item 3')} aria-label="Add to basket"><h2>Item 3 <span>-&gt;</span></h2><p>Baz</p></button>
        <button className={styles.card} onClick={() => addToCart('Item 4')} aria-label="Add to basket"><h2>Item 4 <span>-&gt;</span></h2><p>Qux</p></button>
      </div>
    </main>
  )
}
