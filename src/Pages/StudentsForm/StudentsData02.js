import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function StudentsData02(props) {
    const navigate=useNavigate()

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log("2->",data)
        props.studentdata(data)
        navigate("/mainlist/studentsform/StudentsData03")
    }
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="address"
                        {...register("address", { required: true })}
                    />
                    {errors.address?.type === 'required' && <p>address  is required</p>}
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
                        placeholder="city"
                        {...register("city", { required: true })}
                    />
                    {errors.city?.type === 'required' && <p>city  is required</p>}
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
                        placeholder="state"
                        {...register("state", { required: true })}
                    />
                    {errors.state?.type === 'required' && <p>state  is required</p>}
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
                        placeholder="country"
                        {...register("country", { required: true })}
                    />
                    {errors.country?.type === 'required' && <p>country  is required</p>}
                    <div className="input-group-append">
                        <div className="input-group-text">
                            <span className="fas fa-envelope"></span>
                        </div>
                    </div>
                </div>
                <div className="col-2 d-flex">

                <button type="button" className="btn btn-primary btn mx-2 " onClick={()=>{navigate("/mainlist/studentsform")}}>Previous</button>

                    <button type="submit" className="btn btn-primary btn-" >Next</button>
                </div>
            </form>
        </>
    )
}

export default StudentsData02
