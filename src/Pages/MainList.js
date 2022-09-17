import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../component/Navbar'
import Sidebar from '../component/Sidebar'
import Studentsdata from '../component/Studentsdata'
import Dashbord from './Student/Dashbord'

function MainList() {
    return (
        // <div>
        //     <div>
        //     <Sidebar/>

        //     <Navbar />
            
        //     </div>
        //     <div className='content-wrapper'>
        //         {/* <Studentsdata/> */}
        //         {/* <Dashbord/> */}
        //         <Outlet />
                
        //         {/* console.log(<Outlet/>) */}
        //     </div>
            
        // </div>
        <div className="hold-transition sidebar-mini">
            {/* <ToastContainer /> */}
            <div className="wrapper">
                <Navbar />
                <Sidebar  />
                <div className="content-wrapper">
                    {/* <permisionAccess.Provider value={access_perm}> */}
                        <Outlet />
                    {/* </permisionAccess.Provider> */}
                    <aside className="control-sidebar control-sidebar-dark">
                        <div className="p-3">
                            <h5>Title</h5>
                            <p>Sidebar content</p>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    )
}

export default MainList
