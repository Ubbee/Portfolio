import { Nav } from './Nav/Nav.jsx'
import { Outlet } from 'react-router-dom'

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
