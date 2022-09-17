import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function StudentsData01(props) {
    // const [sData01, setSData01] = useState()
    console.log("sdata->", props)

    console.log("props->", props)
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log("onsubmit->", data)
        props.studentdata(data)
        // setSData01(data)


        navigate("/mainlist/studentsform/StudentsData02")
    }
    return (
        <div className='hold-transition login-page'>
            <div className="login-box">
                <div className="login-logo">
                    <a href=""><b>Admin</b>LTE</a>
                </div>
                <div className="card">
                    <div className="card-body login-card-body">
                        <p className="login-box-msg">Sign up to start your session</p>



                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="input-group mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="name"
                                    {...register("name", { required: true })}
                                />
                                {errors.name?.type === 'required' && <p>Name  is required</p>}
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-envelope"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="father_name"
                                    {...register("father_name", { required: true })}
                                />
                                {errors.father_name?.type === 'required' && <p>father_name  is required</p>}
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-envelope"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="mother_name"
                                    {...register("mother_name", { required: true })}
                                />
                                {errors.mother_name?.type === 'required' && <p>mother_name  is required</p>}
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-envelope"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="contact_no"
                                    {...register("contact_no", { required: true })}
                                />
                                {errors.contact_no?.type === 'required' && <p>contact_no  is required</p>}
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-envelope"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <button type="submit" className="btn btn-primary btn-block" >Next</button>
                            </div>
                        </form>


                    </div>
                </div>
            </div>
        </div>

    )
}

export default StudentsData01
