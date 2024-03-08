"use client"
import { useState } from 'react';
import styles from './Buscador.module.css'

export function Busqueda () {

    const [busqueda, setBusqueda] = useState('');
    const [resultadoBusqueda, setResultadoBusqueda] = useState([]);

    const manejarCambio = (e) => {
        setBusqueda(e.target.value);
    };

    const manejarEnvio = async (e) => {
        e.preventDefault();
        try {
            const respuesta = await fetch('http://192.168.1.13:8055/items/buscar?query=' + busqueda);
            if (!respuesta.ok) {
                throw new Error('Error en la solicitud: ' + respuesta.status);
            }
            const resultados = await respuesta.json();
            setResultadoBusqueda(resultados); // Actualiza el estado con los resultados
        } catch (error) {
            console.error('Error al realizar la búsqueda:', error);
            // Opcional: Manejo de errores
        }
    };
    

    return(
        <div className={styles.buscador}>
            <form onSubmit={manejarEnvio}>
                <input
                    type="text"
                    placeholder='¿Qué buscas?'
                    value={busqueda}
                    onChange={manejarCambio}
                />
                <button type='submit'>
                    <i className="material-icons" aria-label="Buscar">search</i>
                </button>
            </form>

            <div>
            {/* Asegúrate de ajustar este mapeo a la estructura de tus datos */}
            {resultadoBusqueda.map((item, index) => (
                <div key={index}>
                    {/* Ejemplo: asumiendo que tus resultados tienen una propiedad 'titulo' */}
                    <p>{item.titulo}</p>
                </div>
            ))}
            </div>
        </div>
    )
  }
