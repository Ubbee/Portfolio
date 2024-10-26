import { Nav } from './Nav/Nav.jsx'
import { Outlet } from 'react-router-dom'
import styles from './layout.module.css'

export const Layout = () => {

    return (
        <div >
            <Nav />
            <div>
                <Outlet />
            </div>
        </div>
    )
}
