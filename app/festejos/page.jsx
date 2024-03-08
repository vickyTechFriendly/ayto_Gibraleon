"use client"
import React, { useEffect } from 'react';
import { usePageContext } from './../PageContext.js';
import styles from '../pages.module.css'
import { Merriweather } from 'next/font/google'
import {Areas} from '../../components/Areas'
import {NoticiasFestejos} from '../../components/NoticiasFestejos'

const merriweather = Merriweather({
    weight: ["300", "400", "700", "900"],
    styles: ["normal", "italic"],
    subsets: ['latin']
})

export default function Festejos() {
  const { setTitle, setDescription, setKeywords } = usePageContext();

    useEffect(() => {
        setTitle('Festejos - Ayuntamiento de Gibraleón');
        setDescription('Web oficial del Excmo. Ayuntamiento');
        setKeywords('Gibraleón, fiestas');
    }, []);

    return (
      <main className={styles.main}>
        <Areas/>

        <h1 className={merriweather.className}>Festejos</h1>
        <p className={styles.tituloPagina}>El calendario de eventos será publico proximamente.</p>

        <section>
          <h2 className={styles.noticiasRelacionadas}>Últimas noticias relacionadas</h2>
          <NoticiasFestejos/>
        </section>
      </main>
    )
}