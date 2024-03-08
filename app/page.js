"use client"
import styles from './page.module.css'
import Link from "next/link"
import { Merriweather } from 'next/font/google'
import {Mas} from '../components/VerMas'
import {NewSlider} from '../components/SliderNoticias'
import { useEffect, useState } from 'react'; 
import { usePageContext } from './PageContext.js';


const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  styles: ["normal", "italic"],
  subsets: ['latin']
})


export default function Home() {
  const { setTitle, setDescription, setKeywords } = usePageContext();

    useEffect(() => {
        setTitle('Ayuntamiento de Gibraleón');
        setDescription('Web oficial del Excmo. Ayuntamiento');
        setKeywords('Gibraleon, ayuntamiento');
    }, []);


  function formatearFecha(fechaString) {
    const opciones = { /* year: 'numeric', */ month: 'long', day: 'numeric' };
    return new Date(fechaString).toLocaleDateString('es-ES', opciones);
  }

  const [noticias, setNoticias] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

 /*  if (isLoading) return <div>Cargando noticias...</div>; */
  if (!noticias) return <div>No hay noticias disponibles</div>;

  return (
    <main className={styles.main}>

      <ul className={styles.menuSecundario}>
        <li><Link href="/economia"><i className="material-icons" aria-hidden="true">euro_symbol</i>Economía y Hacienda</Link></li>
        <li><Link href="/serviciossociales"><i className="material-icons" aria-hidden="true">handshake</i>Servicios Sociales</Link></li>
        <li><Link href="/urbanismo"><i className="material-icons" aria-hidden="true">location_city</i>Urbanismo</Link></li>
        <li><Link href="/agricultura"><i className="material-icons" aria-hidden="true">account_balance</i>Agricultura y Medio Ambiente</Link></li>
        <li><Link href="/salud"><i className="material-icons" aria-hidden="true">favorite</i>Salud</Link></li>
        <li><Link href="/educacion"><i className="material-icons" aria-hidden="true">school</i>Educación y Empleo</Link></li>
        <li><Link href="/participacion"><i className="material-icons" aria-hidden="true">diversity_3</i>Participación Ciudadana</Link></li>
        <li><Link href="/juventud"><i className="material-icons" aria-hidden="true">escalator_warning</i>Juventud e Infancia</Link></li>
        <li><Link href="/mayores"><i className="material-icons" aria-hidden="true">assist_walker</i>Mayores</Link></li>
        <li><Link href="/cultura"><i className="material-icons" aria-hidden="true">theater_comedy</i>Cultura</Link></li>
        <li><Link href="/turismo"><i className="material-icons" aria-hidden="true">local_see</i>Turismo</Link></li>
        <li><Link href="/deportes"><i className="material-icons" aria-hidden="true">directions_run</i>Deportes</Link></li>
        <li><Link href="/festejos"><i className="material-icons" aria-hidden="true">attractions</i>Festejos</Link></li>
        <li><Link href="/seguridad"><i className="material-icons" aria-hidden="true">local_police</i>Seguridad</Link></li>
      </ul>

      <Mas/>
     

      <div className={`${styles.flex} ${styles.tituloNoticia}`}>
        <h1 className={merriweather.className}>Noticias</h1>
        <Link href="/noticias" className={styles.mas} id="contenido">{'Ver más >'}</Link>
      </div>

      {/* NOTICIAS PARA EL ESCRITORIO */}
      <section className={styles.noticias}>
        {noticias.length > 0 && (
          <Link href={`/noticias/${noticias[0].slug}`} className={`${styles.noticia} ${styles.noticiaGrande}`}>
            <img src={`${process.env.NEXT_PUBLIC_IMAGENES_URL}/${noticias[0].imagen_principal}`} alt=""></img>
            <div className={`${styles.informacion} ${styles.informacionGrande}`}>
              <div className={styles.datos} aria-hidden="true">
                <p className={styles.categoria}>{noticias[0].categoria}</p>
                <span>&bull;</span>
                <p  className={styles.fecha}>{formatearFecha(noticias[0].fecha)}</p>
              </div>
              <h2 className={merriweather.className}>{noticias[0].titulo}</h2>
              <p  className={styles.descripcion}>{noticias[0].descripcion}</p>
            </div>
          </Link>
        )}

        <div className={styles.noticiasPequenas}>
          {noticias.slice(1, 3).map((noticia, index) => (
            <Link href={`/noticias/${noticia.slug}`} key={index}  className={`${styles.noticia} ${styles.noticiaPequena}`}>
              <img src={`${process.env.NEXT_PUBLIC_IMAGENES_URL}/${noticia.imagen_principal}`} alt=""></img>
              <div className={`${styles.informacion} ${styles.informacionPequena}`}>
                <div className={styles.datos} aria-hidden="true">
                  <p className={styles.categoria}>{noticia.categoria}</p>
                  <span>&bull;</span>
                  <p  className={styles.fecha}>{formatearFecha(noticia.fecha)}</p>
                </div>
                <h2 className={merriweather.className}>{noticia.titulo.length > 50 ? noticia.titulo.slice(0, 50) + '...' : noticia.titulo}</h2>
              </div>
            </Link>
          ))}
        </div>
      </section>
     <NewSlider/>

     <Link href="/noticias" className={styles.masMovil}><i className="material-icons" aria-hidden="true">feed</i>Más noticias</Link>
      

  {/*     <section className={styles.actividades}>
        <div className={styles.flex}>
          <h1 className={merriweather.className}>Agenda y actividades</h1>
          <Link href="#" className={styles.mas} style={{ color: 'white' }}>{'Ver más >'}</Link>
        </div>
        
        <div className={styles.eventos}>
          <Link href="#" className={styles.evento}>
            <img src="https://www.gibraleon.com/web/wp-content/uploads/2023/09/II-feria-cervantina-2023-1-768x1086.jpg"></img>
            <div className={styles.bloqueMovil}>
            <div className={styles.datos}>
              <p className={styles.categoria}>Cultura</p>
              <span>&bull;</span>
              <p  className={styles.fecha}>13/09/2023</p>
            </div>
            <h2 className={merriweather.className}>II Feria Cervantina de Gibraleón</h2>
            </div>
          </Link>

          <Link href="#" className={styles.evento}>
            <img src="https://www.gibraleon.com/web/wp-content/uploads/2023/07/CARTEL-CERTAMEN-NACIONAL-DE-PINTURA-2023-1140x500.jpg"></img>
            <div className={styles.bloqueMovil}>
            <div className={styles.datos}>
              <p className={styles.categoria}>Cultura</p>
              <span>&bull;</span>
              <p  className={styles.fecha}>7/07/2023</p>
            </div>
            <h2 className={merriweather.className}>LXXII Certamen Nacional de pintura de Gibraleón</h2>
            </div>
          </Link>

          <Link href="#" className={styles.evento}>
            <img src="https://www.gibraleon.com/web/wp-content/uploads/2022/11/certamen-nacional-de-fotografia-2022-750x550.jpg"></img>
            <div className={styles.bloqueMovil}>
            <div className={styles.datos}>
              <p className={styles.categoria}>Cultura</p>
              <span>&bull;</span>
              <p  className={styles.fecha}>25/09/2023</p>
            </div>
            <h2 className={merriweather.className}>XXXIV Certamen Nacional de Fotografía y IV Certamen "Visiones de Olontia"</h2>
            </div>
          </Link>
        </div>

        <Link href="#" className={styles.masMovil}><i className="material-icons">calendar_month</i>Más eventos</Link>
      </section> */}

      <section className={styles.saludo}>
          <div className={styles.bienvenida}>
            <h1 className={merriweather.className}>¡Bienvenido/a a la web de Gibraleón!</h1>
            <p>Como alcaldesa, me emociona darte la bienvenida a nuestra web, una ventana digital que nos conecta y une. Aquí podrás mantenerte al día de la actualidad de nuestro municipio y realizar todo tipo de gestiones.</p>
            <p>Te ánimo a que explores cada rincón, ¡siéntete en casa!</p>
            <p>Un afectuoso saludo.</p>
          </div>
          <img src="/images/alcaldesa.png" alt="Alcaldesa de Gibraleón"></img>
      </section>

    </main>
  )
}