import styles from './cursor.module.css'
import { useEffect } from 'react';

export const Cursor = () => {

    useEffect(() => {
        const cursor = document.getElementById('custom-cursor');

        const handleMouseMove = (e) => {
            const { clientX, clientY } = e; // Obtener las coordenadas del mouse
            cursor.style.left = `${clientX}px`; // Ajustar la posición horizontal
            cursor.style.top = `${clientY}px`; // Ajustar la posición vertical
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className={styles.cursor} id="custom-cursor"></div>
    )
}
