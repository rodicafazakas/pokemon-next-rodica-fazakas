import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from "next/Link";

export default function Home() {
  return (
    <div> 
      <h1> Bienvenido </h1> 
      <Link href="/pokemons" > Pokemons </Link> 
    </div>
  )
}
