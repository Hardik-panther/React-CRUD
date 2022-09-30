import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Postservice from '../../Service/Postservice'
import swal from 'sweetalert';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { mypermissionaccess } from '../MainList';


function UserDashbord() {
    const navigate = useNavigate()
    const accesspermission = useContext(mypermissionaccess)
    const [userdata, setUserdata] = useState([])
    // console.log("accesspermission===>", accesspermission)

    const handleClick = (id) => {
        navigate("/userform/" + id)
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
                Postservice.delete_UserData(id, elem)
                    .then((res) => {
                        setUserdata(res)
                    })
            })
    }
    useEffect(() => {
        Postservice.get_UserData()
            .then((res) => {
                // res.json()
                // console.log("getuaserdata", res)
                setUserdata(res)
            })
            .catch((error) => {
                console.log("erroruserdata", error)
            })
    }, [])
    return (
        <>
            <div className='d-flex align-items-center  '>
                <div>
                    <h4 className='mx-5 mt-2'>User Data</h4>
                </div>
                <div className='mx-5 ml-auto mt-2'>
                    {accesspermission.includes("view user") && <button type="button" className="btn btn-primary btn-block    " onClick={() => { navigate("/userform") }} >Create User</button>}
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
                                        <th>Role</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        {/* <th>Password </th>
                                        <th>Confirm Password</th> */}
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Array.isArray(userdata) && userdata.map((elem, inx) => {
                                        return (
                                            <tr key={inx}>
                                                <td>{elem.id}</td>
                                                <td >{elem.role_id}</td>
                                                <td >{elem.name}</td>
                                                <td >{elem.email}</td>
                                                {/* <td>{elem.password}</td>
                                                <td>{elem.confirm_password}</td> */}
                                                <td>
                                                    <div>
                                                        {accesspermission.includes("edit user") && <button className='btn-primary mx-2' onClick={() => { handleClick(elem.id, elem) }}><i className="fa-solid fa-pen-to-square"></i></button>}
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

export default UserDashbord
