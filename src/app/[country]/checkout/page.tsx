'use client';
import Link from 'next/link';
import styles from '../page.module.css';
import { Basket } from '@/components/Basket';

export default function Checkout() {
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

      <Basket />
    </main>
  );
}
