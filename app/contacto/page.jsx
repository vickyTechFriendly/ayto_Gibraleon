"use client"
import React, { useEffect } from 'react';
import { usePageContext } from './../PageContext.js';
import styles from '../pages.module.css'
import { Merriweather } from 'next/font/google'
import {Areas} from '../../components/Areas'
import Link from "next/link"

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  styles: ["normal", "italic"],
  subsets: ['latin']
})


export default function Contacto() {
  const { setTitle, setDescription, setKeywords } = usePageContext();

    useEffect(() => {
        setTitle('Contacto - Ayuntamiento de Gibraleón');
        setDescription('Web oficial del Excmo. Ayuntamiento');
        setKeywords('Gibraleón, ayuntamiento');
    }, []);

    return (
      <main className={styles.main}>
        <Areas/>
        <h1  className={merriweather.className}>Contacto</h1>
        <div className={styles.contenido}>
          <div className={styles.contacto}>
            <p><i className="material-icons">location_on</i>Plaza España, 1, 21500 Gibraleón, Huelva</p>
            <p><i className="material-icons">call</i>959 30 02 11</p>
            <Link href="mailto:info@ayto-puntaumbria.es" id="contenido"><i className="material-icons" aria-hidden="true">mail</i>info@gibraleon.com</Link>
            <p><i className="material-icons">schedule</i>De lunes a viernes de 9:00 a 14:00</p>
          </div>
          <iframe className={styles.mapa} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12682.524492032768!2d-6.9703583!3d37.3749043!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd11c91be1c510b9%3A0xb63f368e6cf84d3!2sAyuntamiento%20de%20Gibrale%C3%B3n!5e0!3m2!1ses-419!2ses!4v1701239026022!5m2!1ses-419!2ses" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" style={{ borderRadius: '15px' }}></iframe>
        </div>
      </main>
    )
}