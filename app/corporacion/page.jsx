"use client"
import styles from '../pages.module.css'
import { Merriweather } from 'next/font/google'
import {Areas} from '../../components/Areas'
import { useState, useEffect} from 'react';
import { usePageContext } from './../PageContext.js';

const merriweather = Merriweather({
    weight: ["300", "400", "700", "900"],
    styles: ["normal", "italic"],
    subsets: ['latin']
})


export default function Corporacion() {

  const { setTitle, setDescription, setKeywords } = usePageContext();

    useEffect(() => {
        setTitle('Corporación municipal - Ayuntamiento de Gibraleón');
        setDescription('Web oficial del Excmo. Ayuntamiento');
        setKeywords('Gibraleon, ayuntamiento, corporacion municipal');
    }, []);

  const [personas, setPersonas] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    fetch('http://192.168.1.13:8055/items/Corporacion_municipal')
      .then(response => response.json())
      .then(data => {
        setPersonas(data.data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error al llamar a la API:', error);
        setIsLoading(false);
      });
  }, []);
  
  if (isLoading) return <div>Cargando corporación municipal...</div>;


    return (
      <main className={styles.main}>
        <Areas/>

        <h1 className={merriweather.className}>Corporación municipal</h1>
        <div className={styles.corporacion}>
          {personas && personas.map((persona, index) => (
            <div key={index} className={styles.trabajador}>
              <img src={`${process.env.NEXT_PUBLIC_IMAGENES_URL}/${persona.foto}`} alt={`Imagen de ${persona.Nombre_y_apellidos}`}/>
              <h2 className={styles.trabajador}>{persona.puesto}</h2>
              <p>{persona.Nombre_y_apellidos}</p>
              <p>{persona.partido_politico}</p>
            </div>
          ))}
        </div>
      </main>
    )
}