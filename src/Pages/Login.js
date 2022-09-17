// import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Postservice from '../Service/Postservice';
// import Postservice from './Service/Postservice';


function Login() {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        // localStorage.setItem("token",)
        // console.log("data->", data)

        Postservice.login_Data(data)
            // console.log(data)
            .then((res) => {
                localStorage.setItem('logindata', JSON.stringify(data))
                localStorage.setItem("token", res.token)
                console.log("login then",res)
                // return (res.data)
            })
            .catch(function (error) {
                console.log("login catch->",error)
                // return (error)
            })

        navigate("/MainList")
        console.log(data)
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
                            <p className="login-box-msg">Sign in to start your session</p>

                            <form onSubmit={handleSubmit(onSubmit)}>
                                {/* <div className="input-group mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="First Name"
                                            {...register("firstname", { required: true })} />

                                        <div className=''>
                                            {errors.firstname?.type === 'required' && <p className='text-danger'>*firstname is required</p>}
                                        </div>
                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                                <span className="fas fa-envelope"></span>
                                            </div>
                                        </div>
                                    </div> */}
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
                                <div className="row">
                                    <div className="col-8">
                                        <div className="icheck-primary">
                                            <input type="checkbox" id="remember" />
                                            <label htmlFor="remember">
                                                Remember Me
                                            </label>
                                        </div>
                                    </div>
                                    <div className=" d-flex justify-content-between aling-items-center">
                                        <button type="button" className="btn btn-primary btn-block mx-2  " onClick={()=>{navigate("/signup")}} >Sign Up</button>
                                        <button type="submit" className="btn btn-primary btn-block m-0" >Sign In</button>
                                    </div>
                                </div>
                            </form>




                        </div>
                    </div>
                </div>
            </div>
            {/* <Outlet/> */}
        </>
    )
}

export default Login
