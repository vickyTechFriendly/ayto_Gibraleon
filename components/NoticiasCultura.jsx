"use client"
import Link from "next/link"
import styles from './NoticiasRelacionadas.module.css'
import { Merriweather } from 'next/font/google'
import { useState, useEffect, useRef } from 'react';


const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  styles: ["normal", "italic"],
  subsets: ['latin']
})


export function NoticiasCultura () {
  
  const [noticias, setNoticias] = useState([]);
  const noticiasDeCultura = noticias.filter(noticia => noticia.categoria === 'Cultura');
  const noticiasPorSlide = 3;
  const isLessThanThreeNews = noticiasDeCultura.length <= 3;
  const noticiasMovilStyle = isLessThanThreeNews ? { padding: '0px' } : {};
  const totalSlides = Math.ceil(noticiasDeCultura.length / noticiasPorSlide);
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_NOTICIAS_URL}`)
      .then(response => response.json())
      .then(data => {
        const noticiasOrdenadas = ordenarNoticiasPorFecha(data.data);
        setNoticias(noticiasOrdenadas);
        setIsLoading(false);
  
        const categorias = new Set();
        data.data.forEach(noticia => {
          if (noticia.categoria) {
            categorias.add(noticia.categoria);
          }
        });
        setCategoriasUnicas(Array.from(categorias));
      })
      .catch(error => {
        console.error('Error al llamar a la API:', error);
        setIsLoading(false);
      });
  }, []);

  function ordenarNoticiasPorFecha(noticias) {
    return noticias.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
  }

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -sliderRef.current.offsetWidth, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: sliderRef.current.offsetWidth, behavior: 'smooth' });
    }
  }; 

  const handleScroll = () => {
    if (sliderRef.current) {
      const scrollLeft = sliderRef.current.scrollLeft; 
      const slideWidth = sliderRef.current.offsetWidth; 
      
      const newActiveSlide = Math.round(scrollLeft / slideWidth);
      setActiveSlide(newActiveSlide);
    }
  };

  /* const handleDotClick = (index) => {
    const slideWidth = sliderRef.current.offsetWidth;
    const scrollTo = index * slideWidth; 

    sliderRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    setActiveSlide(index); 
  }; */

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

  function formatearFecha(fechaString) {
    const opciones = { /* year: 'numeric', */ month: 'long', day: 'numeric' };
    return new Date(fechaString).toLocaleDateString('es-ES', opciones);
  }

  
  return(
    <section className={styles.noticiasMovil} style={noticiasMovilStyle}>

      {noticiasDeCultura.length > noticiasPorSlide && (
        <button className={styles.sliderBtnPrev} onClick={scrollLeft} aria-label="Noticia anterior" tabindex="-1">&lt;</button>
      )}

      <div className={styles.sliderContainer} ref={sliderRef}>
        {noticiasDeCultura.map((noticia, index) => (
          <Link key={index} href={`/noticias/${noticia.slug}`} className={styles.noticia}>
            <img src={`${process.env.NEXT_PUBLIC_IMAGENES_URL}/${noticia.imagen_principal}`} alt="" /*  alt={`Imagen de ${noticia.titulo}`} */></img>
            <div className={styles.informacion}>
              <div className={styles.datos}aria-hidden="true">
                <p className={styles.categoria}>{noticia.categoria}</p>
                <span>&bull;</span>
                <p  className={styles.fecha}>{formatearFecha(noticia.fecha)}</p>
              </div>
              <h3 className={merriweather.className}>{noticia.titulo.length > 40 ? noticia.titulo.slice(0, 40) + '...' : noticia.titulo}</h3>
            </div>
          </Link>
        ))}
      </div>

      {noticiasDeCultura.length > noticiasPorSlide && (
        <button className={styles.sliderBtnNext} onClick={scrollRight} aria-label="Noticia siguiente" tabindex="-1">&gt;</button>
      )}

      {/* {noticiasDeCultura.length > noticiasPorSlide && (
      <div className={styles.sliderIndicators}>
        {Array.from({ length: totalSlides }).map((_, index) => (
          <span
            key={index}
            className={`${styles.sliderDot} ${index === activeSlide ? styles.sliderDotActive : ''}`}
            onClick={() => handleDotClick(index)} 
          ></span>
        ))}
      </div>
      )} */}
    </section>
  )
}