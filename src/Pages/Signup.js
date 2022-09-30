import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import Postservice from '../Service/Postservice';

function Signup() {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        Postservice.signup_Data(data)
            .then((res) => {
                console.log("res111111")
                navigate("/")
            })
            .catch((error) => {
                console.log("error")
            })
    }
    return (
        <>
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
                                        type="email"
                                        className="form-control"
                                        placeholder="Email"
                                        {...register("email", { required: true })}
                                    />
                                    {errors.email?.type === 'required' && <p>Email Address is required</p>}
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-envelope"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="input-group mb-3">
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Password"
                                        {...register("password", { required: true })}

                                    />
                                    {errors.password?.type === 'required' && <p>password is required</p>}

                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-lock"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="input-group mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Confirm Password"
                                        {...register("confirm_password", { required: true })}

                                    />
                                    {errors.confirm_password?.type === 'required' && <p>Confirm password is required</p>}

                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-lock"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-8">
                                        <div className="icheck-primary">
                                            <input type="checkbox" id="remember" />
                                            <label htmlFor="remember">
                                                Remember Me
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <button type="submit" className="btn btn-primary btn-block" >Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup
