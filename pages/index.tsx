import Head from 'next/head'
import {Button} from '../components/button'
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Button label="Hello"/>
      </div>
     
    </div>
  )
}
