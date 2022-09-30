import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Sidebar = () => {
    const navigate = useNavigate()

    const logout = () => {
        localStorage.clear()
        navigate("/")
    }

    return (
        <div>
            <aside className="main-sidebar sidebar-dark-primary elevation-4 ">
                <a href="index3.html" className="brand-link">
                    <span className="brand-text font-weight-light">AdminLTE 3</span>
                </a>
                <div className="sidebar">
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                        </div>
                        <div className="info">
                            <a href="/" className="d-block">Alexander Pierce</a>
                        </div>
                    </div>
                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">

                            <li className="nav-item">
                                <Link to="/dashbord" className="nav-link">
                                    <i className="nav-icon fas fa-tachometer-alt"></i>
                                    <p>
                                        Students
                                    </p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/permissiondashbord" className="nav-link">
                                    <i className="nav-icon fas fa-th"></i>
                                    <p>
                                        Permission
                                    </p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/roledashbord" className="nav-link">
                                    <i className="nav-icon fas fa-chart-pie"></i>
                                    <p>
                                        Role
                                    </p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/userdashbord" className="nav-link">
                                    <i className="nav-icon fas fa-tree"></i>
                                    <p>
                                        User
                                    </p>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <div className='mt-2 d-flex align-item-center'>
                        <button type="button" className="btn btn-secondary btn-block justify-content-start d-flex align-items-center" onClick={() => { logout() }} >
                            <i className="fa-solid fa-right-from-bracket mx-2"></i>
                            <span>Logout</span>
                        </button>
                    </div>
                </div>
            </aside>
        </div>
    )
}

export default Sidebar
