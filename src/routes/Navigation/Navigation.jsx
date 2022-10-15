import { Link, Outlet } from "react-router-dom"
import { useContext } from 'react'
import { UserContext } from '/src/context/UserContext'

export const Navigation = () => {

    const { setUser, user } = useContext(UserContext)

    const logout = () => {
        localStorage.removeItem('user')
        setUser(null)
    }

    return (
        <>
            <nav>
                <div>
                    <span color="white">Wheater App</span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span ></span>
                    </button>
                    <div>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to='/'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={user ? "/location/ClimateCard" : "/login"}>Create location</Link>
                            </li>
                            {
                                user ?
                                    (
                                        <li >
                                            <a href="." className="nav-link" onClick={logout}> Log out</a>
                                        </li>
                                    ) :
                                    (
                                        <li className="nav-item">
                                            <Link className="nav-link" to='/login'>Log in</Link>
                                        </li>
                                    )
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        <Outlet/>
        </>
    )
}