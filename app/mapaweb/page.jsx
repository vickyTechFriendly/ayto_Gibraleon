"use client"
import React, { useEffect } from 'react';
import { usePageContext } from './../PageContext.js';
import styles from '../pages.module.css'
import { Merriweather } from 'next/font/google'
import Link from "next/link"

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  styles: ["normal", "italic"],
  subsets: ['latin']
})


export default function MapaWeb() {
  const { setTitle, setDescription, setKeywords } = usePageContext();

    useEffect(() => {
        setTitle('Mapa web - Ayuntamiento de Gibraleón');
        setDescription('Web oficial del Excmo. Ayuntamiento');
        setKeywords('Gibraleón, ayuntamiento');
    }, []);

    return (
      <main className={styles.main} style={{ lineHeight: '1.5' }}>
        <h1 className={`${merriweather.className} ${styles.tituloPagina}`}>Mapa web</h1>

        <Link href="/">Inicio</Link>

        <ul>
          <li><Link href="/">Mi ayuntamiento</Link>
            <ul style={{ marginLeft: '20px' }}>
              <li>Saludo a la alcaldesa</li>
              <li>Corporación municipal</li>
            </ul>
          </li>
          <li><Link href="/noticias">Actualidad</Link></li>
          <li><Link href="/consumo">Consumo</Link></li>
          <li><Link target='_blank' href="https://gibraleon.sedelectronica.es/info.0">Atención ciudadana</Link></li>
          <li><Link href="/contacto">Contaco</Link></li>
          <li><Link target='_blank' href="https://gibraleon.sedelectronica.es/info.0">Sede electrónica</Link></li>
        </ul>

        <ul style={{ marginTop: '40px' }}>Áreas municipales
          <li style={{ marginTop: '10px' }}><Link href="/economia">Economía y Hacienda</Link></li>
          <li><Link href="/serviciossociales">Servicios Sociales</Link></li>
          <li><Link href="/urbanismo">Urbanismo</Link></li>
          <li><Link href="/agricultura">Agricultura y Medio Ambiente</Link></li>
          <li><Link href="/salud">Salud</Link></li>
          <li><Link href="/educacion">Educación y Empleo</Link></li>
          <li><Link href="/participacion">Participación Ciudadana</Link></li>
          <li><Link href="/juventud">Juventud e Infancia</Link></li>
          <li><Link href="/mayores">Mayores</Link></li>
          <li><Link href="/cultura">Cultura</Link></li>
          <li><Link href="/turismo">Turismo</Link></li>
          <li><Link href="/deportes">Deportes</Link></li>
          <li><Link href="/festejos">Festejos</Link></li>
          <li><Link href="/seguridad">Seguridad</Link></li>
        </ul>

      </main>
    )
  }
  