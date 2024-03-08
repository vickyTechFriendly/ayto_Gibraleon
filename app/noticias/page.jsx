import styles from '../pages.module.css'
import { Merriweather } from 'next/font/google'
import {Areas} from '../../components/Areas'
import {ListadoNoticias} from '../../components/ListadoNoticias'

export const metadata = { title: 'Noticias - Ayuntamiento'}

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  styles: ["normal", "italic"],
  subsets: ['latin']
})

export default function Noticias() {

    return (
      <main className={styles.main}>
        <Areas/>
        <h1  className={merriweather.className}>Noticias</h1>
        <ListadoNoticias/>
      </main>
    )
  }




