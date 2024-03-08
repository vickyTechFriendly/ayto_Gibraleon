"use client"
import styles from '../pages.module.css'
import { Merriweather } from 'next/font/google'
import {Areas} from '../../components/Areas'
import {NoticiasServiciosSociales} from '../../components/NoticiasServiciosSociales'
import React, { useState, useEffect } from 'react';
import { usePageContext } from './../PageContext.js';

const merriweather = Merriweather({
    weight: ["300", "400", "700", "900"],
    styles: ["normal", "italic"],
    subsets: ['latin']
})

export default function Social() {
  const { setTitle, setDescription, setKeywords } = usePageContext();

    useEffect(() => {
        setTitle('Servicios sociales - Ayuntamiento de Gibraleón');
        setDescription('Web oficial del Excmo. Ayuntamiento');
        setKeywords('Gibraleon, servicios sociales, SIO, ayudas y prestaciones, consejo de la infancia');
    }, []);

  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { title: "SIO", content: (
      <>
       <p>Es la puerta de entrada a los Servicios Sociales, conlleva la atención al usuario/a y la gestión de los recursos sociales y prestaciones</p>
      </>
    ) },
    { title: "Ayudas y prestaciones básicas", content: (
      <>
        <ul>
          <li>Decreto de Inclusión Social: Suministros vitales y prestaciones de urgencia social, Programa de ayuda a la contratación, Red de garantía alimentaria, Plan Syga.</li>
          <li>Plan de Vulnerabilidad</li>
          <li>Renta Social Básica</li>
          <li>Programa  Extraordinario de Ayuda a la Contratación de Andalucía: El Programa de Ayuda a la Contratación se materializa mediante ayudas a los municipios de la Comunidad Autónoma de Andalucía para la contratación laboral de aquellas personas que, cumpliendo los requisitos, hayan sido previamente seleccionadas para un contrato por una duración determinada entre 15 días y tres meses.</li>
          </ul>
      </>
    ) },
    { title: "Prevención en drogodependencias", content: (
      <>
       <p>Programa “Ciudades ante las drogas”: programa para la prevención comunitaria centrada en reducir el uso/abuso de las drogas.</p>
      </>
    ) },
    { title: "Consejo de la infancia", content: (
      <>
        <p>Con el fin de hacer partícipes a los niños en mejorar su pueblo, el Ayuntamiento de Gibraleón está inmersa en la preparación de una candidatura para optar, en la próxima convocatoria, a que Gibraleón tenga el sello de UNICEF “Ciudad Amiga de la Infancia”.</p>
      </>
    ) }
  ];

  const handleTabClick = (index) => {
    setActiveTab(index);
  }

    return (
      <main className={styles.main}>
        <Areas/>

        <h1  className={merriweather.className}>Servicios sociales</h1>
        <div id="pestanas" className={styles.pestanas}>
          {tabs.map((tab, index) => (
            <a key={index} className={index === activeTab ? styles.active : ''} onClick={() => handleTabClick(index)} onKeyDown={(e) => e.key === 'Enter' && handleTabClick(index)} tabindex="0" id="contenido">
              {tab.title}
            </a>
          ))}
        </div>

          {tabs.map((tab, index) => (
            <div key={index} className={styles.contenidoPestana} style={{ display: index === activeTab ? 'block' : 'none' }}>
              <p>{tab.content}</p>
            </div>
          ))}

        <section>
          <h2 className={styles.noticiasRelacionadas}>Últimas noticias relacionadas</h2>
          <NoticiasServiciosSociales/>
        </section>
      </main>
    )
}