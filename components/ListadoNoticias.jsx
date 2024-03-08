"use client"
  import styles from './ListadoNoticias.module.css'
  import Link from "next/link"
  import { Merriweather } from 'next/font/google'
  import React, { useState, useEffect } from 'react';
  
  const merriweather = Merriweather({
    weight: ["300", "400", "700", "900"],
    styles: ["normal", "italic"],
    subsets: ['latin']
  })
  

export function ListadoNoticias () {

  const [categoriasUnicas, setCategoriasUnicas] = useState(new Set());
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('todas');
  const [noticias, setNoticias] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [cantidadMostrada, setCantidadMostrada] = useState(9);
  const [esPantallaPequena, setEsPantallaPequena] = useState(window.innerWidth < 1341);

  function formatearFecha(fechaString) {
    const opciones = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(fechaString).toLocaleDateString('es-ES', opciones);
  }

  useEffect(() => {
    const handleResize = () => {
      setEsPantallaPequena(window.innerWidth < 1341);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_NOTICIAS_URL}`)
      .then(response => response.json())
      .then(data => {
        const noticiasOrdenadas = ordenarNoticiasPorFecha(data.data);
        setNoticias(noticiasOrdenadas);
        setIsLoading(false);
  
        const categorias = new Set();
        noticiasOrdenadas.forEach(noticia => {
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

  const cambiarCategoriaSeleccionada = (categoria) => {
    setCategoriaSeleccionada(categoria);
  };

  const noticiasFiltradas = categoriaSeleccionada === 'todas' 
    ? noticias 
    : noticias.filter(noticia => noticia.categoria === categoriaSeleccionada);

  useEffect(() => {
    const cargarMasNoticias = () => {
      if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
        setCantidadMostrada(cantidadMostrada => cantidadMostrada + 9);
      }
    };

    window.addEventListener('scroll', cargarMasNoticias);
    return () => window.removeEventListener('scroll', cargarMasNoticias);
  }, []);

  const obtenerTituloCortado = titulo => {
    return esPantallaPequena && titulo.length > 50 ? titulo.slice(0, 50) + '...' : titulo;
  };

  if (isLoading) return <div>Cargando noticias...</div>;
  if (!noticiasFiltradas) return <div>No hay noticias disponibles</div>;


    return(
        <>
        <div className={styles.categorias}>
          <ul>
            <li key="todas" onClick={() => cambiarCategoriaSeleccionada('todas')} onKeyDown={(e) => e.key === 'Enter' && cambiarCategoriaSeleccionada('todas')} className={categoriaSeleccionada === 'todas' ? styles.categoriaSeleccionada : ''} tabindex="0" id="contenido">Todas</li>
          </ul>

          {categoriasUnicas.map((categoria, index) => (
            <ul>
              <li key={index}  onClick={() => cambiarCategoriaSeleccionada(categoria)} onKeyDown={(e) => e.key === 'Enter' && cambiarCategoriaSeleccionada(categoria)} className={categoriaSeleccionada === categoria ? styles.categoriaSeleccionada : ''} tabindex="0">{categoria}</li>
            </ul>
          ))}
        </div>

        <div className={styles.listadoNoticias}>
          {noticiasFiltradas && noticiasFiltradas.slice(0, cantidadMostrada).map((noticia, index) => (
            <Link href={`/noticias/${noticia.slug}`} key={index} className={styles.noticia}>
              <img src={`${process.env.NEXT_PUBLIC_IMAGENES_URL}/${noticia.imagen_principal}`} alt=""></img>
              <div className={styles.informacion}>
                <div className={styles.datos} aria-hidden="true">
                  <p className={styles.categoria}>{noticia.categoria}</p>
                  <span>&bull;</span>
                  <p className={styles.fecha}>{formatearFecha(noticia.fecha)}</p>
                </div>
                <h2 className={`${merriweather.className} ${esPantallaPequena ? 'titulo-cortado' : ''}`}>
                  {obtenerTituloCortado(noticia.titulo)}
                </h2>
                <p className={styles.descripcion}>{noticia.breve_descripcion}</p>
              </div>
            </Link>
            ))}
        </div>
        </>
    )
}