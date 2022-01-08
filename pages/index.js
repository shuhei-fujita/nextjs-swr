import styles from '../styles/Home.module.css'
import useSWR from 'swr'

export default function Home() {
  const fetcher = url => fetch(url).then(r => r.json())
  const { data, error } = useSWR('/api/user', fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div>{data.name}</div>
      </main>
    </div>
  )
}
