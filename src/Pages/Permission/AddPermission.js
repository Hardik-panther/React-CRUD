import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import Postservice from '../../Service/Postservice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddPermission() {
    const navigate = useNavigate()
    const param = useParams()
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const [editpermission, setEditPermission] = useState([])
    // console.log("editpermission", editpermission)

    const onSubmit = (data) => {
        if (param.id) {
            let id = param.id
            Postservice.update_PermissionData(id, data)
                .then((res) => {
                    toast.success(res)
                    navigate("/permissiondashbord")
                })
        } else {
            Postservice.create_PermissionData(data)
                .then((res) => {
                    toast.success(res)
                    navigate("/permissiondashbord")
                })
        }
    }
    useEffect(() => {
        Postservice.get_PermissionData()
            .then((res) => {
                setEditPermission(res)

            })
    }, [])
    useEffect(() => {
        Postservice.edit_PermissionData(param.id)
            .then((res) => {
                reset({
                    name: res.name
                })
            })
    }, [])

    return (
        <>
            <section className="content ">
                <div className="container-fluid">
                    <div className="row justify-content-center ">
                        <div className="col-md-10 my-5">
                            <div className="card card-primary">
                                <div className="card-header">
                                    <h3 className="card-title">User Form</h3>
                                </div>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="card-body">

                                        <div className="form-group mb-3">
                                            <label >Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="name"
                                                {...register("name", { required: true })}
                                            />
                                            {errors.name?.type === 'required' && <p className='text-danger'>*name  is required</p>}
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div >
                </div>
            </section >
        </>
    )
}

export default AddPermission
