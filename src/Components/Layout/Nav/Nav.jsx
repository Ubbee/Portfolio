import styles from './nav.module.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export const Nav = () => {

    const scrollToFormulario = () => {
        const formularioElement = document.getElementById('formu');
        if (formularioElement) {
            formularioElement.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const scrollToYo = () => {
        const formularioElement = document.getElementById('yo');
        if (formularioElement) {
            formularioElement.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const scrollToProyecto = () => {
        const formularioElement = document.getElementById('proyecto');
        if (formularioElement) {
            formularioElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header>
            <nav className={styles.nav}>
                <a href="" className={styles.tit}> Santiago Curotto</a>
                <h1>Junior Frontend developer</h1>
                <p>Creo experiencias web atractivas, accesibles y pixel-perfect, optimizando cada detalle para una navegación fluida.</p>
                <ul className={styles.uul}>
                    <li className={styles.lii}><Link onClick={scrollToYo}>SOBRE MI</Link></li>
                    <li className={styles.lii}><Link onClick={scrollToProyecto}>PROYECTOS</Link></li>
                    <li className={styles.lii}><Link onClick={scrollToFormulario}>CONTACTO</Link></li>
                </ul>

                <div className={styles.social} >
                    <a href="https://github.com/ubbee" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                    <a href="https://www.linkedin.com/in/santiagocurotto/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                    <a href="https://www.instagram.com/santiagocurottoo/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                    <a href="https://wa.me/+5492612520758" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                        <FontAwesomeIcon icon={faWhatsapp} size="2x" />
                    </a>
                </div>

            </nav>
        </header>


    )
}
