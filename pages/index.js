import styles from '../styles/Home.module.css'
import Link from 'next/link'
import xx from 'assets/images/1.png'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <Link href="/first-post"><a>快速 导航</a></Link>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <img src={xx} />
       
      </main>

      <style jsx>{`
          a{
            color: #444;
          }
        `}
      </style>
    </div>
  )
}
