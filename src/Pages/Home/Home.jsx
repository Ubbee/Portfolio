import styles from './home.module.css';
import React, { useEffect, useState } from 'react';
import { Formulario } from '../../Components/Formulario/Formulario.jsx';
import tiendaBike from './img/EcomerccePic.png';
import coderReplica from './img/coderPic.png';
import SolucionesGlobales from './img/captura Soluciones.png';

export const Home = () => {

  const [position, setPosition] = useState(null);
  const address = 'Boulogne Sur Mer y Uruguay, Capital, Mendoza, Argentina';

  useEffect(() => {
    const fetchCoordinates = async () => {
      try {
        const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${address}`);
        const data = await response.json();
        if (data.length > 0) {
          setPosition([data[0].lat, data[0].lon]);
        } else {
          console.warn('No se encontraron coordenadas para la dirección proporcionada.');
        }
      } catch (error) {
        console.error('Error al obtener coordenadas:', error.message);
      }
    };
    fetchCoordinates();
  }, [address]);

  const scrollToFormulario = () => {
    const sectionElement = document.getElementById('formu');
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section className={styles.sectorr}>
        {/* -------------------------HOME------------------------- */}
        <span id='yo'></span>
        <div>
          <h1 className={styles.titles}>SOBRE MI</h1>
        </div>
        <p className={styles.home} >Comencé mi aventura en el desarrollo
          web creando interfaces dinámicas y reactivas, buscando siempre ofrecer
          experiencias fluidas en cualquier dispositivo. Desde entonces, he tenido
          la oportunidad de contribuir a diversos proyectos{/*}, desde pequeñas landing
          pages hasta aplicaciones más complejas*/}. <br /> Me enfoco en crear sitios web que
          no solo se vean bien, sino que también estén optimizados bajo el capó,
          ahorrando código para mejorar el rendimiento y la mantenibilidad.
          <br /><br />
          Actualmente, mi prioridad es diseñar y construir interfaces web reactivas,
          centradas en la eficiencia y en la experiencia del usuario. Cuando no
          estoy escribiendo código, me gusta explorar nuevas técnicas de desarrollo,
          leer sobre tendencias tecnológicas y disfrutar de tiempo de calidad con
          mis seres queridos</p>


        {/* ----------------------SERVICIOS---------------------- */}
        <h2 className={styles.titles}>EXPERIENCIA</h2>
        <div className={styles.stitulo}>
          <a href="#" className={styles.exp} >
            <p className={styles.fecha}>2024 -- PRESENT</p>
            <div>
              <h4>Front-End Developer - Freelance</h4>
              <p id='proyecto'>Creación y mantenimiento de páginas web altamente reactivas, garantizando una experiencia
                de usuario fluida en dispositivos de diferente tamaño. Priorizo la eficiencia del
                código, optimizando su estructura para reducir redundancias y mejorar el
                rendimiento general del sitio, logrando soluciones limpias y escalables</p>
              <div className={styles.tecnologias}>
                <p className={styles.tec}>JavaScript</p>
                <p className={styles.tec}>React js</p>
                <p className={styles.tec}>HTML5</p>
                <p className={styles.tec}>CSS 3</p>
              </div>
            </div>
          </a>
        </div >

        {/* --------------------------SOLUCIONES-GLOBALES------------------------------- */}
        <h3 className={styles.titles}>PROYECTOS</h3>

        <a href="https://solucionesglobales.netlify.app" target="_blank" className={styles.proyectos} id={styles.idd}>
          <img src={SolucionesGlobales} alt="captura de la web de Soluciones Globales" />
          <div>
            <h5>Soluciones Globales - WEB</h5>
            <p>Desarrollé una Landing Page responsive diseñada para proporcionar
              a los clientes toda la información necesaria sobre la empresa de
              manera clara y accesible. El objetivo principal fue optimizar
              los tiempos y mejorar la eficiencia en el proceso de contacto,
              asegurando que los usuarios puedan encontrar rápidamente lo
              que necesitan desde cualquier dispositivo.</p>
            <div className={styles.tecnologias}>
              <p className={styles.tec}>JavaScript</p>
              <p className={styles.tec}>React js</p>
              <p className={styles.tec}>HTML5</p>
              <p className={styles.tec}>CSS 3</p>
            </div>
          </div>
        </a>
        {/* --------------------------CODERHOUSE------------------------------- */}
        <a href="https://ubbee.github.io/PF-Curotto/" target="_blank" className={styles.proyectos}>
          <img src={coderReplica} alt="captura de la replica de CoderHouse" />
          <div>
            <h5>CoderHouse - PROYECTO 1</h5>
            <p>Desarrollé una plataforma web inspirada en el diseño de Coderhouse,
              enfocada en mejorar la experiencia de los estudiantes al acceder a
              los cursos y materiales educativos de manera eficiente. Implementé
              un diseño responsive para asegurar que los usuarios puedan navegar
              de forma intuitiva desde cualquier dispositivo. El objetivo principal
              fue crear una interfaz clara y atractiva, utilizando SCSS para mejorar
              la organización del código y optimizando la carga del sitio con
              JavaScript, mejorando la accesibilidad y la experiencia del usuario.</p>
            <div className={styles.tecnologias}>
              <p className={styles.tec}>JavaScript</p>
              <p className={styles.tec}>React js</p>
              <p className={styles.tec}>HTML5</p>
              <p className={styles.tec}>CSS 3</p>
            </div>
          </div>
        </a>

        {/* --------------------------ECOMMERCE------------------------------- */}
        <a href="https://ubbee.github.io/BikeShop/" target="_blank" className={styles.proyectos}>
          <img src={tiendaBike} alt="captura de la tienda BikeShop" />
          <div>
            <h5>CoderHouse - Eccomerce - PROYECTO 2</h5>
            <p>Desarrollé una tienda de bicicletas sencilla utilizando JavaScript,
              enfocándome en ofrecer a los usuarios una experiencia de compra fluida
              y accesible. Implementé un diseño limpio y fácil de navegar, permitiendo
              a los visitantes explorar los productos de manera intuitiva. El objetivo
              principal fue crear una interfaz atractiva que facilite la visualización
              y selección de bicicletas, optimizando la carga de la página para
              mejorar la velocidad y la usabilidad. Utilicé buenas prácticas de
              programación para asegurar un código eficiente y fácil de mantener.</p>
            <div className={styles.tecnologias}>
              <p className={styles.tec}>JavaScript</p>
              <p className={styles.tec}>React js</p>
              <p className={styles.tec}>HTML5</p>
              <p className={styles.tec}>CSS 3</p>
            </div>
          </div>
        </a>

        {/* --------------------------------------------------------- */}


        <Formulario />

      </section>
    </>
  )
}


