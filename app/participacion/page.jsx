"use client"
import React, { useEffect } from 'react';
import { usePageContext } from './../PageContext.js';
import styles from '../pages.module.css'
import { Merriweather } from 'next/font/google'
import {Areas} from '../../components/Areas'
import {NoticiasParticipacion} from '../../components/NoticiasParticipacion'

const merriweather = Merriweather({
    weight: ["300", "400", "700", "900"],
    styles: ["normal", "italic"],
    subsets: ['latin']
})

export default function Participacion() {
  const { setTitle, setDescription, setKeywords } = usePageContext();

    useEffect(() => {
        setTitle('Participación Ciudadana - Ayuntamiento de Gibraleón');
        setDescription('Web oficial del Excmo. Ayuntamiento');
        setKeywords('Gibraleón, Participación Ciudadana');
    }, []);

    return (
      <main className={styles.main}>
        <Areas/>

        <h1  className={merriweather.className}>Participación Ciudadana</h1>
        <p  className={styles.tituloPagina}>En proceso para su presentación en fechas próximas.</p>

        <section>
          <h2 className={styles.noticiasRelacionadas}>Últimas noticias relacionadas</h2>
          <NoticiasParticipacion/>
        </section>
      </main>
    )
}