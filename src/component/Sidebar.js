import React from 'react'
// import { Outlet } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div>
            {/* <div className='d-flex' style={{height:"900px"}}>
                <div className=" bg-black sidebar ">
                    <div className="form-inline">
                        <div className="input-group" data-widget="sidebar-search">
                            <input className="form-control form-control-sidebar " type="search" placeholder="Search" aria-label="Search" />
                            <div className="input-group-append">
                                <button className="btn btn-sidebar bg-white ">
                                    <i className="fas fa-search fa-fw"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                          <li className="nav-item">
                            <a href="/" className="nav-link">
                                <i className="nav-icon fas fa-tachometer-alt"></i>
                                <p>
                                    Students
                                </p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="pages/widgets.html" className="nav-link">
                                <i className="nav-icon fas fa-th"></i>
                                <p>
                                    Permission
                                </p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/" className="nav-link">
                                <i className="nav-icon fas fa-chart-pie"></i>
                                <p>
                                    Role
                                </p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/" className="nav-link">
                                <i className="nav-icon fas fa-tree"></i>
                                <p>
                                    User
                                </p>
                            </a>
                        </li>

                    </ul>
                </div>

            </div> */}
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
                                <a href="/" className="nav-link">
                                    <i className="nav-icon fas fa-tachometer-alt"></i>
                                    <p>
                                        Students
                                    </p>
                                </a>

                            </li>
                            <li className="nav-item">
                                <a href="pages/widgets.html" className="nav-link">
                                    <i className="nav-icon fas fa-th"></i>
                                    <p>
                                        Permission
                                    </p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="/" className="nav-link">
                                    <i className="nav-icon fas fa-chart-pie"></i>
                                    <p>
                                        Role
                                    </p>
                                </a>

                            </li>
                            <li className="nav-item">
                                <a href="/" className="nav-link">
                                    <i className="nav-icon fas fa-tree"></i>
                                    <p>
                                        User
                                    </p>
                                </a>

                            </li>
                        </ul>
                    </nav>
                    {/* <!-- /.sidebar-menu --> */}
                </div>
                {/* <!-- /.sidebar --> */}
            </aside>
        </div>
    )
}

export default Sidebar
