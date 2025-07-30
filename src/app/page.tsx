import styles from './page.module.css'
import { Basket } from '@/components/Basket';
import { ItemsGrid } from '@/components/ItemsGrid';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Michael&apos;s Amazing Web Store
        </p>
        <Basket showLink />
      </div>

      <ItemsGrid />
    </main>
  )
}
