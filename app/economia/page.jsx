"use client"
import React, { useEffect } from 'react';
import { usePageContext } from './../PageContext.js';
import styles from '../pages.module.css'
import { Merriweather } from 'next/font/google'
import {Areas} from '../../components/Areas'
import {NoticiasEconomia} from '../../components/NoticiasEconomia'

const merriweather = Merriweather({
    weight: ["300", "400", "700", "900"],
    styles: ["normal", "italic"],
    subsets: ['latin']
})

export default function Economia() {
  const { setTitle, setDescription, setKeywords } = usePageContext();

    useEffect(() => {
        setTitle('Economía y Hacienda - Ayuntamiento de Gibraleón');
        setDescription('Web oficial del Excmo. Ayuntamiento');
        setKeywords('Gibraleón, Economía, Hacienda');
    }, []);

    return (
      <main className={styles.main}>
        <Areas/>
        
        <h1  className={merriweather.className}>Economía y Hacienda</h1>
        <a href="https://gibraleon.sedelectronica.es/transparency/2d7c1cdb-6c11-44a7-8290-443b5006163a/" target='_blank' style={{ display: 'block' }} className={styles.tituloPagina}  id="contenido">Haz clic aquí para consultar los presupuestos</a>
        <section>
            <h2 className={styles.noticiasRelacionadas}>Últimas noticias relacionadas</h2>
            <NoticiasEconomia/>
        </section>
      </main>
    )
}