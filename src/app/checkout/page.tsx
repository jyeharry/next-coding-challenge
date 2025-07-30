'use client';
import Link from 'next/link';
import { useBasket } from '@/contexts/BasketContext';
import styles from '../page.module.css';

export default function Checkout() {
  const { items, itemCount } = useBasket();

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Checkout - Michael&apos;s Amazing Web Store
        </p>
        <div>
          <Link href="/" className={styles.basket}>← Back to Store</Link>
        </div>
      </div>

      <div className={styles.card}>
        <h2>Basket Summary</h2>
        <p>Total Items: {itemCount}</p>

        {items.length === 0 ? (
          <p>Your basket is empty</p>
        ) : (
          <div style={{ marginTop: '8px' }}>
            <h3>Items in your basket:</h3>
            {items.map((item) => (
              <div key={item.name}>
                <strong>{item.name}</strong> - Quantity: {item.quantity}
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
