import React, { createContext, useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../component/Navbar'
import Sidebar from '../component/Sidebar'
import Postservice from '../Service/Postservice';


const mypermissionaccess = createContext()

function MainList() {

    const [accesspermission, setAccesspermission] = useState([])
    // console.log("accesspermission--123", accesspermission)
    useEffect(() => {
        // let id = param.id
        let id = JSON.parse(localStorage.getItem("user"))

        if (id !== undefined && id !== null) {
            Postservice.edit_RoleData(id.role_id)
                .then((res) => {
                    setAccesspermission(res.permission.map((perm) => {
                        return perm.name;
                    }))
                })
        }
    }, [])


    return (

        <div className="hold-transition sidebar-mini">
            <div className="wrapper">
                <Navbar />
                <Sidebar />
                <div className="content-wrapper">
                    <mypermissionaccess.Provider value={accesspermission}>
                        <Outlet />
                    </mypermissionaccess.Provider>
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
// }
export default MainList;
export { mypermissionaccess }
