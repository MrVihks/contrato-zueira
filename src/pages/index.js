import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <div>
        <header id={styles.header}>
          <h1>Contrato de mamadas.</h1>
          <p>Eu, Victor Reis David aceito o contrato de quando <a>levar um gol</a>, no PES, dar uma mamada em Vinicius.</p>
        </header>
        <div id={styles.regras}>
          <h1>Regras:</h1>
          <p>-- Você pode trocar a mamada com alguém.</p>
          <p>-- Você não pode <a>rasgar o contrato</a> pois esse contrato é digital.</p>
          <p>-- Se você burlar o contrato você é <a>gay</a>.</p>
        </div>
      </div>
    </>
  )
}
