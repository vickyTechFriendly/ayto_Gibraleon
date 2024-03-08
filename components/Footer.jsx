import Link from "next/link"
import styles from './Footer.module.css'


export function Footer () {

    return(
        <footer className={styles.footer}>
            <div className={styles.redes}> 
                <a href="https://www.facebook.com/ayuntamiento.gibraleon?fref=ts" target="_blank"><img src="/images/facebook_bn.png" alt="Facebook de Gibraleón"></img></a>
                <a href="https://www.instagram.com/ayto_gibraleon/" target="_blank"><img src="/images/instagram_bn.png" alt="Instagram de Gibraleón"></img></a>
            </div>      
            <div className={styles.enlaces}>
                <a href="/accesibilidad">Accesibilidad</a>
                <a href="/aviso">Aviso legal</a>
                <a href="/privacidad">Política de privacidad</a>
                <a href="mapaweb">Mapa web</a>         
            </div>
            <div className={styles.ayto}>
            <img src="/images/logo footer.png" alt="Logotipo Gibraleón"></img>     
            <p className={styles.descripcion}>Ayuntamiento de Gibraleón. Plaza España, 1 <br></br>21500 Gibraleón, Huelva</p>
            </div>
        </footer>
    )
  }