import React from 'react'
// import Studentsdata from './Students/Studentsdata'
import { Outlet, useNavigate } from 'react-router-dom'
import Sidebar from './Sidebar'
import Studentsdata from './Studentsdata'
// import StudentsItem from './componants/StudentsItem'

function Navbar() {

    const navigate = useNavigate()
    // console.log(students)

    return (
        <>
            {/* <nav className="navbar navbar-expand-lg navbar-dark bg-info ">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#!">Crud Practice </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarColor03">
                        <ul className="navbar-nav me-auto">

                        </ul>

                        <button
                            className="btn btn-primary my-2 my-sm-0 d-flex justify-content-end"
                            onClick={() => navigate("/Studentsdata")}
                        >
                            Create Employee
                        </button>
                    </div>
                </div>
            </nav> */}
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
                        <div className='ml-auto '>
                    <button type="button" className="btn btn-primary btn-block   " onClick={()=>{navigate("/mainlist/studentsform.")}} >Create Table</button>

                    </div>

                    </nav>

           

                    </div>
 

    
                </div>

            </div>
            <div className='d-flex'>
                {/* <Sidebar /> */}
            </div>
            {/* <Studentsdata/> */}
            {/* <Outlet /> */}
        </>
    )
}

export default Navbar
