"use client"
import styles from '../pages.module.css'
import { Merriweather } from 'next/font/google'
import {Areas} from '../../components/Areas'
import {NoticiasDeportes} from '../../components/NoticiasDeportes'
import React, { useState, useEffect } from 'react';
import { usePageContext } from './../PageContext.js';

const merriweather = Merriweather({
    weight: ["300", "400", "700", "900"],
    styles: ["normal", "italic"],
    subsets: ['latin']
})

export default function Deportes() {
  const { setTitle, setDescription, setKeywords } = usePageContext();

    useEffect(() => {
        setTitle('Deportes - Ayuntamiento de Gibraleón');
        setDescription('Web oficial del Excmo. Ayuntamiento');
        setKeywords('Gibraleon, deportes, instalaciones deportivas');
    }, []);

  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { title: "Atención al usuario", content: (
      <>Horarios en los que los usuarios serán atendidos en nuestra oficina de Atención al Cliente.<br />Con cita en Pabellón Municipal de Deporte, Av. Real Escuelas Andaluza de Arte Ecuestre S/N.</>
    ) },
    { title: "Instalaciones", content:  (
      <>Conoce las instalaciones de las que puedes disfrutar para la práctica deportiva en tu municipio.<br></br>Horarios en los que están abiertas para dicha práctica.</>
      ) },
    { title: "Escuelas", content: "Un amplio abanico de escuelas deportivas municipales, que harán que ningún niño o niña se quede sin hacer deporte." },
    { title: "Cursos", content: "A los cursos de adultos que el Patronato Municipal de Deportes tenía, hay que añadir nuevos curso y horarios para que el deporte en los adultos sea una forma de vida." },
    { title: "Agenda", content: "Los usuarios conocerán en un “clic”, todos los eventos que se realizarán durante la semana." },
    { title: "Enlaces", content: "Redirección a páginas relevante y de interés, así como de federaciones, clubes o asociaciones deportivas." },

  ];

  const handleTabClick = (index) => {
    setActiveTab(index);
  }

    return (
      <main className={styles.main}>
        <Areas/>

        <h1  className={merriweather.className}>Deportes</h1>

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
          <NoticiasDeportes/>
        </section>
      </main>
    )
}
