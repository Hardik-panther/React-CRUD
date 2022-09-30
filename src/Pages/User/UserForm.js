import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import Postservice from '../../Service/Postservice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function UserForm() {
    const navigate = useNavigate()
    const [useredit, setUserEdit] = useState()
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const param = useParams()

    const onSubmit = (data) => {

        if (param.id) {
            let id = param.id
            Postservice.update_UserData(id, data)
                .then((res) => {
                    toast.success(res)
                    navigate("/userdashbord")
                })
                .catch((error) => {
                })
        } else {
            Postservice.create_UserData(data)
                .then((res) => {
                    toast.success(res)
                    navigate("/userdashbord")
                })
                .catch((error) => {
                })
        }
    }

    useEffect(() => {
        Postservice.edit_UserData(param.id)
            .then((res) => {
                setUserEdit(res)
                reset({
                    role: res.role_id,
                    name: res.name,
                    email: res.email,
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
                                        <div className=" form-group mb-3">
                                            <label htmlFor="exampleInputFile">Role</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                placeholder="role"
                                                {...register("role", { required: true })}
                                            />
                                            {errors.role?.type === 'required' && <p className='text-danger'>role  is required</p>}
                                        </div>
                                        <div className="form-group mb-3">
                                            <label htmlFor="exampleInputPassword1">Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="name"
                                                {...register("name", { required: true })}
                                            />
                                            {errors.name?.type === 'required' && <p className='text-danger'>*name  is required</p>}
                                        </div>
                                        <div className="form-group mb-3">
                                            <label htmlFor="exampleInputPassword1">Email</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                placeholder="email"
                                                {...register("email", { required: true })}
                                            />
                                            {errors.email?.type === 'required' && <p className='text-danger'>email  is required</p>}
                                        </div>
                                        <div className="form-group mb-3">
                                            <label htmlFor="exampleInputPassword1">Password</label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                placeholder="password"
                                                {...register("password", { required: true })}
                                            />
                                            {errors.password?.type === 'required' && <p className='text-danger'>password  is required</p>}
                                        </div>
                                        <div className="form-group mb-3">
                                            <label htmlFor="exampleInputPassword1">Confirm Password</label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                placeholder="confirm_password"
                                                {...register("confirm_password", { required: true })}
                                            />
                                            {errors.confirm_password?.type === 'required' && <p className='text-danger'>Confirm password  is required</p>}
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
            </section>
        </>
    )
}

export default UserForm
