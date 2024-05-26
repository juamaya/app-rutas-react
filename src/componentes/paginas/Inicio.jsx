import React, { useEffect } from "react";
import playa from '../../assets/imagenes/cachucha.jpg'
import styles from './Inicio.module.css'

const Inicio = () => {

  
  useEffect(() => {
     
    document.title = 'JUAMAYA | Page Home';
  });
  return (
    <div>
      <h1>Pagina Inicio</h1>

      <section >

        <h2>La playa de La Cachucha es una playa familiar que se encuentra dentro del núcleo urbano de Puerto Real.</h2>
        <hr />

        <div className={styles.content} >


          <img src={playa} alt='playa' />
          <div className={styles.caracteristicas} >
            <h2>Caracteristicas:</h2>
            <h4>
              Bandera Azul 2023:  No <br />
              Grado Ocupación: Baja<br />
              Longitud costa: 500<br />
              Morfología: Arena<br />
              Oleaje: Suave<br />
              Tipo Arena: Fina dorada<br />
              Tipo Playa: urbana</h4>

          </div>


        </div>


      </section>
    </div>
  )
}

export default Inicio