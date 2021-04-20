import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Hero } from '@danwakeem/wakeem.ui.hero';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto">
        <Hero title="hi brother man" />
      </main>
    </div>
  )
}
