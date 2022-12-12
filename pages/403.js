import Header from '../components/header'
import Link from 'next/link'
import styles from '../styles/main.module.css'
import 'animate.css'

export default function Error403() {
  return (
    <div className={styles.container}>
      <Header pageTitle="Error 403" />

      <main className={styles.main}>
        <div className={styles.head}>
          <h1 className={`${styles.title} animate__animated animate__backInDown`}>
            Error
          </h1>
          <h1 className={`${styles.title} ${styles.orange} animate__animated animate__delay-1s animate__fadeInRight`}>
            403
          </h1>
        </div>
        <div className={`${styles.mainbody} animate__animated animate__delay-2s animate__fadeInUp`}>
          <p className={`${styles.subtitle} animate__animated animate__fadeInUp animate__delay-2s`}>
            <Link href="/" >
              Restricted Access
            </Link>
          </p>
        </div>
      </main>
    </div>
  )
}