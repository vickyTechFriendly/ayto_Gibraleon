"use client" 
import styles from '../pages.module.css'
import { Merriweather } from 'next/font/google'
import {Areas} from '../../components/Areas'
import {NoticiasEducacion} from '../../components/NoticiasEducacion'
import React, { useState, useEffect } from 'react';
import { usePageContext } from './../PageContext.js';

const merriweather = Merriweather({
    weight: ["300", "400", "700", "900"],
    styles: ["normal", "italic"],
    subsets: ['latin']
})

export default function Educacion() {
  const { setTitle, setDescription, setKeywords } = usePageContext();

    useEffect(() => {
        setTitle('Educación y empleo - Ayuntamiento de Gibraleón');
        setDescription('Web oficial del Excmo. Ayuntamiento');
        setKeywords('Gibraleon, educación, empleo, escuela de Familias');
    }, []);

  const [activeTab, setActiveTab] = useState(0);
  const [activeTab1, setActiveTab1] = useState(0);

  const tabs = [
    { title: "Bolsa de Empleo", content: (
      <>
       <p>Teniendo en cuenta que la Administración Local es la que está más cerca de las demandas de servicios de los ciudadanos, para garantizar la continuidad en la prestación de servicios y atención a los ciudadanos, el Excmo. Ayuntamiento de Gibraleón ha de disponer de los medios materiales adecuados y de recursos humanos suficientemente preparados para poder llevar a cabo de forma adecuada sus fines.</p><p style={{ display: 'block', marginTop: 20 }}>Con tal fin nace esta bolsa de empleo rotativa, para satisfacer las necesidades puntuales (por acumulación de tareas, vacantes, bajas, vacaciones, obras o servicios determinados, etc.) que no puedan ser atendidas por el personal propio al servicio del Excmo. Ayuntamiento de Gibraleón o de su Patronato Municipal de Deportes, y siempre atendiendo a los más estrictos principios de transparencia, publicidad, igualdad y marcada por un claro carácter social, conjugando así tanto las necesidades del ayuntamiento como las de la población.</p>
      </>
    )},
    { title: "Programas de Empleo", content: (
      <>
        <p><strong>PROGRAMA EMPLE@JOVEN Y EMPLEA +25</strong></p><p style={{ display: 'block', marginTop: 20 }}><strong>Objeto:</strong> promover la creación de empleo mediante la contratación de personas desempleadas para la realización de proyectos de cooperación social y comunitaria desarrollados por los ayuntamientos.</p><p style={{ display: 'block', marginTop: 20 }}><strong>Personas beneficiarias:</strong> personas inscritas como demandantes de empleo no ocupadas y que reúnan alguno de los siguientes requisitos:</p>
        <ol>
          <li style={{ marginLeft: 20 }}>Tener una edad comprendida entre 18 y 29 años, ambos inclusive, y estar inscritas en el fichero del Sistema Nacional de Garantía Juvenil.</li>
          <li style={{ marginLeft: 20 }}>Tener 30 o más años de edad.</li>
        </ol>
        <p style={{ display: 'block', marginTop: 20 }}><strong>Entidad beneficiaria:</strong>  Ayuntamiento de Gibraleón</p><p style={{ display: 'block', marginTop: 20 }}><strong>Duración del proyecto para cuya realización se solicita la ayuda: </strong>12 meses.</p>
      </>
    )}
  ];

  const tabs1 = [
    { title: "Plan Local", content: (
      <>
       <p>Actualmente estamos trabajando en la elaboración de un Plan Local de Educación en el que se aglutinen todas las acciones educativas que se desarrollan en nuestro municipio. En este documento se recogerán objetivos y contenidos encaminados a mejorar la Educación en nuestra localidad. Una vez finalizado le daremos difusión entre todos los miembros de la Comunidad Educativa de Gibraleón.</p>
      </>
    ) },
    { title: "Escuela de Familias", content: (
      <>
        <p>La formación a las familias es indispensable. El área de Educación del Ayuntamiento de Gibraleón, en estrecha colaboración con las AMPAS del municipio, está retomando la formación a las familias olontenses. Con este objetivo, hemos repartido entre todos los escolares de entre 3 y 12 años un cuestionario para sus familias en los que se pretende recabar información previa sobre el interés de las familias ante la formación, la participación de las mismas en charlas y jornadas formativas y los temas que suscitan mayor interés entre este sector.</p>
      </>
    ) },
    { title: "Becas", content: (
      <>
        <p>Ayudas a cooperativas escolares: El Ayuntamiento de Gibraleón es sensible con las familias de nuestra localidad, especialmente con aquellas cuya situación económica no pasa por sus mejores momentos. Nos hemos sensibilizado con las familias que no pueden abonar la cuota de las cooperativas escolares y tenemos una partida destinada especialmente para estos casos. Previa información a las familias a través de los alumnos y alumnas de los tres centros de educación infantil y primaria de Gibraleón, los tutores/as legales de los menores solicitan informe de los Servicios Sociales, quienes acreditan la situación socioeconómica de cada unidad familiar.</p>
      </>
    ) }
  ];

  const handleTabClick = (index) => {
    setActiveTab(index);
  }

  const handleTabClick1 = (index) => {
    setActiveTab1(index);
  }

    return (
      <main className={styles.main}>
        <Areas/>

        <h1  className={merriweather.className}>Educación</h1>
        <div id="pestanas" className={styles.pestanas}>
          {tabs1.map((tab1, index) => (
            <a key={index} className={index === activeTab1 ? styles.active : ''} onClick={() => handleTabClick1(index)} onKeyDown={(e) => e.key === 'Enter' && handleTabClick1(index)} tabindex="0" id="contenido">
              {tab1.title}
            </a>
          ))}
        </div>

          {tabs1.map((tab1, index) => (
            <div key={index} className={styles.contenidoPestana} style={{ display: index === activeTab1 ? 'block' : 'none' }}>
              <p>{tab1.content}</p>
            </div>
          ))}

        <h1  className={merriweather.className} style={{ marginTop: 100 }}>Empleo</h1>
        <div id="pestanas" className={styles.pestanas}>
          {tabs.map((tab, index) => (
            <a key={index} className={index === activeTab ? styles.active : ''} onClick={() => handleTabClick(index)} onKeyDown={(e) => e.key === 'Enter' && handleTabClick(index)} tabindex="0">
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
          <NoticiasEducacion/>
        </section>
      </main>
    )
}