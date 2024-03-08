"use client"
import Link from "next/link"
import styles from './SliderNoticias.module.css'
import { Merriweather } from 'next/font/google'
import { useState, useEffect, useRef } from 'react';


const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  styles: ["normal", "italic"],
  subsets: ['latin']
})

export function NewSlider ({ noticiaActualId }) {

  function formatearFecha(fechaString) {
    const opciones = { month: 'long', day: 'numeric' };
    return new Date(fechaString).toLocaleDateString('es-ES', opciones);
  }

  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef(null);
  const [noticias, setNoticias] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleScroll = () => {
    if (sliderRef.current) {
      const scrollLeft = sliderRef.current.scrollLeft;
      const viewportWidth = sliderRef.current.offsetWidth;
      const estimatedSlideWidth = viewportWidth * 0.85 + 20;
      const newActiveSlide = Math.round(scrollLeft / estimatedSlideWidth);

      setActiveSlide(newActiveSlide);
    }
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (slider) {
        slider.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_NOTICIAS_URL}`)
      .then(response => response.json())
      .then(data => {
        const noticiasOrdenadas = ordenarNoticiasPorFecha(data.data);
        setNoticias(noticiasOrdenadas);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error al llamar a la API:', error);
        setIsLoading(false);
      });
  }, []);

  function ordenarNoticiasPorFecha(noticias) {
    return noticias.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
  }

  if (isLoading) return <div>Cargando noticias...</div>;
  if (!noticias) return <div>No hay noticias disponibles</div>;

  return(
    <section className={styles.noticiasMovil}>

      <div className={styles.sliderContainer} ref={sliderRef}>
         
      {noticias
        .filter(noticia => noticia.slug !== noticiaActualId) 
        .slice(0, 3)
        .map((noticia, index) => (
        <Link href={`/noticias/${noticia.slug}`} key={index} className={styles.noticia}>
          <img src={`${process.env.NEXT_PUBLIC_IMAGENES_URL}/${noticia.imagen_principal}`} alt=""></img>
          <div className={styles.informacion}>
            <div className={styles.datos} aria-hidden="true">
              <p className={styles.categoria}>{noticia.categoria}</p>
              <span>&bull;</span>
              <p  className={styles.fecha}>{formatearFecha(noticia.fecha)}</p>
            </div>
            <h2 className={merriweather.className}>{noticia.titulo.length > 45 ? noticia.titulo.slice(0, 45) + '...' : noticia.titulo}</h2>
          </div>
        </Link>
        ))}
      </div>
    </section>
)
}