"use client"
import React, { useEffect } from 'react';
import { usePageContext } from './../PageContext.js';
import styles from '../pages.module.css'
import { Merriweather } from 'next/font/google'

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  styles: ["normal", "italic"],
  subsets: ['latin']
})


export default function Aviso() {
  const { setTitle, setDescription, setKeywords } = usePageContext();

    useEffect(() => {
        setTitle('Aviso legal - Ayuntamiento de Gibraleón');
        setDescription('Web oficial del Excmo. Ayuntamiento');
        setKeywords('Gibraleón, ayuntamiento');
    }, []);

    return (
      <main className={styles.main}>
        <h1 className={`${merriweather.className} ${styles.tituloPagina}`}>Aviso legal</h1>
        <p  className={styles.tituloPagina}>En proceso para su presentación en fechas próximas.</p>
      </main>
    )
  }
  