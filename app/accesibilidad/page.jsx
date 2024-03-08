"use client"
import React, { useEffect } from 'react';
import styles from '../pages.module.css'
import { Merriweather } from 'next/font/google'
import { usePageContext } from './../PageContext.js';

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  styles: ["normal", "italic"],
  subsets: ['latin']
})


export default function Accesibilidad() {
  const { setTitle, setDescription, setKeywords } = usePageContext();

    useEffect(() => {
        setTitle('Accesibilidad - Ayuntamiento de Gibraleón');
        setDescription('Web oficial del Excmo. Ayuntamiento');
        setKeywords('Gibraleón, ayuntamiento, accesibilidad');
    }, []);

    return (
      <main className={`${styles.main} ${styles.paginasFooter}`}>

        <h1 className={`${merriweather.className} ${styles.tituloPagina}`}>Declaración de accesibilidad</h1>

        <h2>Situación de cumplimiento</h2>
        <p>Este sitio web es parcialmente accesible conforme con el RD 1112/2018 de 7 de septiembre, debido a las excepciones y a la falta de conformidad de los aspectos que se indican a continuación.</p>
        
        <h2>Contenido no accesible</h2>
        <p>El contenido que se recoge a continuación no es accesible por lo siguiente:</p>
        <ul>
            <li>Falta de conformidad con el RD 1112/2018</li>
            <ul>
                <li>Podrían existir fallos puntuales de edición en alguna página web.</li>
            </ul>
            <li>Carga desproporcionada</li>
            <ul>
                <li>No aplica.</li>
            </ul>
        </ul>
        
        <h2>Preparación de la presente declaración de accesibilidad</h2>
        <p>La presente declaración fue preparada el  29 de noviembre de 2023 y está basada  está basada en los Informes de Accesibilidad Web del <a href="https://administracionelectronica.gob.es/pae_Home/pae_Estrategias/pae_Accesibilidad.html" target='_blank'>Observatorio de Accesibilidad</a>.</p>
        
        <h2>Observaciones y datos de contacto</h2>
        <p>Si detecta que algún contenido de este sitio web no es accesible o si tiene alguna duda en relación con la accesibilidad de este sitio web, puede  comunicarlo:</p>
        <ul>
            <li><strong>Por correo electrónico:</strong>info@gibraleon.com</li>
            <li><strong>Presencialmente:</strong> En el ayuntamiento de Gibraleón situado en Plaza España, 1, 21500 Gibraleón, Huelva</li>
        </ul>
        
        <h2>Contenido opcional</h2>
        <p>Cumplimiento del nivel AA (doble-A) en las Pautas de Accesibilidad, recomendadas por el grupo de trabajo WAI del W3C.</p><p style={{ marginTop: '15px' }}>Todas las páginas de este sitio web cumplen con las Pautas de Accesibilidad o Principios Generales de Diseño Accesible establecidas por el Grupo de Trabajo WAI perteneciente al W3C.</p><p style={{ marginTop: '15px' }}>El diseño visual se ha realizado bajo la recomendación del W3C. sobre las Hojas de Estilo en Cascada, Nivel 3 (CSS3). Si el navegador o dispositivo de navegación no soporta hojas de estilo, el contenido de la web sigue siendo totalmente legible gracias a su marcado estructural.</p>
      
      </main>
    )
  }
  