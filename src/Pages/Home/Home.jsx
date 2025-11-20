import styles from './home.module.css';
import { Formulario } from '../../Components/Formulario/Formulario.jsx';
import tiendaBike from './img/gimnasio.png';
import coderReplica from './img/coderPic.png';
import weatherWeb from './img/weatherWeb.png';
import calculadoraWeb from './img/calculadoraWeb.png';

export const Home = () => {

  return (
    <>
      <section className={styles.sectorr}>
        {/* -------------------------HOME------------------------- */}
        <span id='yo'></span>
        <div>
          <h1 className={styles.titles}>SOBRE MI</h1>
        </div>
        <p className={styles.home} >Soy Front-End Developer especializado en React, JavaScript y desarrollo de interfaces
          modernas, con formación Full Stack y experiencia real integrando APIs REST, manejando estado con React Hooks, y
          construyendo UI escalables bajo arquitectura basada en componentes. Trabajo con HTML5, CSS3, SASS, Bootstrap,
          Git/GitHub, Node.js, optimización de rendimiento y buenas prácticas de accesibilidad.
          <br /><br />
          Me enfoco en crear aplicaciones rápidas, limpias y mantenibles, utilizando herramientas y enfoques actuales como
          Responsive Design, consumo de APIs, testing básico y flujos de trabajo ágiles (Scrum). Sigo perfeccionándome en
          tecnologías del ecosistema moderno como TypeScript, Next.js y diseño orientado a performance, con el objetivo de
          entregar soluciones cada vez más sólidas y profesionales.</p>


        {/* ----------------------SERVICIOS---------------------- */}
        <h2 className={styles.titles}>EXPERIENCIA</h2>
        <div className={styles.stitulo}>
          <a href="#" className={styles.exp} >
            <p className={styles.fecha}>2024 -- 2025</p>
            <div>
              <h4>Front-End Developer – Libra </h4>
              <p id='proyecto'>Implementación de la arquitectura frontend del sistema Libra con React, aplicando Hooks,
                manejo de estados y diseño basado en componentes. Integración con backend mediante REST APIs, optimización
                de rendimiento y desarrollo de interfaces responsivas orientadas a uso operativo intensivo.</p>
              <div className={styles.tecnologias}>
                <p className={styles.tec}>JavaScript</p>
                <p className={styles.tec}>React js</p>
                <p className={styles.tec}>HTML5</p>
                <p className={styles.tec}>CSS 3</p>
                <p className={styles.tec}>API Integration</p>
              </div>
            </div>
          </a>
        </div >

        {/* --------------------------WEATHER-WEB------------------------------- */}
        <h3 className={styles.titles}>PROYECTOS</h3>

        <a href="https://ubbee.github.io/PaginaDelClima/" target="_blank" className={styles.proyectos} id={styles.idd}>
          <img src={weatherWeb} alt="captura de la web de weather web" />
          <div>
            <h5>Página del clima - LIVE</h5>
            <p>Desarrollé una aplicación web dinámica que muestra el clima actual,
              pronósticos por hora y por semana utilizando la API de Open-Meteo.
              El proyecto integra geolocalización en tiempo real para detectar la ubicación
              del usuario y actualizar los datos automáticamente. Su diseño responsive
              permite una visualización clara y atractiva tanto en dispositivos móviles
              como en pantallas grandes, priorizando la accesibilidad y la experiencia del usuario.</p>
            <div className={styles.tecnologias}>
              <p className={styles.tec}>JavaScript</p>
              <p className={styles.tec}>React js</p>
              <p className={styles.tec}>HTML5</p>
              <p className={styles.tec}>CSS 3</p>
              <p className={styles.tec}>Open Meteo Api</p>
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

        {/* --------------------------LANDING-PAGE------------------------------- */}
        <a href="https://gimnacio01.netlify.app" target="_blank" className={styles.proyectos}>
          <img src={tiendaBike} alt="captura de la web gimnacio MetaBody" />
          <div>
            <h5>Proyecto Web - Gimnasio MetaBody</h5>
            <p>Desarrollé una landing page para un gimnasio, enfocándome en una presentación clara de sus servicios, beneficios y ubicación.
              El diseño está pensado para ofrecer una navegación fluida y visualmente atractiva, guiando al usuario por secciones bien definidas con llamados a la acción visibles.
              La estética moderna y limpia ayuda a transmitir profesionalismo, mientras que la estructura responsive asegura una buena experiencia en distintos dispositivos. El proyecto fue desplegado en Netlify, garantizando un acceso rápido y sin complicaciones.</p>
            <div className={styles.tecnologias}>
              <p className={styles.tec}>HTML5</p>
              <p className={styles.tec}>CSS 3</p>
              <p className={styles.tec}>SCSS</p>
              <p className={styles.tec}>Netlify</p>
              <p className={styles.tec}>Bootstrap</p>
            </div>
          </div>
        </a>

        {/* --------------------------CALCULADORA------------------------------- */}
        <a href="https://ubbee.github.io/calculadora/" target="_blank" className={styles.proyectos}>
          <img src={calculadoraWeb} alt="captura de la web gimnacio MetaBody" />
          <div>
            <h5>Proyecto Web – Calculadora React</h5>
            <p>Calculadora moderna desarrollada con React, JavaScript y SCSS, enfocada en rendimiento y UX. Implementé estado con useReducer, soporte de teclado
              y números negativos (p. ej. 7 × -2), funciones unarias (x², x³, √, 1/x), memoria e historial persistente con localStorage. UI responsive,
              animaciones sutiles y variables SCSS bilingües (ES+EN) para mantener un diseño limpio y escalable.</p>
            <div className={styles.tecnologias}>
              <p className={styles.tec}>React</p>
              <p className={styles.tec}>JavaScript</p>
              <p className={styles.tec}>SCSS</p>
              <p className={styles.tec}>Vite</p>
              <p className={styles.tec}>useReducer</p>
              <p className={styles.tec}>LocalStorage</p>
              <p className={styles.tec}>Responsive UI</p>
            </div>
          </div>
        </a>

        {/* --------------------------------------------------------- */}


        <Formulario />

      </section>
    </>
  )
}


