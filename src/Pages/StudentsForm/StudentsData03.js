import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function StudentsData03(props) {
    const navigate=useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        props.studentdata(data)
        console.log(data)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="school"
                    {...register("school", { required: true })}
                />
                {errors.school?.type === 'required' && <p>school  is required</p>}
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
                    placeholder="standard"
                    {...register("standard", { required: true })}
                />
                {errors.standard?.type === 'required' && <p>standard  is required</p>}
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
                    placeholder="mark"
                    {...register("mark", { required: true })}
                />
                {errors.mark?.type === 'required' && <p>mark  is required</p>}
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
                    placeholder="images"
                    {...register("images", { required: true })}
                />
                {errors.images?.type === 'required' && <p>images  is required</p>}
                <div className="input-group-append">
                    <div className="input-group-text">
                        <span className="fas fa-envelope"></span>
                    </div>
                </div>
            </div>
            <div className="col-2 d-flex">
            <button type="button" className="btn btn-primary btn mx-2 " onClick={()=>{navigate("/mainlist/studentsform/StudentsData02")}}>Previous</button>

                <button type="submit" className="btn btn-primary btn-block" >Submit</button>
            </div>
        </form>
    )
}

export default StudentsData03
