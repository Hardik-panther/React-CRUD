import React from 'react'

function Navbar() {

    return (
        <>
            <div >
                <div className="hold-transition sidebar-mini layout-fixed" data-panel-auto-height-mode="height">
                    <div className="wrapper">
                        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" data-widget="pushmenu" href="/" role="button"><i className="fas fa-bars"></i></a>
                                </li>
                                <li className="nav-item d-none d-sm-inline-block">
                                    <a href="index3.html" className="nav-link">Home</a>
                                </li>
                                <li className="nav-item d-none d-sm-inline-block">
                                    <a href="/" className="nav-link">Contact</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
