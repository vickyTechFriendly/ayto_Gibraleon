"use client"
import Link from "next/link"
import React, { useState, useEffect } from 'react';
import styles from './Areas.module.css'

export function Areas () {

  // Estado para controlar la visibilidad de los elementos del menú
    const [expanded, setExpanded] = useState(false);

    const menuItems = [
      { name: 'Cultura', icon: 'theater_comedy', href: '/cultura' },
      { name: 'Turismo', icon: 'local_see', href: '/turismo' },
      { name: 'Urbanismo', icon: 'location_city', href: '/urbanismo' },
      { name: 'Deportes', icon: 'directions_run', href: '/deportes' },
      { name: 'Salud', icon: 'favorite', href: '/salud' },
      { name: 'Mayores', icon: 'assist_walker', href: '/mayores' },
      { name: 'Festejos', icon: 'attractions', href: '/festejos' },
      { name: 'Juventud e Infancia', icon: 'escalator_warning', href: '/juventud' },
      { name: 'Economía y Hacienda', icon: 'euro_symbol', href: '/economia' },
      { name: 'Servicios Sociales', icon: 'handshake', href: '/serviciossociales' },
      { name: 'Agricultura y Medio Ambiente', icon: 'account_balance', href: '/agricultura' },
      { name: 'Educación y Empleo', icon: 'school', href: '/educacion' },
      { name: 'Participación Ciudadana', icon: 'diversity_3', href: '/participacion' },
      { name: 'Seguridad', icon: 'local_police', href: '/seguridad' },
    ];

    // Función para alternar la visibilidad
    const toggleMenu = () => {
      setExpanded(!expanded);
    };

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return(
        <div className={styles.areas}  id="menuList">
            <ul>
                {menuItems.map((item, index) => (
                      <li key={index} className={`${index < (windowWidth > 1024 ? 7 : (windowWidth < 761 ? 2 : 5)) || expanded ? styles.menuItem : styles.hiddenMenuItem} ${windowWidth < 760 ? styles.hiddenMenuItemResponsive : ''}`}>
                        <Link href={item.href}>
                            <i className="material-icons" aria-hidden="true">{item.icon}</i>
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
            <hr></hr>
            <button className={styles.mas} onClick={toggleMenu}>
            {expanded ? (
            <>
              <p className={styles.texto}>Ver menos <i className="material-icons" aria-hidden="true">expand_less</i></p>
            </>
            ) : (
            <>
             <p className={styles.texto}>Ver todas las áreas municipales<i className="material-icons" aria-hidden="true">expand_more</i></p>
            </>
            )}
            </button>
      </div>
    )
}