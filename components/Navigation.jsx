"use client"
import Link from "next/link"
import styles from './Navigation.module.css'
import { useState } from 'react';

export function Navigation () {

const [isMenuOpen, setIsMenuOpen] = useState(false);
const [isSubMenuOpen, setIsSubMenuOpen] = useState({});

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };



  const handleParentClick = (menuName, e) => {
    e.preventDefault();
    e.stopPropagation(); 
    setIsSubMenuOpen(prevState => ({
      ...prevState,
      [menuName]: !prevState[menuName]
    }));
  };


    return(
        <header className={styles.header}>

            <div className={styles.flex}>
                <Link href="/"><img src="/images/logo 2.png" className={styles.logo} alt="Inicio"></img></Link>
                <Link href="#contenido" className={styles.skipLink}>Saltar al contenido principal</Link>
                <div className={styles.redes}> 
                    <a href="https://www.facebook.com/ayuntamiento.gibraleon?fref=ts" target="_blank"><img src="/images/facebook_circulo.png" alt="Facebook de Gibraleón"></img></a>
                    <a href="https://www.instagram.com/ayto_gibraleon/" target="_blank"><img src="/images/instagram.png" alt="Instagram de Gibraleón"></img></a>
                </div>  
            </div>

            {/* menu Escritorio */}
            <nav>
                <ul className={styles.navigationEscritorio}>
                    <li className={`${styles.paddingMenuEscritorio} ${styles.ayto}`}>
                        <Link href="#">Mi ayuntamiento</Link>
                        <ul className={styles.submenuEscritorio}>
                            <li><Link href="/saludo">Saludo de la alcaldesa</Link></li>
                            <li><Link href="/corporacion">Corporación municipal</Link></li>
                        </ul>
                    </li>
                    <li  className={styles.paddingMenuEscritorio}>
                        <Link href="/noticias">Actualidad</Link>
                    </li> 
                    <li  className={styles.paddingMenuEscritorio}>
                        <Link href="/consumo">Consumo</Link>
                    </li>
                    <li  className={styles.paddingMenuEscritorio}>
                        <Link href="https://gibraleon.sedelectronica.es/info.0" target="_blank">Atención ciudadana</Link>
                    </li> 
                    <li  className={styles.paddingMenuEscritorio}>
                        <Link href="/contacto">Contacto</Link>
                    </li>
                    <li  className={`${styles.paddingMenuEscritorio} ${styles.sede}`}>
                        <Link href="https://gibraleon.sedelectronica.es/info.0" target="_blank">Sede electrónica</Link>
                    </li>
                </ul>
            </nav> 

            {/* menú movil */}
            <div className={styles.menuIcon} onClick={toggleMenu} onKeyDown={(e) => {if (e.key === 'Enter') {toggleMenu();}}} tabindex="0" role="button"><i className="material-icons" aria-label="Menú">{isMenuOpen ? 'close' : 'menu'} {/* Cambia el icono basándote en isMenuOpen */}</i>
            <nav className={`${styles.navigation} ${isMenuOpen ? styles.menuOpenMargin : ''}`}>
                <ul className={` ${isMenuOpen ? styles.menuActive : styles.menuNoActive}`}> 
                    <li className={styles.paddingMenu}>
                        <div className={styles.flex} onClick={(e) => handleParentClick('ayuntamiento', e)} onKeyDown={(e) => e.key === 'Enter' && handleParentClick('ayuntamiento', e)} tabindex="0" role="button">
                            <Link className={styles.opcionPadre} href="#" tabindex="-1"><i className="material-icons" aria-hidden="true">account_balance</i>Mi ayuntamiento</Link>
                            <i className="material-icons" style={{ color: 'white', transform: isSubMenuOpen['ayuntamiento'] ? 'rotate(180deg)' : 'rotate(0deg)' }} tabindex="-1" aria-label="Ver submenú">expand_more</i>
                        </div>
                        <ul className={`${styles.submenu}  ${isSubMenuOpen['ayuntamiento'] ? styles.submenuActive : ''}`}>
                            <li><Link href="/saludo">Saluda al alcalde</Link></li>
                            <li><Link href="/corporacion">Corporación municipal</Link></li>
                        </ul>
                    </li>
                    <li className={styles.paddingMenu}>
                        <Link className={styles.opcionPadre} href="/noticias"><i className="material-icons" aria-hidden="true">feed</i>Actualidad</Link>
                    </li> 
                    <li className={styles.paddingMenu}>
                        <Link className={styles.opcionPadre} href="/consumo"><i className="material-icons" aria-hidden="true">shopping_bag</i>Consumo</Link>
                    </li>
                    <li className={styles.paddingMenu}>
                        <Link className={styles.opcionPadre} href="https://gibraleon.sedelectronica.es/info.0" target="_blank"><i className="material-icons" aria-hidden="true">groups</i>Atención ciudadana</Link>
                    </li>
                    <li className={styles.paddingMenu}>
                        <Link className={styles.opcionPadre} href="/contacto"><i className="material-icons" aria-hidden="true">call</i>Contacto</Link>
                    </li>
                    <li className={`${styles.paddingMenu} ${styles.sede}`}>
                        <Link className={styles.opcionPadre} href="https://gibraleon.sedelectronica.es/info.0" target="_blank"><i className="material-icons" aria-hidden="true">alternate_email</i>Sede electrónica</Link>
                    </li>
                    <div className={styles.redes}>
                        <a href="https://www.facebook.com/ayuntamiento.gibraleon?fref=ts" target="_blank"><img src="/images/facebook_circulo.png" alt="Facebook de Gibraleón"></img></a>
                        <a href="https://www.instagram.com/ayto_gibraleon/" target="_blank"><img src="/images/instagram.png" alt="Instagram de Gibraleón"></img></a>
                    </div> 
                </ul>
            </nav>
            </div>  
        </header>
    )
  }