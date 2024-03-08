"use client"
import styles from './noticia.module.css'
import { Merriweather } from 'next/font/google'
import {Areas} from '../../../components/Areas'
import {NewSlider} from '../../../components/SliderNoticias'
import {UltimasNoticias} from '../../../components/UltimasNoticias'
import Link from "next/link"
import React, { useState, useEffect} from 'react';
import Image from 'next/image';
import { usePageContext } from './../../PageContext.js';

  const shareUrl = encodeURIComponent('https://tuwebsite.com/pagina-a-compartir');
  const title = "Echa un vistazo a esta gran página web que encontré!";
  const shareText = encodeURIComponent('Echa un vistazo a esta página!');
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`;
  const twitterShareUrl = `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`;
  const whatsappShareUrl = `https://wa.me/?text=${encodeURIComponent(`${title} ${shareUrl}`)}`;
  const emailSubject = encodeURIComponent('Mira esta página que encontré');
  const emailBody = encodeURIComponent(`Echa un vistazo a esta página: ${shareUrl}`);
  const emailShareUrl = `mailto:?subject=${emailSubject}&body=${emailBody}`;  
  
  const merriweather = Merriweather({
    weight: ["300", "400", "700", "900"],
    styles: ["normal", "italic"],
    subsets: ['latin']
  })
  

export default function Noticia ({ params }) {
  const { setTitle, setDescription, setKeywords } = usePageContext();

    useEffect(() => {
        setTitle('Noticias - Ayuntamiento de Gibraleón');
        setDescription('Web oficial del Excmo. Ayuntamiento');
        setKeywords('Gibraleon, actualidad, noticia');
    }, []);

    const {id} = params;
    const [noticias, setNoticias] = useState(null);
    const [fullscreenImageSrc, setFullscreenImageSrc] = useState("");
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    function formatearFecha(fechaString) {
      const opciones = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(fechaString).toLocaleDateString('es-ES', opciones);
    }

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_NOTICIAS_URL}`)
      .then(response => response.json())
      .then(data => {
        const noticias = data.data;
        const noticiaEncontrada = noticias.find(noticia => noticia.slug === id);

      if (noticiaEncontrada) {
        setNoticias([noticiaEncontrada]); 
        setIsLoading(false);
      } else {
        console.error('No se encontró ninguna noticia con ese slug');
        setIsLoading(false);
      }
    })
    .catch(error => {
      console.error('Error al llamar a la API:', error);
      setIsLoading(false);
    });
  }, [id]); 

  const openFullscreen = (imgSrc) => {
    setFullscreenImageSrc(imgSrc);
    setIsFullscreen(true);
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
  };

    return(
        <main className={styles.main}>
            <Areas/>

            <div className={styles.contenido}>
              <article className={styles.noticia}>  
                {!isLoading && noticias && noticias.length > 0 && (
                  <div>
                    <div  className={styles.listadoNoticias}>
                      <h1 className={merriweather.className}>{noticias[0].titulo}</h1>
                      <Link href="/noticias" className={styles.mas} id="contenido">{'Volver al listado de noticias >'}</Link>
                    </div>
                    <img src={`${process.env.NEXT_PUBLIC_IMAGENES_URL}/${noticias[0].imagen_principal}`} alt={`Imagen de ${noticias[0].titulo}`}></img> 
                    <div className={styles.datos}>
                        <p className={styles.categoria}>{noticias[0].categoria}</p>
                        <div className={styles.derecha}>
                          <p>{formatearFecha(noticias[0].fecha)}</p>
                          <a href={twitterShareUrl} target="_blank" rel="noopener noreferrer"><img style={{ height: '15px' }} src="/images/twitter.png" alt="Compratir por twitter"></img></a>
                          <a href={facebookShareUrl} target="_blank" rel="noopener noreferrer"><img style={{ height: '15px' }} src="/images/facebook.png" alt="Compratir por facebook"></img></a>
                          <a href={whatsappShareUrl} target="_blank" rel="noopener noreferrer"><img style={{ height: '15px' }} src="/images/whatsapp.png" alt="Compratir por whatsapp"></img></a>
                          <a href={emailShareUrl}><img style={{ width: '15px' }} src="/images/correo.png" alt="Compratir por correo electrónico"></img></a>
                        </div>
                    </div>    
                    <p className={styles.noticiaTexto}>{noticias[0].noticia}</p>  
                    <div className={styles.noticiaTexto} dangerouslySetInnerHTML={{ __html: noticias[0].noticia }}></div> 
                  </div>
                )}
              </article>

              {noticias && noticias[0] && (
                <section className={styles.pdfSection}>
                  {noticias[0].pdf && (
                    <a href={`${process.env.NEXT_PUBLIC_IMAGENES_URL}/${noticias[0].pdf}`} target="_blank" rel="noopener noreferrer">
                      {noticias[0].nombre_pdf}
                    </a>
                  )}
                  {noticias[0].pdf2 && (
                    <a href={`${process.env.NEXT_PUBLIC_IMAGENES_URL}/${noticias[0].pdf2}`} target="_blank" rel="noopener noreferrer">
                      {noticias[0].nombre_pdf2}
                    </a>
                  )}
                </section>
              )}
               
              <section className={styles.galeria}> 
                {noticias && noticias[0] && (
                  <>
                  {[noticias[0].imagen_principal, noticias[0].imagen2, noticias[0].imagen3].filter(imagen => imagen)
                      .map((imagen, index) => (
                          <div key={index} className={styles.imageContainer} onClick={() => openFullscreen(`${process.env.NEXT_PUBLIC_IMAGENES_URL}/${imagen}`)}  onKeyDown={(e) => e.key === 'Enter' && openFullscreen(`${process.env.NEXT_PUBLIC_IMAGENES_URL}/${imagen}`)}>
                            <Image src={`${process.env.NEXT_PUBLIC_IMAGENES_URL}/${imagen}`} alt={`Imagen ${index + 1}`} width={400} height={150} tabIndex="0"/>
                          </div>
                      ))
                    }
                  </>
                )}
              
              </section> 

              {isFullscreen && (
                <div className={styles.fullscreenOverlay} onClick={closeFullscreen}>
                  <img src={fullscreenImageSrc} alt="Imagen ampliada" className={styles.fullscreenImage} />
                  <button onClick={closeFullscreen} className={styles.closeButton}><i className="material-icons">close</i></button>
                </div>
              )}
                
              <section className={styles.ultimasNoticias}>
                <h2>Últimas noticias</h2>
                <NewSlider noticiaActualId={id} />
                <UltimasNoticias noticiaActualId={id} />
              </section>
            </div>
        </main>
    )
}