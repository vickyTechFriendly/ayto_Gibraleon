"use client"
import React, { useEffect } from 'react';
import { usePageContext } from './../PageContext.js';
import styles from '../pages.module.css'
import { Merriweather } from 'next/font/google'
import {Areas} from '../../components/Areas'

const merriweather = Merriweather({
    weight: ["300", "400", "700", "900"],
    styles: ["normal", "italic"],
    subsets: ['latin']
})

export default function Saludo() {
  const { setTitle, setDescription, setKeywords } = usePageContext();

    useEffect(() => {
        setTitle('Saludo de la alcaldesa - Ayuntamiento de Gibraleón');
        setDescription('Web oficial del Excmo. Ayuntamiento');
        setKeywords('Gibraleón, ayuntamiento');
    }, []);

    return (
      <main className={styles.main}>
        <Areas/>
        <img src="/images/alcaldesa.jpg" className={styles.alcaldesaImg} alt="Alcaldesa de Gibraleón"></img>
        <h1  className={merriweather.className}>Saludo de la alcaldesa</h1>
        <p style={{ display: 'block', marginTop: 20 }}>Bienvenid@s al portal web del Ayuntamiento de Gibraleón.</p><p style={{ display: 'block', marginTop: 20 }}>Como alcaldesa de Gibraleón me complace poder dirigirme a vosotr@s desde esta nueva ventana a través de la cual podréis conocer el día a día de nuestro municipio.</p><p style={{ display: 'block', marginTop: 20 }}>Es por ello que quiero dar la bienvenida a todos los visitantes.</p><p style={{ display: 'block', marginTop: 20 }}>La creciente importancia del acceso a la información unida a la modernización de las Administraciones Públicas ha provocado que la adaptación a las nuevas tecnologías lo marquemos no como un reto, sino como una necesidad. Tanto yo como el resto de concejales y concejalas del equipo de gobierno somos conscientes de esta nueva realidad. Es por ello que hemos querido ofrecer a nuestros vecinos y vecinas una web que les sea útil, ágil y de su interés.</p><p style={{ display: 'block', marginTop: 20 }}>En un ejercicio de responsabilidad y transparencia para con la ciudadanía hemos apostado por la comunicación en mayúscula, poniendo en marcha esta página web, creando los perfiles de este Ayuntamiento en las Redes Sociales y estableciendo el Portal del Transparencia en nuestra sede electrónica.</p><p style={{ display: 'block', marginTop: 20 }}>En esta página web podrás encontrar información relativa al día a día de nuestro Ayuntamiento, al mismo tiempo que te iremos contando todo lo que sucede en Gibraleón en nuestro apartado de Noticias. Aquí podrás encontrar todo la información relativa al día a día en Gibraleón, tanto los actos y eventos organizados por este Ayuntamiento, como aquellos que provengan del tejido sociocultural del municipio.</p><p style={{ display: 'block', marginTop: 20 }}>Además, podrás encontrar información a diario en las redes sociales: en Twitter @AytoGibraleón y en Facebook facebook.com/AyuntamientoGibraleón.</p><p style={{ display: 'block', marginTop: 20 }}>Abrimos esta ventana a nuestro pueblo, pero no sin antes recordar que las puertas del ayuntamiento estarán también abiertas para que os acerquéis a la institución más cercana a la ciudadanía.</p><p style={{ display: 'block', marginTop: 20 }}>Sólo me queda agradecer nuevamente vuestra visita.</p><p style={{ display: 'block', marginTop: 20 }}>Entre todos conseguiremos hacer de Gibraleon el pueblo que queremos.</p><p style={{ display: 'block', marginTop: 20, marginBottom: 50 }}>Un saludo.</p>
      </main>
    )
}