import styles from './page.module.css'
import { Basket } from '@/components/Basket';
import { ItemsGrid } from '@/components/ItemsGrid';
import { RawProduct, ValidCountry } from '@/types';
import { countryToCurrency } from '@/utils';

export default async function Home({ params }: { params: { country: ValidCountry } }) {
  const res = await fetch('https://v0-api-endpoint-request.vercel.app/api/products')
  const data = await res.json() as { success: boolean, products: RawProduct[] }

  if (!data.success) throw new Error('Failed to fetch products')

  const products = data.products.map((product) => ({
    id: product.id,
    name: product.name[params.country],
    price: product.price[countryToCurrency[params.country]],
    stock: product.stock,
  }))

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Michael&apos;s Amazing Web Store
        </p>
        <Basket showLink />
      </div>

      <ItemsGrid initialItems={products} />
    </main>
  )
}
