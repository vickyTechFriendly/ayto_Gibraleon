"use client"
import React, { useEffect } from 'react';
import { usePageContext } from './../PageContext.js';
import styles from '../pages.module.css'
import { Merriweather } from 'next/font/google'
import {Areas} from '../../components/Areas'
import {NoticiasTurismo} from '../../components/NoticiasTurismo'

const merriweather = Merriweather({
    weight: ["300", "400", "700", "900"],
    styles: ["normal", "italic"],
    subsets: ['latin']
})

export default function Turismo() {
    const { setTitle, setDescription, setKeywords } = usePageContext();

    useEffect(() => {
        setTitle('Turismo - Ayuntamiento de Gibraleón');
        setDescription('Web oficial del Excmo. Ayuntamiento');
        setKeywords('Gibraleón, Turismo');
    }, []);

    return (
      <main className={styles.main}>
        <Areas/>
        
        <h1  className={merriweather.className}>Turismo</h1>
        <p  className={styles.tituloPagina}>En proceso para su presentación en fechas próximas.</p>
        
        <section>
          <h2 className={styles.noticiasRelacionadas}>Últimas noticias relacionadas</h2>
          <NoticiasTurismo/>
        </section>
      </main>
    )
}