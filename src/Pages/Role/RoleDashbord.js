import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Postservice from '../../Service/Postservice'
import swal from 'sweetalert';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { mypermissionaccess } from '../MainList';


function RoleDashbord() {
    const navigate = useNavigate()
    const accesspermission = useContext(mypermissionaccess)
    const [roledata, setRoleData] = useState([])
    // console.log("roledata elem", roledata)

    const handleClick = (id) => {
        navigate("/addrole/" + id)
    }

    const handleDelete = (id, elem) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((res) => {
                if (res) {
                    swal("Poof! Your imaginary file has been deleted!", {
                        icon: "success",
                    });
                } else {
                    swal("Your imaginary file is safe!");
                }
                Postservice.delete_RoleData(id, elem)
                    .then((res) => {
                        setRoleData(res)
                    })
            })
    }
    useEffect(() => {
        Postservice.get_RoleData()
            .then((res) => {

                // console.log("role data", res)
                setRoleData(res)
            })
            .catch((error) => {
                console.log("role error", error)
            })
    }, [])
    return (
        <>
            <div className='d-flex align-items-center  '>
                <div>
                    <h4 className='mx-5 mt-2'>Role</h4>
                </div>
                <div className='mx-5 ml-auto mt-2'>
                    {accesspermission.includes("view role") && <button type="button" className="btn btn-primary btn-block" onClick={() => { navigate("/addrole") }} >Add Role</button>}
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body table-responsive p-0">
                            <ToastContainer />
                            <table className="table table-hover text-nowrap">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        {/* <th>No</th> */}
                                        <th>Name</th>
                                        <th>Permission</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Array.isArray(roledata) && roledata.map((elem, inx) => {
                                        return (
                                            <tr className='border-bottom' key={inx}>
                                                <td>{elem.id}</td>
                                                <td >{elem.name}</td>
                                                <td>
                                                    {elem.permission.map((permission, inx) => {
                                                        return (
                                                            <ul className='m-0 ' key={inx}>
                                                                <li>{permission.name}</li>
                                                            </ul>
                                                        )
                                                    })}
                                                </td>
                                                <td>
                                                    <div>
                                                        {accesspermission.includes("edit role") && <button className='btn-primary mx-2' onClick={() => { handleClick(elem.id, elem) }}><i className="fa-solid fa-pen-to-square"></i></button>}
                                                        {accesspermission.includes("delete role") && <button className='btn-danger' onClick={() => { handleDelete(elem.id, elem) }}><i className="fas fa-trash"></i></button>}
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RoleDashbord
