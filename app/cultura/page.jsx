"use client"
import styles from '../pages.module.css'
import { Merriweather } from 'next/font/google'
import {Areas} from '../../components/Areas'
import {NoticiasCultura} from '../../components/NoticiasCultura'
import React, { useState, useEffect } from 'react';
import { usePageContext } from './../PageContext.js';
import Link from "next/link"

const merriweather = Merriweather({
    weight: ["300", "400", "700", "900"],
    styles: ["normal", "italic"],
    subsets: ['latin']
})

export default function Cultura() {
  const { setTitle, setDescription, setKeywords } = usePageContext();

    useEffect(() => {
        setTitle('Cultura - Ayuntamiento de Gibraleón');
        setDescription('Web oficial del Excmo. Ayuntamiento');
        setKeywords('Gibraleon, cultura, CODAC, Sala San Sebastián');
    }, []);

  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { title: "CODAC", content: (
      <>
      <div className={styles.codac}>
        <img className={styles.imagenPestana} src="https://www.gibraleon.com/web/wp-content/uploads/2015/11/codac-300x220.jpg" alt="Centro CODAC"></img>
        <div><p>El <strong>Centro Olontense De Arte Contemporáneo</strong> fue mandado construir por el entonces alcalde D. Juan Mª Serrato Portillo, e inaugurado el 12 de Agosto de 2010. El CODAC fue creado con el fin de  establecer un espacio para difundir y conservar la pinacoteca que posee el municipio Olontense. No obstante, hoy en día alberga otras funciones que las meramente expositivas. El CODAC también contiene diferentes salas de estudio e investigación, además de una sala temporal para todo tipo de proyectos culturales: exposiciones, instalaciones, presentaciones de libros, charlas y foros, etc.</p></div>
      </div>
       <p style={{ display: 'block', marginTop: 20 }}><strong style={{ display: 'block', marginTop: 40 }}>Horario de atención al público.</strong>De lunes a Viernes: de 9.00 -14.00h y de 16.00hrs – 21.00hrs<br></br>Sábados y Domingos: de 10.00 – 13.00hrs.</p><p style={{ display: 'block', marginTop: 20 }}>Pueden concertar visitas para grupos a través del siguiente email: <Link className={styles.enlacePestana} href="mailto:cay.cultura@gibraleon.com">cay.cultura@gibraleon.com</Link></p>
      </>
    ) },
    { title: "Archivo", content: (
      <>
        <p>El archivo de Gibraleón supone una de las fuentes históricas más importantes que posee nuestro municipio. Al igual que la pinacoteca Olontense, el archivo histórico de Gibraleón es uno de los más significativos en la provincia.</p><p style={{ display: 'block', marginTop: 20 }}>El municipio de Gibraleón posee un gran patrimonio histórico, artístico y cultural, destacando su patrimonio documental.</p><p style={{ display: 'block', marginTop: 20 }}>La rica y amplia documentación histórica abarca no sólo un largo y extenso período cronológico sino también un amplio espacio geográfico, al ser Gibraleón cabeza del Marquesado y comprender éste por su extenso término las actuales villas de Cartaya, S. Bartolomé de la Torre, Sanlúcar de Guadiana, El Almendro, El Granado y Villanueva de los Castillejos, la mayoría de la documentación histórica de estos pueblos se encuentra en el Archivo de Gibraleón.</p><p style={{ display: 'block', marginTop: 20 }}>En el Archivo Municipal de Gibraleón se conserva la documentación concejil más antigua de la provincia, así como la única sustentada en pergamino.</p><p style={{ display: 'block', marginTop: 20 }}>Son los pergaminos documentos de especialísima importancia, pues aparte de su valor intrínseco tienen el incalculable valor histórico: en ello se recogen los primeros testimonios escritos que existen sobre Gibraleón y nos hablan de los primeros Privilegios que, como vecinos, gozaron sus habitantes.</p><p style={{ display: 'block', marginTop: 20 }}>Destacar también la serie de Autos de Litigios, donde se refleja la interminable disputa entre Huelva y Gibraleón por la capitalidad de la Provincia.</p><p style={{ display: 'block', marginTop: 20 }}>Es muy interesante la documentación referente a la desamortización de los bienes eclesiásticos por el volumen de los mismos y el rumbo que tomaron.</p><p style={{ display: 'block', marginTop: 20 }}><strong style={{ display: 'block', marginTop: 40 }}>Horario archivo Municipal:</strong>de lunes a viernes de 9.00 – 14.00 hr.<br></br>Para cualquier consulta puede remitirnos un email a: <a href="mailto:archivo@gibraleon.com" className={styles.enlacePestana}>archivo@gibraleon.com</a></p>
      </>
    ) },
    { title: "Sala San Sebastián", content: (
      <>
       <p><strong>La Sala San Sebastián</strong> se ubican en la Avda. Andalucía, nº 20. Este edificio fue en otro tiempo parte del <strong>Antiguo Hospital y Beaterio del Divino Pastor y Capilla de San Sebastián</strong>, también es conocida por la “Casa de la Cultura” y “Biblioteca Don Juan de la Cerda”.</p><p style={{ display: 'block', marginTop: 20 }}>Cada mes se organizan exposiciones de artistas plásticos jóvenes de toda la provincia, teniendo como objetivo principal la difusión de la obra de cada uno/a de ellos/as.</p><p style={{ display: 'block', marginTop: 20 }}><strong>Horario de Visitas: de Martes a Domingo de 18.00 – 21.00hr. (exposiciones)</strong></p>
      </>
    ) }

  ];

  const handleTabClick = (index) => {
    setActiveTab(index);
  }

    return (
      <main className={styles.main}>
        <Areas/>

        <h1  className={merriweather.className}>Cultura</h1>

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
          <h2 className={styles.noticiasRelacionadas}>Noticias relacionadas</h2>
          <NoticiasCultura/>
        </section>
      </main>
    )
} 