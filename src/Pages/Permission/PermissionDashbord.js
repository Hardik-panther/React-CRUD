import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Postservice from '../../Service/Postservice'
import swal from 'sweetalert';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { mypermissionaccess } from '../MainList';

function PermissionDashbord() {
    const navigate = useNavigate()
    const accesspermission = useContext(mypermissionaccess)
    const [permissiondata, setPermissionData] = useState([])
    const handleClick = (id) => {
        navigate("/addpermission/" + id)
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
                Postservice.delete_PermissionData(id, elem)
                    .then((res) => {
                        setPermissionData(res)
                    })
            })
    }
    useEffect(() => {
        Postservice.get_PermissionData()
            .then((res) => {
                setPermissionData(res)
            })
    }, [])
    return (
        <>
            <div className='d-flex align-items-center  '>
                <div>
                    <h4 className='mx-5 mt-2'>Permission</h4>
                </div>
                <div className='mx-5 ml-auto mt-2'>
                    {accesspermission.includes("view permission") && <button type="button" className="btn btn-primary btn-block" onClick={() => { navigate("/addpermission") }} >Add permission</button>}
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
                                        {/* <th>Permission</th> */}
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Array.isArray(permissiondata) && permissiondata.map((elem, inx) => {
                                        // console.log("roledata elem",roledata)
                                        return (
                                            <tr className='border-bottom' key={inx}>
                                                <td>{elem.id}</td>
                                                <td >{elem.name}</td>
                                                <td>
                                                    <div>
                                                        {accesspermission.includes("edit permission") && <button className='btn-primary mx-2' onClick={() => { handleClick(elem.id, elem) }}><i className="fa-solid fa-pen-to-square"></i></button>}
                                                        {accesspermission.includes("delete user") && <button className='btn-danger' onClick={() => { handleDelete(elem.id, elem) }}><i className="fas fa-trash"></i></button>}
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

export default PermissionDashbord
