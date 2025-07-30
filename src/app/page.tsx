import styles from './page.module.css'
import { Basket } from '@/components/Basket';
import { ItemsGrid } from '@/components/ItemsGrid';

export default async function Home() {
  const res = await fetch('https://v0-api-endpoint-request.vercel.app/api/products')
  const data = await res.json()

  if (!data.success) throw new Error('Failed to fetch products')

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Michael&apos;s Amazing Web Store
        </p>
        <Basket showLink />
      </div>

      <ItemsGrid initialItems={data.products} />
    </main>
  )
}
