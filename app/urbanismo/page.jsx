"use client"
import styles from '../pages.module.css'
import { Merriweather } from 'next/font/google'
import {Areas} from '../../components/Areas'
import {NoticiasUrbanismo} from '../../components/NoticiasUrbanismo'
import React, { useState, useEffect } from 'react';
import { usePageContext } from './../PageContext.js';

const merriweather = Merriweather({
    weight: ["300", "400", "700", "900"],
    styles: ["normal", "italic"],
    subsets: ['latin']
})

export default function Urbanismo() {
  const { setTitle, setDescription, setKeywords } = usePageContext();

    useEffect(() => {
        setTitle('Urbanismo - Ayuntamiento de Gibraleón');
        setDescription('Web oficial del Excmo. Ayuntamiento');
        setKeywords('Gibraleon, urbanismo, información urbanística');
    }, []);

  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { title: "Contacto", content: (
      <><p><strong>Teléfono:</strong> 959 300211</p><p style={{ display: 'block', marginTop: 20 }}><strong>Email:</strong> urbanismo@gibraleon.com</p><p style={{ display: 'block', marginTop: 20 }}><strong>Horario de atención Administrativa:</strong> de lunes a viernes de 8:00h a 15:00h.</p><p style={{ display: 'block', marginTop: 20 }}><strong>Horario de atención Técnicos:</strong> de lunes a viernes de 8:00h a 15:00h.</p></>
    ) },
    { title: "Información Urbanística", content: (
      <>
        <ul>
          <li>Modificaciones puntuales.</li>
          <li>Ordenanzas Urbanísticas.</li>
          <li>Procedimiento para la obtención de una información urbanística:</li>
          <p>El procedimiento se inicia mediante presentación de la solicitud y documentación preceptiva al efecto, a través del Registro Municipal. Lo puede solicitar cualquier persona física o jurídica o quien actúe en su representación (en el caso de que se actúe a través de representante se deberá acreditar dicha representación).</p>
          <ul> Documentación a Presentar:
            <li style={{ marginLeft: 20 }}>Solicitud, según modelo oficial, donde se detalle de forma clara la información urbanística que se quiere conocer.</li>
            <li style={{ marginLeft: 20 }}>Plano de situación/emplazamiento de la finca a escala 1:1000/1:2000 o bien la denominación precisa en su caso conforme al PGOU.</li>
            <li style={{ marginLeft: 20 }}>Autoliquidación según modelo oficial.</li>
          </ul>
          <li>Cédula Urbanística</li>
          <p>Documento escrito que expedido por el Ayuntamiento, informa sobre el régimen urbanístico aplicable a una parcela.</p>
        </ul> 
      </>
    ) },
    { title: "Licencias", content: (
      <><p><strong>Obra Mayor</strong></p><p style={{ display: 'block', marginTop: 10 }}>Actuaciones de nueva planta, reforma y conservación de edificaciones, adecuación de locales y naves para implantación de actividades, derribos, etc.; que requiera un proyecto suscrito por técnico competente (según ley 38/1999 LOE).</p><p style={{ display: 'block', marginTop: 35 }}><strong>Obra Menor</strong></p><p style={{ display: 'block', marginTop: 10 }}>Actuaciones de reparación, conservación, reforma o implantación de instalaciones en edificios que no modifican su configuración arquitectónica, que no produzcan una variación esencial en la composición general exterior, la volumetría o el conjunto del sistema estructural de la edificación. Pueden requerir la redacción de proyecto técnico o no, en función de la entidad de las obras, la complejidad técnica y los riesgos que conllevan en lo relativo a la seguridad y salud de las personas.</p><p style={{ display: 'block', marginTop: 35 }}><strong>Derribos</strong></p><p style={{ display: 'block', marginTop: 10 }}> Actuaciones de demolición total o parcial de edificios y construcciones.</p><p style={{ display: 'block', marginTop: 35 }}><strong>Legalizaciones</strong></p><p style={{ display: 'block', marginTop: 10 }}>Actos sujetos a licencias ejecutados sin autorización municipal o difiriendo de la licencia otorgada, se requiere la legalización como trámite de comprobación y certificación de su adecuación a la normativa urbanística y técnica de competencia municipal.</p><p style={{ display: 'block', marginTop: 35 }}><strong>1ª Ocupación/Utilización</strong></p><p style={{ display: 'block', marginTop: 10 }}>Documento que el promotor de una obra nueva solicita al Ayuntamiento una vez está terminada y satisfechas todas las obligaciones (de urbanizar el entorno, reparación de posibles daños en dominio público, acerados, viales, luminarias, etc.) es preceptiva para todos los edificios de obra nueva y para aquellos que sufran una modificación significativa.</p><p style={{ display: 'block', marginTop: 10 }}>Dicha documentación constata que la obra nueva se ajusta al proyecto Básico + Ejecución (si se realiza al amparo de una licencia urbanística) o bien que la edificación reúne condiciones de solidez estructural, salubridad y uso necesarias para su habitabilidad y que es apto para la contratación de los suministros básicos (sin ella será casi imposible contratar la luz, el agua o el gas). Antes de la firma de escritura de compra-venta de una vivienda el comprador debe exigir al promotor que exhiba copia de licencia de primera ocupación otorgada por el Ayuntamiento correspondiente.</p><p style={{ display: 'block', marginTop: 35 }}><strong>Parcelación/Segregación</strong></p><p style={{ display: 'block', marginTop: 10 }}> Actuaciones que tienen por objeto la división simultánea o sucesiva de una finca. Estos actos podrán incluir agrupaciones de fincas.</p></>
    ) }
  ];

  const handleTabClick = (index) => {
    setActiveTab(index);
  }

    return (
      <main className={styles.main}>
        <Areas/>

        <h1  className={merriweather.className}>Urbanismo</h1>

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
          <NoticiasUrbanismo/>
        </section>
      </main>
    )
}