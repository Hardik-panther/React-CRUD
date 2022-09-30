import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import Postservice from '../../Service/Postservice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddRole() {
    const param = useParams()
    const navigate = useNavigate()
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const [addcheckbox, setAddcheck] = useState([])
    // const [editcheckbox, setEditCheck] = useState([])
    // console.log("addcheck", editcheckbox)


    useEffect(() => {
        Postservice.get_RoleData()
            .then((res) => {
                // console.log("role add data", res)
                setAddcheck(res)
            })
    }, [])

    useEffect(() => {
        Postservice.edit_RoleData(param.id)
            .then((res) => {
                // console.log("edit role data", res)
                // setEditCheck(res)
                reset({
                    name: res.name,
                    permission: res.permission.map((elem) => {
                        return `${elem.id}`
                    })
                })

            })
    }, [param.id])



    const onSubmit = (data) => {
        if (param.id) {
            let id = param.id
            Postservice.update_RoleData(id, data)
                .then((res) => {
                    toast.success(res)
                    navigate("/roledashbord")
                })
        } else {
            Postservice.create_RoleData(data)
                .then((res) => {
                    toast.success(res)
                    navigate("/roleDashbord")
                })
        }
    }
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
                                        <div className="form-check">
                                            <div className="form-check ">
                                                {addcheckbox.slice(0, 1).map((elem, inx) => {
                                                    // console.log("addcheckbox elem", addcheckbox)
                                                    return (
                                                        <div key={inx} className='innerWidth'>
                                                            <div className='d-flex  permis'>
                                                                <div >
                                                                    {elem.permission.map((perm, inx) => {
                                                                        // console.log("perm", perm)
                                                                        return (
                                                                            <div key={inx} className="">
                                                                                <div>
                                                                                    <input {...register("permission", { required: true })} type="checkbox" className="form-check-input" id={inx} value={perm.id} />
                                                                                    <label className="form-check-label" htmlFor={inx}>{perm.name}</label>
                                                                                </div>
                                                                            </div>
                                                                        )
                                                                    })}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </div>
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

export default AddRole
