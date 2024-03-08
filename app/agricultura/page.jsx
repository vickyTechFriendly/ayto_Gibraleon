"use client"
import styles from '../pages.module.css'
import { Merriweather } from 'next/font/google'
import {Areas} from '../../components/Areas'
import {NoticiasMedioAmbiente} from '../../components/NoticiasMedioAmbiente'
import React, { useState, useEffect } from 'react';
import { usePageContext } from './../PageContext.js';

const merriweather = Merriweather({
    weight: ["300", "400", "700", "900"],
    styles: ["normal", "italic"],
    subsets: ['latin']
})

export default function Agricultura() {
  const { setTitle, setDescription, setKeywords } = usePageContext();

    useEffect(() => {
        setTitle('Agricultura y medio ambiente - Ayuntamiento de Gibraleón');
        setDescription('Web oficial del Excmo. Ayuntamiento');
        setKeywords('Gibraleon, agricultura, medio ambiente, Presa de Alcolea');
    }, []);

  const [activeTab, setActiveTab] = useState(0);
  const [activeTab1, setActiveTab1] = useState(0);

  const tabs = [
    { title: "Presa de Alcolea", content: (
      <>
       <p>La presa de Alcolea  se ha convertido en una auténtica revolución para las comarcas del Andévalo, la Campiña y gran parte de la provincia de Huelva”, contando con una inversión de 63 millones de euros, financiados al 50 por ciento entre el Estado y la Junta de Andalucía, y supondrá una capacidad de más de 246 hectómetros cúbicos.</p><p style={{ display: 'block', marginTop: 20 }}>Esta construcción responderá a la necesidad de que los regadíos lleguen a una zona  como es la campiña onubense y parte del Condado.</p><p style={{ display: 'block', marginTop: 20 }}>Los recursos hídricos regulados por el embalse, de 246 hectómetros cúbicos de capacidad, contribuirán con un volumen adicional de 135 anuales al sistema hidráulico Andévalo- Chanza-Piedras-Alcolea.</p><p style={{ display: 'block', marginTop: 20 }}>En relación a las características técnicas, la presa es de gravedad con planta curva de hormigón in situ y de aliviadero fijo, con el nivel máximo normal a la cota 56, el vértice a la cota 61 y la coronación a la 62.</p><p style={{ display: 'block', marginTop: 20 }}>Las obras comenzaron el 15 de febrero de 2015 y está prevista su finalización para la primavera de 2017.</p><strong style={{ display: 'block', marginTop: 20 }}>Junta Central de Usuarios de Alcolea y la Comunidad de Usuarios de Aguas Subterráneas</strong><p style={{ display: 'block', marginTop: 20 }}>Con el fin de congregar a todos los organismos, instituciones  y agricultores que se verán beneficiados por esta nueva construcción, se ha constituido la Junta Central de Usuarios de Alcolea y la Comunidad de Usuarios de Aguas Subterráneas de dicha masa.</p><p style={{ display: 'block', marginTop: 20 }}>Se trataba de cumplir el objetivo de adquirir personalidad jurídica suficiente para concertar los compromisos adquiridos sobre uso de agua de Alcolea en nombre de los 1.815 demandantes de agua suscritos desde 1995, entre 2000 y 2005, y de trabajar en la ordenación de pozos a través de una Comunidad de Usuarios Acuífero Masa Niebla, partiendo del listado con más de 315 pozos en tramitación que se facilita y que se debe extender a todos los abiertos en el acuífero con concesión, que han de detectarse y documentarse ante al Organismo de Cuenca Tinto Odiel Piedras.</p><p style={{ display: 'block', marginTop: 20 }}>El objetivo es constituirse e inscribirse como comunidad de usuarios, que los represente para la participación en el marco de la cooperación, y participar activamente en desarrollo y ejecución del Convenio de Regulación (18 de mayo 2007) para ejecución y explotación de las actuaciones de la Presa de Alcolea y del Canal de Trigueros. Concierta la cofinanciación de las obras el 50% por el Magrama y el otro 50% mediante créditos que amortiza la Junta de Andalucía y repercutirá en el canon del agua que se aplicará al agua consumida medida por contador en cada parcela.</p><p style={{ display: 'block', marginTop: 20 }}>Las reservas de Alcolea, con 246 hm3, laminará el agua del Odiel, con 129 hm3/año de regulación anual en la UDA (Alcolea-Andévalo), permitiendo regar hasta 23.700 has, y la regularización de pozos del Acuífero.</p>
      </>
    ) },
    { title: "Oficina Local de Regadíos", content: (
      <>
        <p>El Ayuntamiento de Gibraleón y la Junta de Usuarios de Agua de Alcolea JDU-Alcoleahan puesto en marcha la Oficina Local de Regadíos con el objetivo de informar y dar respuesta a las peticiones de regadío por parte de los agricultores de la zona.</p><p style={{ display: 'block', marginTop: 20 }}>A través de esta nueva Oficina Local de Regadíos de Alcolea y Canal de Trigueros, que está ubicada en las dependencias del ayuntamiento de Gibraleón se pretende canalizar todas las informaciones acerca de la puesta en marcha del regadío en el municipio olontense y se llevarán a trámite las nuevas suscripciones de los agricultores para solicitar estos regadíos.</p>
      </>
    ) }
  ];

  const tabs1 = [
    { title: "Retirada excrementos caninos", content: (
      <>
          <strong>Concienciación ciudadana para la retirada de excrementos caninos de la vía pública</strong><p style={{ display: 'block', marginTop: 20 }}>La finalidad principal es sensibilizar a los dueños de mascotas sobre su obligación de retirar los excrementos que éstas depositan en la vía pública. Debemos hacer conscientes a los propietarios de animales de compañía que la no retirada de sus excrementos es un grave problema que deben solucionar, ya que aparte de ensuciar el espacio público, la materia fecal que se deja en la vía pública es un elemento contaminante el cual supone un riesgo para la salud de todos los ciudadanos.</p>
      </>
    ) },
    { title: "Control de plagas", content: (
      <>
        <p>El Excmo. Ayuntamiento de Gibraleón cuenta con un Convenio de Colaboración con la Excma. Diputación Provincial de Huelva para la prestación del servicio desratización, desinfección y desinsectación y Recogida y tratamiento de animales vagabundos.</p><p style={{ display: 'block', marginTop: 20 }}>Durante el transcurso de todo el año llevamos a cabo una campaña de desratización, desinfección y desinsectación en la red de alcantarillado para mejorar el servicio prestado a los ciudadanos en lo referente al control de plagas urbanas, así mismo, para casos concretos en zonas o momentos puntuales pueden acudir al Servicio de Atención al Ciudadano y dar conocimiento del mismo para así poder solventarlos.</p>
      </>
    ) },
    { title: "Animales peligrosos", content: (
      <>
       <p>Si usted es propietario de un animal potencialmente peligroso, es su obligación tener un seguro de responsabilidad civil; así como debe tener a dicho animal inscrito en el Registro Municipal de Animales Potencialmente Peligrosos. Hay que conocer estas razas y tener la documentación en regla.</p>
      </>
    ) },
    { title: "Prevención de incendios", content: (
      <>
       <strong>Prevención de incendios forestales y normas básicas de actuación</strong><ul style={{ display: 'block', marginTop: 20 }}>
        <li>No dejen encendidas fogatas o brasas en el bosque, no arrojar al suelo cerillas, colillas, cigarros u objetos en combustión; ni tampoco papeles, plásticos, vidrios o cualquier tipo de residuo o material combustible susceptible de originar incendio.</li>
        <li>En suelo forestal no usar máquinas o herramientas que provoquen chispas.</li>
        <li>No eliminar restos de basura ni de podas acopiándolos cerca de viviendas ni quemándolos.</li>
        <li>En época de alto riesgo de incendios, no encender fuego en el campo.</li>
        <li>No intervengan ni actúen por cuenta propia para combatir un incendio forestal, alerten a las autoridades municipales, locales, o avisad al 112 (teléfono de emergencia), o al 062 (teléfono Guardia Civil).</li>

       </ul>
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

        <h1 className={merriweather.className}>Agricultura</h1>
        <div id="pestanas" className={styles.pestanas}>
          {tabs.map((tab, index) => (
            <a key={index} className={index === activeTab ? styles.active : ''} onClick={() => handleTabClick(index)} onKeyDown={(e) => e.key === 'Enter' && handleTabClick(index)} tabindex="0"  id="contenido">
              {tab.title}
            </a>
          ))}
        </div>

        {tabs.map((tab, index) => (
          <div key={index} className={styles.contenidoPestana} style={{ display: index === activeTab ? 'block' : 'none' }}>
            <p>{tab.content}</p>
          </div>
        ))}

        <h1  className={merriweather.className} style={{ marginTop: 100 }}>Medio Ambiente</h1>
        <div id="pestanas" className={styles.pestanas}>
          {tabs1.map((tab1, index) => (
            <a key={index} className={index === activeTab1 ? styles.active : ''} onClick={() => handleTabClick1(index)} onKeyDown={(e) => e.key === 'Enter' && handleTabClick1(index)} tabindex="0">
              {tab1.title}
            </a>
          ))}
        </div>

          {tabs1.map((tab1, index) => (
            <div key={index} className={styles.contenidoPestana} style={{ display: index === activeTab1 ? 'block' : 'none' }}>
              <p>{tab1.content}</p>
            </div>
          ))}

        <section>
          <h2 className={styles.noticiasRelacionadas}>Últimas noticias relacionadas</h2>
          <NoticiasMedioAmbiente/>
        </section>
      </main>
    )
}