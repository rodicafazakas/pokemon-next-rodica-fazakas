
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from "next/link";
import Head from 'next/head';

export default function Home() {
  return (
    <>
    <Head>
      <title>Pokémons next</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <h1> Welcome to Pokemon Next </h1>
    <div> 
      <Link href="/"> Home </Link> 
      <Link href="/pokemons"> Pokemons </Link> 
      <Link href="/pokemonsSSR"> Pokemons SSR</Link> 
      <Link href="/pokemonsSSG"> Pokemons SSG</Link> 
      <Link href="/pokemonsISR"> Pokemons ISR</Link> 
    </div>
    </>
  )
}
